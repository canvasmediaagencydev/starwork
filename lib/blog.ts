// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type Faq = { question: string; answer: string };

export type Post = {
  slug: string;
  title: string;
  date: string;        // "YYYY-MM-DD"
  updated?: string;    // optional "YYYY-MM-DD" — frontmatter `updated`
  excerpt: string;
  coverImage: string;
  author: string;
  keywords: string[];  // frontmatter `keywords` (empty if none) — for BlogPosting schema
  contentHtml: string; // empty in getAllPosts; populated in getPostBySlug
  faqs: Faq[];         // parsed from the "## คำถามที่พบบ่อย" section (empty if none)
};

// Convert inline Markdown to clean plain text. Used so FAQ questions/answers that
// live in Markdown (and may contain links/emphasis) become safe plain strings for
// JSON-LD — the visible Markdown on the page is rendered separately and untouched.
function mdToPlainText(md: string): string {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')     // images -> drop
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')   // links -> link text
    .replace(/`([^`]*)`/g, '$1')               // inline code
    .replace(/\*\*([^*]+)\*\*/g, '$1')         // bold
    .replace(/\*([^*]+)\*/g, '$1')             // italic
    .replace(/_{1,2}([^_]+)_{1,2}/g, '$1')     // underscore emphasis
    .replace(/^#{1,6}\s+/gm, '')               // heading markers
    .replace(/^>\s?/gm, '')                    // blockquote markers
    .replace(/\s+/g, ' ')
    .trim();
}

// Parse the FAQ block out of a post's markdown so the SAME source drives both
// the rendered article and its FAQPage JSON-LD. Looks for the H2
// "คำถามที่พบบ่อย", then reads each "### question" + its answer until the
// section ends (next H2 or a thematic break "---" — which precedes the CTA).
export function extractFaqsFromMarkdown(content: string): Faq[] {
  const headingRe = /^##\s+คำถามที่พบบ่อย\s*$/m;
  const m = headingRe.exec(content);
  if (!m) return [];

  let block = content.slice(m.index + m[0].length);
  // Stop at the next H2 or the next thematic break line.
  const stop = block.search(/\n##\s|\n-{3,}\s*(?:\n|$)/);
  if (stop >= 0) block = block.slice(0, stop);

  return block
    .split(/\n###\s+/)
    .slice(1) // text before the first "### " is not a Q&A
    .map((chunk) => {
      const nl = chunk.indexOf('\n');
      // Sanitize both fields to plain text so the FAQPage JSON-LD never contains
      // Markdown syntax (links, **, backticks, headings) — required by search engines.
      const question = mdToPlainText(nl < 0 ? chunk : chunk.slice(0, nl));
      const answer = mdToPlainText(nl < 0 ? '' : chunk.slice(nl + 1));
      return { question, answer };
    })
    .filter((f) => f.question && f.answer);
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

function readPostFile(slug: string): { data: Record<string, unknown>; content: string } | null {
  const fullPath = path.resolve(postsDirectory, `${slug}.md`);
  if (!fullPath.startsWith(postsDirectory + path.sep)) return null;
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, 'utf8');
  return matter(raw);
}

function toPostMeta(slug: string, data: Record<string, unknown>): Omit<Post, 'contentHtml'> {
  const meta: Omit<Post, 'contentHtml'> = {
    slug,
    title: String(data.title ?? ''),
    date: String(data.date ?? ''),
    excerpt: String(data.excerpt ?? ''),
    coverImage: String(data.coverImage ?? ''),
    author: String(data.author ?? 'Star Work Team'),
    // Real keyword list from frontmatter — only when the author provided one.
    keywords: Array.isArray(data.keywords)
      ? data.keywords.map(String).filter(Boolean)
      : [],
    faqs: [],
  };
  // Only attach `updated` when the frontmatter actually provides it — never an
  // empty string (keeps the field out of JSON-LD unless it's real).
  if (data.updated) meta.updated = String(data.updated);
  return meta;
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
    faqs: extractFaqsFromMarkdown(parsed.content),
  };
}
