// app/blog/page.tsx
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';
import ScrollProgressBar from '../components/ScrollProgressBar';
import BlogHero from '../components/blog/BlogHero';
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
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <BlogHero />
      <BlogGrid posts={getAllPosts()} />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
