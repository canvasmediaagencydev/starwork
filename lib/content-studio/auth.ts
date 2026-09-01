import { cookies } from 'next/headers';

export const CONTENT_STUDIO_COOKIE = 'starwork_content_studio';

export function isLocalContentStudioMode(): boolean {
  return !process.env.CONTENT_STUDIO_TOKEN && process.env.NODE_ENV !== 'production';
}

export async function isContentStudioAuthenticated(): Promise<boolean> {
  if (isLocalContentStudioMode()) return true;

  const token = process.env.CONTENT_STUDIO_TOKEN;
  if (!token) return false;

  const cookieStore = await cookies();
  return cookieStore.get(CONTENT_STUDIO_COOKIE)?.value === token;
}

export async function requireContentStudioAuth(): Promise<Response | null> {
  if (await isContentStudioAuthenticated()) return null;
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
