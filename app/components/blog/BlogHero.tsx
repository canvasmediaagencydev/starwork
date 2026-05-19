// app/components/blog/BlogHero.tsx
import Image from 'next/image';
import Link from 'next/link';
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

export default function BlogHero({ featuredPost }: { featuredPost?: Post }) {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-green-700/80 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
            Star Work Journal
          </div>
          <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-6xl">
            เรื่องราวพื้นที่ทำงาน คาเฟ่ และธุรกิจในเชียงใหม่
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            อัปเดตข่าวสาร ไอเดียการทำงาน และบทความจาก Star Work สำหรับทีม ฟรีแลนซ์ และผู้ประกอบการที่ต้องการพื้นที่ทำงานที่ลงตัว
          </p>
        </div>

        {featuredPost ? (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group mt-12 grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="relative min-h-[280px] overflow-hidden bg-gray-100 md:min-h-[420px]">
              {featuredPost.coverImage ? (
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : null}
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm">
                บทความล่าสุด
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-green-700">
                <span>{featuredPost.author}</span>
                <span className="h-1 w-1 rounded-full bg-green-600" />
                <span>{formatThaiDate(featuredPost.date)}</span>
              </div>
              <h2 className="text-2xl font-bold leading-tight text-gray-950 md:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-gray-600">
                {featuredPost.excerpt}
              </p>
              <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-green-700">
                อ่านบทความ
                <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
              </div>
            </div>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
