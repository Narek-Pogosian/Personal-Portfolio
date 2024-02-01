import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(40, "Max 40 characters for title"),
    description: z.string().max(80, "Max 80 characters for description"),
    tags: z.array(z.string()),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(40, "Max 40 characters for title"),
    description: z.string().max(80, "Max 80 characters for description"),
    techStack: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
