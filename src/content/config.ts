import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(40, "Max 40 characters for title"),
    tags: z.array(z.string()),
    description: z.string().max(80, "Max 80 characters for description"),
    type: z.enum(["lesson", "guide"]),
  }),
});

// const projectCollection = defineCollection({})

export const collections = {
  blog: blogCollection,
  // projects: projectCollection
};
