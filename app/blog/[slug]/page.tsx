// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContactButton from '../../components/FloatingContactButton';
import ScrollProgressBar from '../../components/ScrollProgressBar';
import BlogPostHero from '../../components/blog/BlogPostHero';
import BlogPostContent from '../../components/blog/BlogPostContent';
import BackToBlogLink from '../../components/blog/BackToBlogLink';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | StarWork Chiang Mai Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <BlogPostHero post={post} />
      <BlogPostContent html={post.contentHtml} />
      <BackToBlogLink />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
