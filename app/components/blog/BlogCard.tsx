// app/components/blog/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/blog';

function formatThaiDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat('th-TH', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(d);
}

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-green-700">
          {formatThaiDate(post.date)}
        </div>
        <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-snug text-gray-950 transition-colors group-hover:text-green-700">
          {post.title}
        </h3>
        <p className="mb-6 line-clamp-3 text-sm leading-7 text-gray-600">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-xs font-medium text-gray-500">{post.author}</span>
          <span className="text-sm font-semibold text-green-700 transition-transform group-hover:translate-x-1">
            อ่านต่อ
          </span>
        </div>
      </div>
    </Link>
  );
}
