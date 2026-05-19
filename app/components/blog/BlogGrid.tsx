// app/components/blog/BlogGrid.tsx
'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import type { Post } from '@/lib/blog';

const PAGE_SIZE = 6;

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const listPosts = posts.slice(1);

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
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-3 border-b border-gray-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              More Stories
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-950">
              บทความทั้งหมด
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-500">
            รวมอัปเดตจากพื้นที่ Star Work ทั้งเรื่องบริการ บรรยากาศการทำงาน และคำแนะนำสำหรับธุรกิจในเชียงใหม่
          </p>
        </div>

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
