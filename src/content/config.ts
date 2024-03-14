import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(40, "Max 40 characters for title"),
    description: z.string(),
    techStack: z.array(z.object({ name: z.string(), icon: z.string() })),
    github: z.string().url(),
    website: z.optional(z.string().url()),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(40, "Max 40 characters for title"),
    description: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
  posts: postsCollection,
};
