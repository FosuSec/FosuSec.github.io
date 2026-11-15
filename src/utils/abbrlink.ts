import { generateAbbrlink } from './crc32';

interface AbbrlinkPost {
  data: {
    title: string;
    abbrlink?: string;
  };
}

/**
 * 计算文章的 abbrlink（用作 URL slug）。
 * 优先使用 frontmatter 中手动指定的 abbrlink，否则根据标题生成 crc32 hex。
 */
export function postSlug(post: AbbrlinkPost): string {
  return post.data.abbrlink ?? generateAbbrlink(post.data.title);
}