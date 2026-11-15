import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** 动态 / 新闻 / 活动 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['新闻', '活动', '通知']).default('新闻'),
    titleEn: z.string().optional(),
    descriptionEn: z.string().optional(),
  }),
});

/** CTF Writeups / 技术博客 */
const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['CTF Writeup', '安全研究', '工具分享']).default('CTF Writeup'),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    titleEn: z.string().optional(),
    descriptionEn: z.string().optional(),
  }),
});

/** 获奖 / 荣誉 */
const awards = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/awards' }),
  schema: z.object({
    title: z.string(),
    competition: z.string(),
    award: z.string(),
    date: z.coerce.date(),
    team: z.string().optional(),
    titleEn: z.string().optional(),
    competitionEn: z.string().optional(),
    awardEn: z.string().optional(),
  }),
});

export const collections = { news, writeups, awards };