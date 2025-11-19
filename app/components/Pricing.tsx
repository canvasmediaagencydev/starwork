'use client';

import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { HiLocationMarker, HiShieldCheck, HiWifi, HiOfficeBuilding } from 'react-icons/hi';

export default function Pricing() {
  const features = [
    { icon: HiLocationMarker, text: '10 นาทีจากสนามบิน CNX' },
    { icon: HiOfficeBuilding, text: 'ใกล้ Nimman / MAYA / Think Park' },
    { icon: HiShieldCheck, text: 'เข้าถึงได้ 24/7' },
    { icon: HiWifi, text: 'อินเทอร์เน็ตความเร็วสูง' },
  ];

  const plans = [
    {
      name: 'Private Office',
      nameThai: 'ออฟฟิสส่วนตัว',
      capacity: '2-4 คน',
      price: '12,000',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
      features: [
        'ห้องพร้อมเฟอร์นิเจอร์ครบครัน',
        'บริการจัดการจดหมายและพัสดุ',
        'เครดิตห้องประชุมรวมอยู่ในราคา',
      ],
      featured: false,
    },
    {
      name: 'Team Office',
      nameThai: 'ออฟฟิสทีม',
      capacity: '5-10 คน',
      price: '20,000',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      features: [
        'พื้นที่กว้างขวางสำหรับทีม',
        'เข้าถึงโซนพิมพ์และคาเฟ่เลานจ์',
        'เข้าถึงได้ 24/7 สำหรับสมาชิกทุกคน',
      ],
      featured: true,
    },
    {
      name: 'Custom Office',
      nameThai: 'ออฟฟิสแบบกำหนดเอง',
      capacity: 'ปรับขนาดได้',
      price: '30,000',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
      features: [
        'ออกแบบตามความต้องการและแบรนด์',
        'มีผู้ช่วยและคอนเซียร์จเฉพาะ',
        'ขยายที่นั่งได้ตามทีมเติบโต',
      ],
      featured: false,
    },
  ];

  return (
    <section id="plans" className="relative py-24 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        {/* Top Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-64 text-white"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Bottom Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 text-green-50"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.5"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Features Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200/50"
            >
              <feature.icon className="text-green-600 text-xl flex-shrink-0" />
              <span className="text-sm text-gray-700 font-light">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            แพ็คเกจและราคา
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            ทุกแพ็คเกจรวมค่าสาธารณูปโภค ทำความสะอาด จัดการจดหมาย เครดิตห้องประชุม และการสนับสนุนในสถานที่
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.featured
                  ? 'shadow-2xl shadow-green-500/10 ring-2 ring-green-500/20 lg:-translate-y-4'
                  : 'shadow-xl hover:shadow-2xl'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-medium">
                    แนะนำ
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {plan.nameThai}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">{plan.capacity}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-gray-600 font-light">เริ่มต้น</span>
                    <span className="text-4xl font-bold text-green-600">฿{plan.price}</span>
                    <span className="text-gray-500 font-light">/ เดือน</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`group/btn w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    plan.featured
                      ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <span>ตรวจสอบห้องว่าง</span>
                  <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600 font-light">
            ต้องการข้อมูลเพิ่มเติม?{' '}
            <a href="#contact" className="text-green-600 font-medium hover:text-green-700 underline">
              ติดต่อเรา
            </a>{' '}
            เพื่อรับคำปรึกษาฟรี
          </p>
        </div>
      </div>
    </section>
  );
}
