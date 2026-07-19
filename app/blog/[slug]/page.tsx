// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContactButton from '../../components/FloatingContactButton';
import ScrollProgressBar from '../../components/ScrollProgressBar';
import BlogPostHero from '../../components/blog/BlogPostHero';
import BlogPostContent from '../../components/blog/BlogPostContent';
import JsonLd from '../../components/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
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
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
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

  const articleSchema = getArticleSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'หน้าแรก', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  return (
    <div className="min-h-screen">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ScrollProgressBar />
      <Navbar />
      <BlogPostHero post={post} />
      <BlogPostContent html={post.contentHtml} post={post} />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
