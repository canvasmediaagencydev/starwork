// app/components/blog/BlogPostHero.tsx
import Image from 'next/image';
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
    <header className="relative w-full h-[50vh] min-h-[360px] max-h-[480px] bg-gray-900">
      {post.coverImage ? (
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative h-full max-w-4xl mx-auto px-6 lg:px-8 flex flex-col justify-end pb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="text-sm text-white/80">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{formatThaiDate(post.date)}</span>
        </div>
      </div>
    </header>
  );
}
