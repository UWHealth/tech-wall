import { z, defineCollection } from 'astro:content';

const cardCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subhead: z.optional(z.string()),
    image: z.optional(z.string()),
    icon: z.optional(z.string()),
  })
});

export const collections = {
  'cards': cardCollection,
};
