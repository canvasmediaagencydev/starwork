import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import CafeHero from '../components/cafe/CafeHero';
import CafeAbout from '../components/cafe/CafeAbout';
import CafeFeatures from '../components/cafe/CafeFeatures';
import CafeGallery from '../components/cafe/CafeGallery';
import CafeOrder from '../components/cafe/CafeOrder';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';
import ScrollProgressBar from '../components/ScrollProgressBar';

export const metadata: Metadata = {
  title: 'Café Amazon | StarWork Chiang Mai',
  description: 'คาเฟ่อเมซอน สตาร์เวิร์ค เชียงใหม่ ร้านกาแฟพรีเมี่ยมพร้อม Wi-Fi ความเร็วสูง ปลั๊กไฟฟ้าทุกโต๊ะ บรรยากาศสบาย เหมาะสำหรับทำงานและพักผ่อน',
  openGraph: {
    title: 'Café Amazon | StarWork Chiang Mai',
    description: 'คาเฟ่อเมซอน สตาร์เวิร์ค - กาแฟพรีเมี่ยม Wi-Fi ความเร็วสูง บรรยากาศสบาย',
  },
};

export default function CafePage() {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <CafeHero />
      <CafeAbout />
      <CafeFeatures />
      <CafeGallery />
      <CafeOrder />
      <Contact />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
