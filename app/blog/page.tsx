// app/blog/page.tsx
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';
import ScrollProgressBar from '../components/ScrollProgressBar';
import BlogGrid from '../components/blog/BlogGrid';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | StarWork Chiang Mai',
  description: 'ข่าวสาร อัพเดต และเรื่องราวจาก Star Work เชียงใหม่',
  openGraph: {
    title: 'Blog | StarWork Chiang Mai',
    description: 'ข่าวสาร อัพเดต และเรื่องราวจาก Star Work เชียงใหม่',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <BlogGrid posts={posts} />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
