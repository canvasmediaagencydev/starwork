import type { Metadata } from 'next';
import { isContentStudioAuthenticated, isLocalContentStudioMode } from '@/lib/content-studio/auth';
import ContentStudio from './ContentStudio';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Content Studio' };

export default async function ContentStudioPage() {
  const localMode = isLocalContentStudioMode();
  const authenticated = localMode || await isContentStudioAuthenticated();
  return <ContentStudio localMode={localMode && authenticated} />;
}
