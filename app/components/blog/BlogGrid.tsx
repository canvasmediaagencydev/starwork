// app/components/blog/BlogGrid.tsx
'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import type { Post } from '@/lib/blog';

const PAGE_SIZE = 6;

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  if (posts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <p className="text-lg text-gray-600">
          ยังไม่มีบทความ — กลับมาใหม่เร็วๆ นี้
        </p>
      </div>
    );
  }

  const visible = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {hasMore ? (
        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition-colors"
          >
            โหลดเพิ่มเติม
          </button>
        </div>
      ) : null}
    </section>
  );
}
