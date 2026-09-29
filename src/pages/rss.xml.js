import { getRssString } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context) {
  // Load posts for RSS feed
  const posts = (await getCollection('posts')).sort((a, b) =>
    // Sort posts by pubdate descending
    a.data.pubDate > b.data.pubDate ? -1 : 1,
  );

  const xml = await getRssString({
    title: 'Jake Wilson',
    description: 'A blog about software development',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}`,
      content: sanitizeHtml(parser.render(post.body ?? ''), {
        allowedTags: [],
        allowedAttributes: {},
      }),
    })),
    customData: `<language>en-gb</language>`,
  });

  return new Response(xml, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
