'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { serviceFaqs } from '@/lib/faq-data';

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, t } = useLanguage();

  // Shared source of truth — the FAQPage JSON-LD on app/services/page.tsx uses
  // the exact same array, so UI and structured data can never drift apart.
  const faqs = serviceFaqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-linear-to-br from-gray-50 to-white overflow-hidden">
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
            {t('คำถามที่พบบ่อย', 'Frequently Asked Questions')}
          </h2>
          <p className="text-lg text-gray-600 font-light">
            {t('คำตอบสำหรับคำถามที่ลูกค้ามักสอบถาม', 'Answers to commonly asked questions')}
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
                  {language === 'EN' ? faq.questionEn : faq.question}
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
                  <p className="text-gray-600 leading-relaxed">{language === 'EN' ? faq.answerEn : faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {t('ยังมีคำถามอื่นๆ อีกไหม?', 'Still have questions?')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('ติดต่อทีมงานของเราได้ทันที เรายินดีให้คำปรึกษา', 'Contact our team now, we are happy to help')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            <span>{t('ติดต่อเรา', 'Contact Us')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
