import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { rssSchema } from '@astrojs/rss';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: ({ image }) =>
    rssSchema.extend({
      title: z.string().nonempty('Posts must have titles'),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
          caption: z.string().optional(),
        })
        .optional(),
      relatedPosts: z.array(reference('blog')).optional(),
    }),
});

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().nonempty('Work projects must have titles'),
      description: z.string(),
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      clients: z
        .array(
          z.object({
            name: z.string().nonempty(),
            link: z.string().optional(),
          }),
        )
        .optional(),
      featuredImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

export const collections = { posts, work };
