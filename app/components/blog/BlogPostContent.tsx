// app/components/blog/BlogPostContent.tsx
import type { Post } from '@/lib/blog';

function readingMinutes(html: string): number {
  const text = html.replace(/<[^>]*>/g, ' ').trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

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

export default function BlogPostContent({ html, post }: { html: string; post: Post }) {
  const minutes = readingMinutes(html);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[260px_minmax(0,760px)] lg:px-8">
        <aside className="lg:sticky lg:top-28 lg:h-fit hidden md:block">
          <div className="rounded-xl border border-gray-200 bg-[#f7faf6] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
              Article
            </p>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-gray-500">ผู้เขียน</dt>
                <dd className="mt-1 font-semibold text-gray-950">{post.author}</dd>
              </div>
              <div>
                <dt className="text-gray-500">เผยแพร่</dt>
                <dd className="mt-1 font-semibold text-gray-950">{formatThaiDate(post.date)}</dd>
              </div>
            </dl>
          </div>
        </aside>

        <article
          className="blog-content min-w-0"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
}
