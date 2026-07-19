'use client';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function HomeTestimonials() {
  const { t } = useLanguage();

  // TODO: แทนที่ด้วย testimonial จากลูกค้าจริง
  const testimonials = [
    {
      initials: 'KS',
      name: t('คุณสมชาย (ตัวอย่าง)', 'Somchai (Sample)'),
      role: t('CEO, Tech Startup', 'CEO, Tech Startup'),
      text: t(
        'ย้ายทีม 8 คนมาจาก home office ภายใน 1 วัน ไม่ต้องคิดเรื่องเน็ต เรื่องไฟ เรื่องแม่บ้าน — ประหยัดเวลาไปโฟกัสธุรกิจได้เลย',
        'Moved my team of 8 from a home office in a single day. No worrying about internet, electricity, or cleaning — saved us so much time to focus on the business.'
      ),
    },
    {
      initials: 'MR',
      name: t('คุณมนัส (ตัวอย่าง)', 'Manas (Sample)'),
      role: t('ผู้จัดการ, Digital Agency', 'Manager, Digital Agency'),
      text: t(
        'ลูกค้ามาประชุมที่ออฟฟิศ impression ดีมาก ดูมืออาชีพกว่าเช่าตึกเอง แต่ราคาเป็นมิตรกว่ามาก',
        'Clients who come to meet us at the office are impressed — it looks more professional than renting our own building, but at a far friendlier price.'
      ),
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
            <span className="text-green-700 text-sm font-medium">{t('รีวิวจากลูกค้า', 'Testimonials')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('เสียงจากทีมที่เลือก StarWork', 'Voices From Teams Who Chose StarWork')}
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            {t('ลูกค้าจริง ประสบการณ์จริง', 'Real clients, real experiences')}
          </p>
        </div>

        {/* Testimonials Grid — 2 cards */}
        {/* TODO: แทนที่ด้วย testimonial จากลูกค้าจริง */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaQuoteLeft className="text-6xl text-green-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-base" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
