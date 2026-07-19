import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';
import ScrollProgressBar from '../components/ScrollProgressBar';
import FaqHub from '../components/faq/FaqHub';
import JsonLd from '../components/JsonLd';
import { getFAQPageSchema, getBreadcrumbSchema } from '@/lib/schema';
import { faqHubItems } from '@/lib/faq-hub-data';

export const metadata: Metadata = {
  title: 'คำถามที่พบบ่อย — Serviced Office & ออฟฟิศให้เช่า เชียงใหม่',
  description:
    'รวม 22 คำถามยอดฮิตเรื่องเช่าออฟฟิศเชียงใหม่ — Serviced Office, Virtual Office, ราคาเริ่ม 6,900/เดือน, จดทะเบียนบริษัท และทำเลย่านวัดเกตใกล้ Central Festival',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'คำถามที่พบบ่อย | StarWork Chiang Mai',
    description:
      'คำตอบเรื่อง Serviced Office, Virtual Office, ราคา, การจดทะเบียนบริษัท และทำเลย่านวัดเกต ใกล้ Central Festival เชียงใหม่',
    url: '/faq',
  },
};

export default function FaqPage() {
  const faqSchema = getFAQPageSchema(faqHubItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'หน้าแรก', url: '/' },
    { name: 'คำถามที่พบบ่อย', url: '/faq' },
  ]);

  return (
    <div className="min-h-screen">
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <ScrollProgressBar />
      <Navbar />
      <FaqHub />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
