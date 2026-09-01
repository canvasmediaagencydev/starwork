import { NextResponse } from 'next/server';
import { generateCover } from '@/lib/content-studio/agents';
import { requireContentStudioAuth } from '@/lib/content-studio/auth';
import { assertValidSlug } from '@/lib/content-studio/validation';

export async function POST(request: Request) {
  const denied = await requireContentStudioAuth(); if (denied) return denied;
  try { const body = await request.json(); return NextResponse.json(generateCover({ title: String(body.title || '').trim(), slug: body.slug ? assertValidSlug(String(body.slug)) : undefined })); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to generate cover' }, { status: 400 }); }
}
