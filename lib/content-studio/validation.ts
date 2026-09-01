export type ArticleInput = {
  title: string;
  audience: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  angle: string;
};

export type ArticleDraft = {
  slug: string;
  title: string;
  excerpt: string;
  keywords: string[];
  markdown: string;
};

export type CoverDraft = {
  slug: string;
  title: string;
  assetPath: string;
  svg: string;
  prompt: string;
};

export type PublishInput = {
  slug: string;
  markdown: string;
  coverSvg: string;
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function toSlug(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
    .slice(0, 80);
}

export function assertValidSlug(slug: string): string {
  const normalized = slug.trim();
  if (!SLUG_PATTERN.test(normalized)) {
    throw new Error('Slug must use lowercase letters, numbers, and single hyphens only.');
  }
  if (normalized.includes('..') || normalized.includes('/') || normalized.includes('\\')) {
    throw new Error('Slug cannot contain path traversal characters.');
  }
  return normalized;
}

export function parseKeywords(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String).map((item) => item.trim()).filter(Boolean).slice(0, 10);
  }
  return String(value ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 10);
}

export function validateArticleInput(body: unknown): ArticleInput {
  const data = body as Partial<Record<keyof ArticleInput, unknown>>;
  const title = String(data.title ?? '').trim();
  const audience = String(data.audience ?? '').trim();
  const primaryKeyword = String(data.primaryKeyword ?? '').trim();
  const angle = String(data.angle ?? '').trim();
  const secondaryKeywords = parseKeywords(data.secondaryKeywords);

  if (title.length < 8 || title.length > 140) throw new Error('Title must be 8-140 characters.');
  if (audience.length < 3 || audience.length > 120) throw new Error('Audience must be 3-120 characters.');
  if (primaryKeyword.length < 3 || primaryKeyword.length > 80) throw new Error('Primary keyword must be 3-80 characters.');
  if (angle.length > 500) throw new Error('Angle must be 500 characters or less.');

  return { title, audience, primaryKeyword, secondaryKeywords, angle };
}

export function validatePublishInput(body: unknown): PublishInput {
  const data = body as Partial<Record<keyof PublishInput, unknown>>;
  const slug = assertValidSlug(String(data.slug ?? ''));
  const markdown = String(data.markdown ?? '').trim();
  const coverSvg = String(data.coverSvg ?? '').trim();

  if (!markdown.startsWith('---')) throw new Error('Markdown must include YAML frontmatter.');
  if (!markdown.includes('coverImage:')) throw new Error('Markdown frontmatter must include coverImage.');
  if (!markdown.includes('## คำถามที่พบบ่อย')) throw new Error('Markdown must include a Thai FAQ section.');
  if (!coverSvg.startsWith('<svg') || !coverSvg.includes('</svg>')) throw new Error('Cover asset must be a valid SVG string.');

  return { slug, markdown, coverSvg };
}

export function escapeSvgText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
