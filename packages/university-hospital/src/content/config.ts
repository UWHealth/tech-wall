import { z, defineCollection } from 'astro:content';

const cardCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>  z.object({
    title: z.string().optional(),
    secondaryTitle: z.string().optional(),
    subhead: z.string().optional(),
    image: z.union(
      z.string(),
      z.array(z.string())
    ).optional(),
    icon: z.string().optional(),
  })
});

const layoutCollection = defineCollection({
  type: 'data',
  schema: z.object({
    video: z.string(),
  })
})

export const collections = {
  'cards': cardCollection,
  'layout': layoutCollection
};
