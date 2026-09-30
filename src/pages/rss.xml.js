import { getRssString } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { siteConfig } from '../config';

const parser = new MarkdownIt();

export async function GET(context) {
  // Load posts for RSS feed
  const posts = (await getCollection('posts')).sort((a, b) =>
    // Sort posts by pubdate descending
    a.data.pubDate > b.data.pubDate ? -1 : 1,
  );

  const xml = await getRssString({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: new URL(`/posts/${post.id}`, context.site).href,
      author: siteConfig.author.email,
      content: sanitizeHtml(parser.render(post.body ?? ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          'img',
          'pre',
          'code',
        ]),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ['src', 'alt', 'title'],
        },
      }),
    })),
    customData: `<language>en-gb</language><atom:link href="${new URL('rss.xml', context.site)}" rel="self" type="application/rss+xml" />`,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
  });

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
