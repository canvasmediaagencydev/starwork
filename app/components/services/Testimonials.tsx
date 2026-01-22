'use client';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'คุณสมชาย วงศ์ไทย',
      position: 'CEO',
      company: 'Tech Startup Co.',
      image: '/images/unsplash/testimonial-1.jpg',
      rating: 5,
      text: 'StarWork เป็นพื้นที่ทำงานที่ดีที่สุดที่เคยใช้ บรรยากาศดี ทำเลสะดวก บริการประทับใจมาก ทำให้ทีมของเราทำงานได้อย่างมีประสิทธิภาพ',
      service: 'Serviced Office',
    },
    {
      name: 'คุณนภา ศรีสุข',
      position: 'Freelance Designer',
      company: 'Independent',
      image: '/images/unsplash/testimonial-2.jpg',
      rating: 5,
      text: 'ใช้บริการ Co-Working Space มา 6 เดือนแล้ว ชอบมาก ได้พบกับคนทำงานหลายคน แลกเปลี่ยนไอเดียกันได้ WiFi เร็ว ราคาเหมาะสม',
      service: 'Co-Working Space',
    },
    {
      name: 'คุณธนา พันธุ์ดี',
      position: 'Managing Director',
      company: 'Import-Export Ltd.',
      image: '/images/unsplash/testimonial-3.jpg',
      rating: 5,
      text: 'ใช้บริการ Virtual Office เพื่อจดทะเบียนบริษัท ทีมงานช่วยเหลือดีมาก ดูแลเรื่องเอกสารและจดหมายอย่างดี คุ้มค่ามาก',
      service: 'Virtual Office',
    },
    {
      name: 'คุณพิมพ์ใจ รักสวย',
      position: 'HR Manager',
      company: 'Marketing Agency',
      image: '/images/unsplash/testimonial-4.jpg',
      rating: 5,
      text: 'ห้องประชุมสะอาด อุปกรณ์ครบครัน ทันสมัย จองง่าย ราคาไม่แพง ใช้บริการมาหลายครั้งแล้ว ประทับใจทุกครั้ง',
      service: 'Meeting Room',
    },
    {
      name: 'คุณวิทยา เจริญสุข',
      position: 'Event Organizer',
      company: 'Event Plus',
      image: '/images/unsplash/testimonial-5.jpg',
      rating: 5,
      text: 'จัด Workshop ที่ Event Space ของ StarWork หลายครั้งแล้ว พื้นที่กว้างขวาง จัดได้หลากหลายรูปแบบ ทีมงานช่วยเหลือดีเยี่ยม',
      service: 'Event Space',
    },
    {
      name: 'คุณอรุณี มีสุข',
      position: 'Startup Founder',
      company: 'FoodTech',
      image: '/images/unsplash/testimonial-6.jpg',
      rating: 5,
      text: 'เป็น Startup เพิ่งเริ่มต้น StarWork ช่วยให้เรามีออฟฟิศที่ดูมืออาชีพโดยไม่ต้องลงทุนมาก สะดวกครบจบในที่เดียว แนะนำเลยค่ะ',
      service: 'Serviced Office',
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-green-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ลูกค้าของเราพูดถึงเรา
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            ฟังความคิดเห็นจากผู้ที่ใช้บริการจริง
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaQuoteLeft className="text-6xl text-green-600" />
              </div>

              {/* Service Badge */}
              <div className="inline-block px-3 py-1 bg-green-50 rounded-full mb-4">
                <span className="text-xs text-green-700 font-medium">{testimonial.service}</span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600">ลูกค้าพอใจ</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600">คะแนนรีวิว</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">ต่อสัญญา</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">3+</div>
            <div className="text-gray-600">ปีประสบการณ์</div>
          </div>
        </div>
      </div>
    </section>
  );
}
