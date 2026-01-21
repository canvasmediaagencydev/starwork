'use client';

import { HiShieldCheck, HiWifi } from 'react-icons/hi';
import { MdCoffeeMaker, MdFitnessCenter } from 'react-icons/md';
import { FaParking, FaEnvelope, FaLeaf, FaCoffee } from 'react-icons/fa';

export default function Amenities() {
  const amenities = [
    {
      icon: HiShieldCheck,
      title: 'เข้าถึงได้ 24/7',
      titleEn: '24/7 Access',
      description: 'ระบบ key card ปลอดภัย',
    },
    {
      icon: MdFitnessCenter,
      title: 'ฟิตเนส',
      titleEn: 'Fitness',
      description: 'ห้องออกกำลังกายพร้อมอุปกรณ์',
    },
    {
      icon: FaCoffee,
      title: 'กาแฟส่งถึงห้อง',
      titleEn: 'Amazon Coffee Delivery',
      description: 'บริการกาแฟ Amazon ส่งถึงห้อง',
    },
    {
      icon: FaLeaf,
      title: 'พื้นที่สีเขียว',
      titleEn: 'Green Space',
      description: 'สวนและพื้นที่ธรรมชาติ',
    },
    {
      icon: HiWifi,
      title: 'อินเทอร์เน็ตความเร็วสูง',
      titleEn: 'High-Speed Internet',
      description: 'Fiber ความเร็วสูงถึง 1 Gbps',
    },
    {
      icon: MdCoffeeMaker,
      title: 'คาเฟ่ & เลานจ์',
      titleEn: 'Café & Lounge',
      description: 'พื้นที่พักผ่อนและเครื่องดื่ม',
    },
    {
      icon: FaParking,
      title: 'ที่จอดรถ',
      titleEn: 'Parking',
      description: 'ที่จอดรถเพียงพอและปลอดภัย',
    },
    {
      icon: FaEnvelope,
      title: 'จัดการจดหมาย',
      titleEn: 'Mail Handling',
      description: 'รับและจัดการพัสดุ',
    },
  ];

  return (
    <section id="amenities" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            สิ่งอำนวยความสะดวก
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-3xl mx-auto px-4">
            ทุกสิ่งที่ทีมของคุณต้องการตั้งแต่วันแรก — ไม่ต้องปรับปรุง ไม่มีค่าใช้จ่ายแอบแฝง
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6">
                <div className="inline-flex p-3 md:p-4 bg-green-50 rounded-lg md:rounded-xl group-hover:bg-green-100 transition-colors duration-300">
                  <amenity.icon className="text-2xl md:text-3xl text-green-600" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5 md:mb-2">
                {amenity.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {amenity.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500 rounded-bl-xl md:rounded-bl-2xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 font-light mb-4 md:mb-6 text-sm md:text-base">
            และอื่นๆ อีกมากมายที่รอให้คุณค้นพบ
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors text-sm md:text-base"
          >
            <span>ดูรายละเอียดทั้งหมด</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
