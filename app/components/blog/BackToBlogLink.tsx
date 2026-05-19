// app/components/blog/BackToBlogLink.tsx
import Link from 'next/link';

export default function BackToBlogLink() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-16">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
      >
        <span className="mr-2">←</span>
        กลับไปยังบทความทั้งหมด
      </Link>
    </div>
  );
}
