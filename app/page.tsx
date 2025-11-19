import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Placeholder for future sections */}
      <section id="services" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">บริการของเรา</h2>
          <p className="text-gray-600">เนื้อหาจะถูกเพิ่มในภายหลัง</p>
        </div>
      </section>
    </div>
  );
}
