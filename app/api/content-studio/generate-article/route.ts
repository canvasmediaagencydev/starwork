import { NextResponse } from 'next/server';
import { generateArticle } from '@/lib/content-studio/agents';
import { requireContentStudioAuth } from '@/lib/content-studio/auth';
import { validateArticleInput } from '@/lib/content-studio/validation';

export async function POST(request: Request) {
  const denied = await requireContentStudioAuth(); if (denied) return denied;
  try { return NextResponse.json(await generateArticle(validateArticleInput(await request.json()))); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to generate article' }, { status: 400 }); }
}
