import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { CONTENT_STUDIO_COOKIE, isLocalContentStudioMode } from '@/lib/content-studio/auth';

export async function POST(request: Request) {
  const { token } = await request.json().catch(() => ({ token: '' }));
  if (isLocalContentStudioMode()) return NextResponse.json({ ok: true, localMode: true });
  if (!process.env.CONTENT_STUDIO_TOKEN || token !== process.env.CONTENT_STUDIO_TOKEN) return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  (await cookies()).set(CONTENT_STUDIO_COOKIE, token, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 8 });
  return NextResponse.json({ ok: true });
}
