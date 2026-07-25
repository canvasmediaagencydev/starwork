'use client';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '@/app/context/LanguageContext';
import { customerReviews } from '@/lib/testimonials';

export default function Testimonials() {
  const { t } = useLanguage();

  // รีวิวจริงจากลูกค้า (Google Reviews, 5 ดาว) — แหล่งข้อมูลกลางเดียวกับหน้าแรก
  const testimonials = customerReviews.map((r) => ({
    letter: r.letter,
    name: r.name,
    source: t('รีวิวจาก Google', 'Google Review'),
    text: t(r.textTh, r.textEn),
  }));

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
            {t('ลูกค้าของเราพูดถึงเรา', 'What Our Clients Say')}
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            {t('ลูกค้าจริง ประสบการณ์จริง', 'Real clients, real experiences')}
          </p>
        </div>

        {/* Testimonials Grid — real Google reviews */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
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
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {testimonial.letter}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.source}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
