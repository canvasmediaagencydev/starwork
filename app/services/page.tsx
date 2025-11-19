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
  description: 'บริการครบครัน 6 ประเภท: Serviced Office, Virtual Office, Co-Working Space, Meeting Room, Event Space และ Café Amazon ใจกลางเชียงใหม่ พร้อมสิ่งอำนวยความสะดวกครบครัน',
  openGraph: {
    title: 'บริการของเรา | StarWork Chiang Mai',
    description: 'บริการครบครัน 6 ประเภท: Serviced Office, Virtual Office, Co-Working Space, Meeting Room, Event Space และ Café Amazon',
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
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      ],
      features: [
        'เฟอร์นิเจอร์ครบครัน พร้อมใช้งานทันที',
        'ที่อยู่จดทะเบียนบริษัท',
        'รับจดหมายและพัสดุ',
        'Wi-Fi ความเร็วสูง',
        'ห้องประชุมใช้ฟรี (ตามเงื่อนไข)',
        'เลขานุการรับโทรศัพท์',
      ],
      sizes: ['1-2 คน', '3-5 คน', '6-10 คน', '10+ คน'],
      pricing: 'เริ่มต้น 8,000 บาท/เดือน',
      reverse: false,
    },
    {
      id: 'virtual-office',
      title: 'Virtual Office',
      titleTh: 'ออฟฟิศเสมือน',
      description: 'ที่อยู่ธุรกิจในทำเลดีโดยไม่ต้องเช่าพื้นที่จริง เหมาะสำหรับธุรกิจที่ต้องการที่อยู่จดทะเบียน',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
      ],
      features: [
        'ที่อยู่จดทะเบียนบริษัทในทำเลดี',
        'รับจดหมายและพัสดุ',
        'บริการตอบโทรศัพท์',
        'ใช้ห้องประชุมรายชั่วโมง (มีค่าบริการ)',
        'ส่วนลดสำหรับ Coworking Space',
      ],
      pricing: 'เริ่มต้น 2,500 บาท/เดือน',
      reverse: true,
    },
    {
      id: 'coworking',
      title: 'Co-Working Space',
      titleTh: 'พื้นที่ทำงานร่วม',
      description: 'พื้นที่ทำงานแบบเปิดที่ยืดหยุ่น เหมาะสำหรับ Freelancer, Startup และผู้ที่ต้องการทำงานในบรรยากาศที่สร้างสรรค์',
      images: [
        'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
      ],
      features: [
        'โต๊ะทำงานสบาย ergonomic',
        'Wi-Fi ความเร็วสูง ไม่จำกัด',
        'เครื่องดื่มฟรี (กาแฟ, น้ำ)',
        'พื้นที่พักผ่อนและคาเฟ่',
        'ชุมชนของนักธุรกิจและ Entrepreneur',
        'กิจกรรม Networking',
      ],
      packages: [
        { name: 'รายวัน', price: '200 บาท/วัน' },
        { name: 'รายเดือน', price: '3,500 บาท/เดือน' },
        { name: 'Unlimited', price: '4,500 บาท/เดือน' },
      ],
      reverse: false,
    },
    {
      id: 'meeting-room',
      title: 'Meeting Room',
      titleTh: 'ห้องประชุม',
      description: 'ห้องประชุมที่ทันสมัยพร้อมอุปกรณ์ครบครัน สำหรับการประชุม อบรม และนำเสนอผลงาน',
      images: [
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1200&q=80',
      ],
      features: [
        'โปรเจคเตอร์ HD',
        'Whiteboard และอุปกรณ์นำเสนอ',
        'ระบบเสียงและ Conference Call',
        'Wi-Fi ความเร็วสูง',
        'บริการน้ำดื่มและขนม',
        'โต๊ะและเก้าอี้ครบตามจำนวนที่จอง',
      ],
      rooms: [
        { capacity: '4 คน', price: '300 บาท/ชม.' },
        { capacity: '8 คน', price: '500 บาท/ชม.' },
        { capacity: '12 คน', price: '800 บาท/ชม.' },
        { capacity: '20+ คน', price: 'ติดต่อสอบถาม' },
      ],
      reverse: true,
    },
    {
      id: 'event-space',
      title: 'Event Space',
      titleTh: 'พื้นที่จัดอีเวนท์',
      description: 'พื้นที่จัดงานอีเวนท์ขนาดกลาง เหมาะสำหรับ Seminar, Workshop, Product Launch และงานเลี้ยง',
      images: [
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      ],
      features: [
        'ความจุ 30-100 คน',
        'เวทีและระบบเสียงไฟแสง',
        'โปรเจคเตอร์และจอใหญ่',
        'ระบบ Live Streaming',
        'จัดโต๊ะเก้าอี้ได้หลายรูปแบบ',
        'บริการอาหารและเครื่องดื่ม (เพิ่มเติม)',
      ],
      pricing: 'ติดต่อสอบถามราคา',
      reverse: false,
    },
    {
      id: 'cafe-amazon',
      title: 'Café Amazon',
      titleTh: 'คาเฟ่ อเมซอน',
      description: 'คาเฟ่ภายในอาคาร บริการกาแฟคุณภาพ เครื่องดื่ม และอาหารว่าง ในบรรยากาศสบายๆ',
      images: [
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      ],
      features: [
        'กาแฟสดคุณภาพ',
        'เครื่องดื่มและเบเกอรี่หลากหลาย',
        'Wi-Fi ฟรี',
        'โต๊ะทำงานสำหรับนั่งทำงาน',
        'โปรโมชั่นพิเศษสำหรับสมาชิก StarWork',
      ],
      hours: 'เปิดบริการ: จันทร์-ศุกร์ 7:00-19:00, เสาร์-อาทิตย์ 8:00-18:00',
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
