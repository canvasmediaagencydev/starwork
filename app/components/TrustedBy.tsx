'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function TrustedBy() {
  const { t } = useLanguage();

  // TODO: แทนที่ด้วยโลโก้ลูกค้าจริง
  const logos = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6'];

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium uppercase tracking-[0.25em] text-gray-500 mb-10"
        >
          {t('ได้รับความไว้วางใจจากธุรกิจชั้นนำ', 'Trusted By Leading Businesses')}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {/* TODO: แทนที่ด้วยโลโก้ลูกค้าจริง */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-28 h-14 sm:w-32 sm:h-16 rounded-lg bg-gray-200/70 text-gray-400 text-sm font-medium grayscale hover:grayscale-0 transition-all duration-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
