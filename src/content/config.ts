import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(20, "Max 20 characters for title"),
    tags: z.array(z.string()),
    description: z.string().max(60, "Max 60 characters for description"),
    type: z.enum(["lesson", "guide"]),
  }),
});

// const projectCollection = defineCollection({})

export const collections = {
  blog: blogCollection,
  // projects: projectCollection
};
