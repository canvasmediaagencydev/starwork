import { NextResponse } from 'next/server';
import { requireContentStudioAuth } from '@/lib/content-studio/auth';
import { validatePublishInput } from '@/lib/content-studio/validation';

async function upsert(path: string, content: string, message: string) {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY || 'canvasmediaagencydev/starwork';
  const branch = process.env.GITHUB_BRANCH || 'main';
  if (!token) throw new Error('GITHUB_TOKEN is not configured; publishing is disabled.');
  const base = `https://api.github.com/repos/${repository}/contents/${path}`;
  const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json', 'User-Agent': 'starwork-content-studio' };
  const existing = await fetch(`${base}?ref=${encodeURIComponent(branch)}`, { headers });
  let sha: string | undefined;
  if (existing.ok) sha = (await existing.json()).sha;
  else if (existing.status !== 404) throw new Error(`GitHub lookup failed (${existing.status}).`);
  const response = await fetch(base, { method: 'PUT', headers, body: JSON.stringify({ message, content: Buffer.from(content, 'utf8').toString('base64'), branch, ...(sha ? { sha } : {}) }) });
  if (!response.ok) throw new Error(`GitHub publish failed (${response.status}): ${await response.text()}`);
  return response.json();
}

export async function POST(request: Request) {
  const denied = await requireContentStudioAuth(); if (denied) return denied;
  try {
    const { slug, markdown, coverSvg } = validatePublishInput(await request.json());
    const message = `feat(blog): publish ${slug}`;
    const article = await upsert(`content/blog/${slug}.md`, markdown, message);
    const cover = await upsert(`public/blog/${slug}.svg`, coverSvg, message);
    return NextResponse.json({ ok: true, slug, commit: cover.commit?.html_url || article.commit?.html_url || null, deployment: 'Vercel should deploy from the GitHub commit.' });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to publish' }, { status: 400 }); }
}
