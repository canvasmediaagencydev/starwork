// app/components/blog/BlogPostHero.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/lib/blog';

function formatThaiDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat('th-TH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export default function BlogPostHero({ post }: { post: Post }) {
  return (
    <header className="relative overflow-hidden bg-[#f7faf6] pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-green-700 via-green-600/35 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm ring-1 ring-white/70 transition-colors hover:text-green-900"
        >
          บทความทั้งหมด
        </Link>

        <div className="grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="pb-2 lg:pb-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
              Star Work Journal
            </div>
            <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="font-semibold text-gray-800">{post.author}</span>
              <span className="h-1 w-1 rounded-full bg-green-600" />
              <span>{formatThaiDate(post.date)}</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#eef3ea] shadow-2xl">
            {post.coverImage ? (
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-contain"
              />
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
