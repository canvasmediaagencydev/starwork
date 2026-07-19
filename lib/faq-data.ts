// lib/faq-data.ts
// Single source of truth for the Services-page FAQ.
// Consumed by BOTH the UI (app/components/services/ServiceFAQ.tsx) and the
// FAQPage JSON-LD (app/services/page.tsx) so the two never drift apart.

export type ServiceFaq = {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
};

export const serviceFaqs: ServiceFaq[] = [
  {
    question: 'วิธีการจองบริการอย่างไร?',
    questionEn: 'How do I book a service?',
    answer:
      'คุณสามารถจองบริการได้ 3 วิธี: 1) โทรติดต่อที่ 063-441-4239 2) ส่งอีเมลมาที่ sale@starworkchiangmai.com 3) แอดไลน์ @starwork หรือกรอกแบบฟอร์มจองเข้าชมในเว็บไซต์ของเรา ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง',
    answerEn:
      'You can book a service in 3 ways: 1) Call 063-441-4239 2) Email sale@starworkchiangmai.com 3) Add Line @starwork or fill out the booking form on our website. Our team will contact you within 24 hours.',
  },
  {
    question: 'สามารถใช้ที่อยู่จดทะเบียนบริษัทได้หรือไม่?',
    questionEn: 'Can I use the address for company registration?',
    answer:
      'ได้ครับ ทั้ง Serviced Office และ Virtual Office สามารถใช้เป็นที่อยู่จดทะเบียนบริษัทได้ เราจะออกหนังสือรับรองให้ พร้อมบริการรับจดหมายและพัสดุ',
    answerEn:
      'Yes, both Serviced Office and Virtual Office can be used as your company registration address. We will provide a certification letter, along with mail and package handling services.',
  },
  {
    question: 'สามารถยกเลิกหรือเปลี่ยนแปลงการจองได้หรือไม่?',
    questionEn: 'Can I cancel or modify my booking?',
    answer: 'สำหรับการจองห้องประชุม สามารถยกเลิกหรือเปลี่ยนแปลงได้ล่วงหน้า 24 ชั่วโมง',
    answerEn:
      'For meeting room bookings, you can cancel or modify up to 24 hours in advance.',
  },
  {
    question: 'มีที่จอดรถหรือไม่?',
    questionEn: 'Is parking available?',
    answer: 'มีที่จอดรถให้ลูกค้าฟรี สำหรับลูกค้าและสมาชิกทุกประเภท ไม่คิดค่าบริการ',
    answerEn:
      'Free parking is available for all customers and members at no additional charge.',
  },
  {
    question: 'สามารถเข้าชมสำนักงานก่อนตัดสินใจเช่าได้หรือไม่?',
    questionEn: 'Can I tour the office before deciding to rent?',
    answer:
      'ได้แน่นอนครับ เรายินดีให้คุณเข้าชมสำนักงานและพื้นที่ต่างๆ ก่อนตัดสินใจ และสามารถทดลองใช้ฟรีได้ 1 วัน โดยสามารถนัดหมายล่วงหน้าได้ที่ 063-441-4239 หรือแอดไลน์ @starwork',
    answerEn:
      'Absolutely! We welcome you to tour our office and facilities before making a decision. You can also try it free for 1 day. Schedule an appointment at 063-441-4239 or add Line @starwork.',
  },
];
