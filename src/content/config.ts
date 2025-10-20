import { defineCollection, z } from 'astro:content'

const projectsCollection = defineCollection({
    type: 'content',
  schema: z.object({
    name: z.string(),
    order: z.number(),
    description: z.string(),
    descriptionTwo: z.string().optional(),
    img: z.string(),
    imgAlt: z.string(),
    githubLink: z.string().url(),
    liveDemoLink: z.string().url(),
    extraIcons: z.array(z.string()).optional(),
  }),
})

export const collections = { 'projects': projectsCollection }
