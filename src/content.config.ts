import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cats collection (Kototeka)
const cats = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cats' }),
  schema: z.object({
    name: z.string(),
    mainImage: z.string(),
    gallery: z.array(z.string()).optional(),
    color: z.string(),
    birthDate: z.string().optional(),
    parents: z.string().optional(),
    pedigreeNumber: z.string().optional(),
    description: z.string().optional(),
    isVisible: z.boolean().default(true),
  }),
});

// Litters collection (Mioty)
const litters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/litters' }),
  schema: z.object({
    name: z.string(),
    mother: z.string(),
    father: z.string(),
    birthDate: z.string().optional(),
    status: z.enum(['planned', 'available', 'reserved', 'sold']).default('planned'),
    mainImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    kittensCount: z.number().optional(),
    description: z.string().optional(),
    kittens: z.array(z.object({
      name: z.string(),
      gender: z.enum(['male', 'female']),
      color: z.string(),
      status: z.enum(['available', 'reserved', 'sold']).default('available'),
      image: z.string().optional(),
      description: z.string().optional(),
    })).optional(),
  }),
});

// Gallery collection
const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    category: z.string().optional(),
    catName: z.string().optional(),
    description: z.string().optional(),
    date: z.string().optional(),
  }),
});

// Pages collection
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { cats, litters, gallery, pages };
