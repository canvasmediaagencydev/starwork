'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function CafeHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://www.cafe-amazon.com/images/products/product-banner.jpg"
        unoptimized
        alt="Café Amazon StarWork Chiang Mai"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-green-600/90 text-white text-sm font-medium rounded-full mb-6">
            StarWork Chiang Mai
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Café Amazon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 font-light"
        >
          {t('คาเฟ่อเมซอน สตาร์เวิร์ค', 'Café Amazon at StarWork')}
        </motion.p>
      </div>
    </section>
  );
}
