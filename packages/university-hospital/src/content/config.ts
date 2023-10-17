import { z, defineCollection } from 'astro:content';

const cardCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string().optional(),
    subhead: z.string().optional(),
    image: z.union([
       image(),
       z.array(image())
    ]).optional(),
    icon: z.string().optional()
  })
});

export const collections = {
  'cards': cardCollection,
};
