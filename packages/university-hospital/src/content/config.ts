import { z, defineCollection } from 'astro:content';

const cardCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    subhead: z.string().optional(),
    image: z.union(
      z.string(),
      z.array(z.string())
    ).optional(),
    icon: z.string().optional(),
  })
});

export const collections = {
  'cards': cardCollection,
};
