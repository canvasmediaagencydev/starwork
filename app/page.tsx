import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import TrustedBy from './components/TrustedBy';
import Pricing from './components/Pricing';
// import HomeTestimonials from './components/HomeTestimonials';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import ScrollProgressBar from './components/ScrollProgressBar';
import JsonLd from './components/JsonLd';
import { getLocalBusinessSchema, getCoreServicesSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd data={[getLocalBusinessSchema(), ...getCoreServicesSchema()]} />
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      {/* TODO: เปิดใช้เมื่อได้โลโก้ลูกค้าจริง + testimonial จริงจากลูกค้า
          ห้าม deploy ด้วยข้อมูลตัวอย่าง */}
      {/* <TrustedBy /> */}
      <Pricing />
      {/* <HomeTestimonials /> */}
      <Amenities />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
