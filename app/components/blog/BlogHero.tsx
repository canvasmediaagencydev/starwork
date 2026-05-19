// app/components/blog/BlogHero.tsx
export default function BlogHero() {
  return (
    <section className="pt-32 pb-12 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ข่าวสาร อัพเดต และเรื่องราวจาก Star Work
        </p>
      </div>
    </section>
  );
}
