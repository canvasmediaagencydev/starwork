import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import ServicesHero from '../components/services/ServicesHero';
import ServiceOverview from '../components/services/ServiceOverview';
import ServiceDetail from '../components/services/ServiceDetail';
import ServiceFAQ from '../components/services/ServiceFAQ';
import Testimonials from '../components/services/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';
import ScrollProgressBar from '../components/ScrollProgressBar';

export const metadata: Metadata = {
  title: 'บริการของเรา',
  description: 'บริการครบครัน 5 ประเภท: Serviced Office, Virtual Office, Co-Working Space, Meeting Room และ Café Amazon ใจกลางเชียงใหม่ พร้อมสิ่งอำนวยความสะดวกครบครัน',
  openGraph: {
    title: 'บริการของเรา | StarWork Chiang Mai',
    description: 'บริการครบครัน 5 ประเภท: Serviced Office, Virtual Office, Co-Working Space, Meeting Room และ Café Amazon',
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: 'serviced-office',
      title: 'Serviced Office',
      titleTh: 'ออฟฟิศพร้อมบริการ',
      description: 'ห้องออฟฟิศส่วนตัวพร้อมเฟอร์นิเจอร์ครบครัน เหมาะสำหรับธุรกิจที่ต้องการความเป็นส่วนตัวและความเป็นมืออาชีพ',
      images: [
        '/images/img_4.webp',
        '/images/img_12.webp',
      ],
      features: [
        'เฟอร์นิเจอร์ครบครัน พร้อมใช้งานทันที',
        'ที่อยู่จดทะเบียนบริษัท',
        'รับจดหมายและพัสดุ',
        'Wi-Fi ความเร็วสูง',
        'ห้องประชุมใช้ฟรี (ตามเงื่อนไข)',
        'ฟรี ทำความสะอาด',
      ],
      sizes: ['1-2 คน', '3-5 คน', '6-10 คน', '10+ คน'],
      pricing: 'เริ่มต้น 6,900 บาท/เดือน',
      reverse: false,
    },
    {
      id: 'virtual-office',
      title: 'Virtual Office',
      titleTh: 'ออฟฟิศเสมือน',
      description: 'ที่อยู่ธุรกิจในทำเลดีโดยไม่ต้องเช่าพื้นที่จริง เหมาะสำหรับธุรกิจที่ต้องการที่อยู่จดทะเบียน',
      images: [
        '/images/Pic_V2.webp',
        '/images/img_6.webp',
      ],
      features: [
        'ที่อยู่จดทะเบียนบริษัทในทำเลดี',
        'รับจดหมายและพัสดุ',
        'ฟรี ใช้ห้องประชุมรายชั่วโมง',
        'ฟรี Coworking Space',
      ],
      reverse: true,
    },
    {
      id: 'coworking',
      title: 'Co-Working Space',
      titleTh: 'พื้นที่ทำงานร่วม',
      description: 'พื้นที่ทำงานแบบเปิดที่ยืดหยุ่น เหมาะสำหรับ Freelancer, Startup และผู้ที่ต้องการทำงานในบรรยากาศที่สร้างสรรค์',
      images: [
        '/images/img_1.webp',
        '/images/img_7.webp',
      ],
      features: [
        'โต๊ะทำงานสบาย ergonomic',
        'Wi-Fi ความเร็วสูง',
        'พื้นที่พักผ่อนและคาเฟ่',
        'ห้อง Phone Room ส่วนตัว',
        'ชุมชนของนักธุรกิจและ Entrepreneur',
      ],
      packages: [
        { name: 'Day', price: 'เริ่มต้น 300 บาท/วัน' },
        { name: 'Week', price: 'ติดต่อสอบถาม' },
        { name: 'Month', price: 'ติดต่อสอบถาม' },
      ],
      reverse: false,
    },
    {
      id: 'meeting-room',
      title: 'Meeting Room',
      titleTh: 'ห้องประชุม',
      description: 'ห้องประชุมสำหรับการประชุม อบรม และนำเสนอผลงาน',
      images: [
        '/images/img_2.webp',
        '/images/img_22.webp',
      ],
      features: [
        'Whiteboard',
        'Wi-Fi ความเร็วสูง',
        'โต๊ะและเก้าอี้ครบตามจำนวนที่จอง',
        'สมาร์ททีวี',
      ],
      rooms: [
        { capacity: '4 คน', price: '200 บาท/ชม.' },
        { capacity: '8 คน', price: '300 บาท/ชม.' },
        { capacity: '15 คน', price: '500 บาท/ชม.' },
        { capacity: '30 คน', price: '800 บาท/ชม.' },
      ],
      reverse: true,
    },
    {
      id: 'cafe-amazon',
      title: 'Café Amazon',
      titleTh: 'คาเฟ่ อเมซอน',
      description: 'คาเฟ่ภายในอาคาร บริการกาแฟคุณภาพ เครื่องดื่ม และอาหารว่าง ในบรรยากาศสบายๆ',
      images: [
        '/images/img_3.webp',
        '/images/img_73.webp',
      ],
      features: [
        'กาแฟสดคุณภาพ',
        'เครื่องดื่มและเบเกอรี่หลากหลาย',
        'Wi-Fi ฟรี',
        'สวน และ พื้นที่สีเขียว',
      ],
      hours: 'เปิดบริการ: 07:30 - 19:30',
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <ServicesHero />

      {/* Service Overview Cards */}
      <ServiceOverview />

      {/* Service Details */}
      <div className="bg-white">
        {services.map((service, index) => (
          <ServiceDetail key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* FAQ Section */}
      <ServiceFAQ />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <Contact />

      <Footer />
      <FloatingContactButton />
    </div>
  );
}
