'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'วิธีการจองบริการอย่างไร?',
      answer:
        'คุณสามารถจองบริการได้ 3 วิธี: 1) โทรติดต่อที่ 063-441-4239 2) ส่งอีเมลมาที่ sale@starworkchiangmai.com 3) แอดไลน์ @starwork หรือกรอกแบบฟอร์มจองเข้าชมในเว็บไซต์ของเรา ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง',
    },
    {
      question: 'มีระยะเวลาขั้นต่ำในการเช่าหรือไม่?',
      answer:
        'สำหรับ Serviced Office และ Virtual Office มีระยะเวลาขั้นต่ำ 3 เดือน ส่วน Co-Working Space สามารถใช้งานรายวันได้ ห้องประชุมสามารถจองรายชั่วโมงได้ตามความต้องการ',
    },
    {
      question: 'สามารถใช้ที่อยู่จดทะเบียนบริษัทได้หรือไม่?',
      answer:
        'ได้ครับ ทั้ง Serviced Office และ Virtual Office สามารถใช้เป็นที่อยู่จดทะเบียนบริษัทได้ เราจะออกหนังสือรับรองให้ พร้อมบริการรับจดหมายและพัสดุ',
    },
    {
      question: 'มีบริการอะไรบ้างที่รวมอยู่ในค่าเช่า?',
      answer:
        'บริการพื้นฐานที่รวมอยู่ในค่าเช่า ได้แก่ Wi-Fi ความเร็วสูง, ไฟฟ้า, น้ำ, แอร์, ทำความสะอาด, รักษาความปลอดภัย 24 ชั่วโมง, บริการต้อนรับและรับส่งจดหมาย สำหรับบริการเสริมอื่นๆ เช่น ห้องประชุม อาจมีค่าใช้จ่ายเพิ่มเติม',
    },
    {
      question: 'สามารถยกเลิกหรือเปลี่ยนแปลงการจองได้หรือไม่?',
      answer:
        'สำหรับการจองห้องประชุม สามารถยกเลิกหรือเปลี่ยนแปลงได้ล่วงหน้า 24 ชั่วโมง ส่วนการเช่าออฟฟิศระยะยาว ต้องแจ้งล่วงหน้า 30 วัน ตามข้อกำหนดในสัญญา',
    },
    {
      question: 'มีที่จอดรถหรือไม่?',
      answer:
        'มีที่จอดรถให้บริการฟรีสำหรับลูกค้าที่เช่าออฟฟิศ และลูกค้าที่มาใช้ห้องประชุม สำหรับผู้ใช้ Co-Working Space มีค่าบริการที่จอดรถชั่วโมงละ 20 บาท',
    },
    {
      question: 'สามารถเข้าชมสำนักงานก่อนตัดสินใจเช่าได้หรือไม่?',
      answer:
        'ได้แน่นอนครับ เรายินดีให้คุณเข้าชมสำนักงานและพื้นที่ต่างๆ ก่อนตัดสินใจ โดยสามารถนัดหมายล่วงหน้าได้ที่ 063-441-4239 หรือแอดไลน์ @starwork หรือจองผ่านเว็บไซต์',
    },
    {
      question: 'มีบริการเลขานุการหรือตอบโทรศัพท์หรือไม่?',
      answer:
        'มีครับ สำหรับ Serviced Office และ Virtual Office จะมีบริการรับโทรศัพท์และจัดการข้อความโดยทีมงานมืออาชีพของเรา นอกจากนี้ยังมีบริการเลขานุการเสริม เช่น การจัดเตรียมเอกสาร การนัดหมาย เป็นต้น',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-lg text-gray-600 font-light">
            คำตอบสำหรับคำถามที่ลูกค้ามักสอบถาม
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-green-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ยังมีคำถามอื่นๆ อีกไหม?
          </h3>
          <p className="text-gray-600 mb-6">
            ติดต่อทีมงานของเราได้ทันที เรายินดีให้คำปรึกษา
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            <span>ติดต่อเรา</span>
          </a>
        </div>
      </div>
    </section>
  );
}
