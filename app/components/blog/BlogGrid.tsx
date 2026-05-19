// app/components/blog/BlogGrid.tsx
'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import type { Post } from '@/lib/blog';

const PAGE_SIZE = 6;

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const listPosts = posts;

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
        <p className="text-lg text-gray-600">
          ยังไม่มีบทความ — กลับมาใหม่เร็วๆ นี้
        </p>
      </div>
    );
  }

  const visible = listPosts.slice(0, visibleCount);
  const hasMore = visibleCount < listPosts.length;

  if (listPosts.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-green-800 via-green-700/25 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
        </div>

        {hasMore ? (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="rounded-full bg-gray-950 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              โหลดเพิ่มเติม
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
