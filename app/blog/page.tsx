// app/blog/page.tsx
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';
import ScrollProgressBar from '../components/ScrollProgressBar';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid';
import JsonLd from '../components/JsonLd';
import { getBreadcrumbSchema, getBlogCollectionSchema } from '@/lib/schema';
import { getAllPosts } from '@/lib/blog';

const BLOG_TITLE = 'บทความออฟฟิศให้เช่า เชียงใหม่ — Serviced Office & Coworking';
const BLOG_DESCRIPTION =
  'บทความและคำแนะนำเรื่องเช่าออฟฟิศเชียงใหม่ — Serviced Office, Virtual Office, Co-Working และการเลือกพื้นที่ทำงานสำหรับธุรกิจและ SME';

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `${BLOG_TITLE} | StarWork Chiang Mai`,
    description: BLOG_DESCRIPTION,
    url: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  // getAllPosts() is sorted newest-first, so the first post is the featured one.
  // It headlines BlogHero and is excluded from the grid to avoid duplication.
  const [featuredPost, ...restPosts] = posts;

  const collectionSchema = getBlogCollectionSchema(
    posts.map((p) => ({ slug: p.slug, title: p.title })),
    { name: BLOG_TITLE, description: BLOG_DESCRIPTION, path: '/blog' }
  );
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'หน้าแรก', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <div className="min-h-screen">
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />
      <ScrollProgressBar />
      <Navbar />
      {/* BlogHero provides the page's single <h1> (+ featured post when present). */}
      <BlogHero featuredPost={featuredPost} />
      {posts.length === 0 ? (
        // No posts at all → show the grid's empty state.
        <BlogGrid posts={[]} />
      ) : (
        // With a single post it is fully shown in the hero, so the grid is omitted.
        restPosts.length > 0 && <BlogGrid posts={restPosts} />
      )}
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
