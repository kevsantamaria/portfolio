import { defineCollection, z } from 'astro:content'

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      order: z.number(),
      description: z.string(),
      img: image(),
      imgAlt: z.string(),
      githubLink: z.string().url(),
      liveDemoLink: z.string().url().optional(),
      extraIcons: z.array(z.string()).optional(),
    }),
})

export const collections = { projects: projectsCollection }
