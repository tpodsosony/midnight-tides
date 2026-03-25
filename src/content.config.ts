// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob} from 'astro/loaders';

// 3. Define your collection(s)
const blogs = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/blog' }),
//   schema: z.object({
//     title: z.string(),
//     pubDate: z.coerce.date(),
//     description: z.string(),
//     author: z.string()
  });

const poems = defineCollection({
  loader: glob ({ pattern: '**/*.mdx', base: './src/poems' }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections =
{
  blogs,
  poems
};
