import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const research = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
    schema: z.object({
        title: z.string(),
        author: z.string().optional(),
        date: z.string().optional(),
        journal: z.string().optional(),
        external_url: z.string().url().optional(),
        resources: z.array(
            z.object({
            label: z.string(),
            url: z.string(),
            })
        ).optional(),
        image: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const honors = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/honors" }),
    schema: z.object({
        title: z.string(),
        date: z.string().optional(),
        event: z.string().optional(),
        external_url: z.string().url().optional(),
        resources: z.array(
            z.object({
            label: z.string(),
            url: z.string(),
            })
        ).optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
    }),
});

const engineering = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/engineering" }),
    schema: z.object({
        title: z.string(),
        institution: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        external_url: z.string().url().optional(),
        resources: z.array(
            z.object({
            label: z.string(),
            url: z.string(),
            })
        ).optional(),
    }),
});

const bio = defineCollection({
    loader: glob({ pattern: "bio.md", base: "./src/content" }),
    schema: z.object({
        name: z.string(),
        avatar: z.string(),
        shortBio: z.string().optional(),
        institution: z.string().optional(),
    }),
});


const timeline = defineCollection({
    loader: glob({
        pattern: "timeline.md",
        base: "./src/content",
    }),
    schema: z.object({
        items: z.array(
            z.object({
                title: z.string(),
                period: z.string(),
                brief: z.string(),
                description: z.string(),
                images: z.array(z.string()),
                type: z.enum([
                    "research",
                    "engineering",
                    "honors",
                ]),
                link: z.string().optional(),
                linkText: z.string().optional(),
            })
        ),
    }),
});

export const collections = {
    'bio': bio,
    'research': research,
    'honors': honors,
    'timeline': timeline,
    'engineering': engineering,
};
