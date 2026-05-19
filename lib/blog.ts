// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type Post = {
  slug: string;
  title: string;
  date: string;        // "YYYY-MM-DD"
  excerpt: string;
  coverImage: string;
  author: string;
  contentHtml: string; // empty in getAllPosts; populated in getPostBySlug
};

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

function readPostFile(slug: string): { data: Record<string, unknown>; content: string } | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, 'utf8');
  return matter(raw);
}

function toPostMeta(slug: string, data: Record<string, unknown>): Omit<Post, 'contentHtml'> {
  return {
    slug,
    title: String(data.title ?? ''),
    date: String(data.date ?? ''),
    excerpt: String(data.excerpt ?? ''),
    coverImage: String(data.coverImage ?? ''),
    author: String(data.author ?? 'Star Work Team'),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.md'));

  const posts: Post[] = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const parsed = readPostFile(slug);
    if (!parsed) {
      return { ...toPostMeta(slug, {}), contentHtml: '' };
    }
    return { ...toPostMeta(slug, parsed.data), contentHtml: '' };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const parsed = readPostFile(slug);
  if (!parsed) return null;

  const processed = await remark().use(html).process(parsed.content);
  const contentHtml = processed.toString();

  return {
    ...toPostMeta(slug, parsed.data),
    contentHtml,
  };
}
