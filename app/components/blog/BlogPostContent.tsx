// app/components/blog/BlogPostContent.tsx
import Link from 'next/link';
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
              {post.updated ? (
                <div>
                  <dt className="text-gray-500">อัปเดตล่าสุด</dt>
                  <dd className="mt-1 font-semibold text-gray-950">{formatThaiDate(post.updated)}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-gray-500">เวลาอ่าน</dt>
                <dd className="mt-1 font-semibold text-gray-950">{minutes} นาที</dd>
              </div>
            </dl>
          </div>
        </aside>

        <div className="min-w-0">
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Inbound link to the FAQ hub (avoids orphaning /faq) */}
          <div className="mt-12 rounded-2xl border border-green-100 bg-green-50/60 p-6">
            <p className="text-gray-700 leading-relaxed">
              ยังมีข้อสงสัยเรื่องการเช่าออฟฟิศในเชียงใหม่? อ่านคำตอบได้ที่{' '}
              <Link href="/faq" className="font-semibold text-green-700 hover:underline">
                คำถามที่พบบ่อยเรื่อง Serviced Office และ Virtual Office
              </Link>{' '}
              หรือดู{' '}
              <Link href="/services" className="font-semibold text-green-700 hover:underline">
                แพ็กเกจและราคาทั้งหมด
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
