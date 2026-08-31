'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const logos = [
  { src: '/images/clients/ntn.jpg', alt: 'NTN', featured: true },
  { src: '/images/clients/hikvision.jpg', alt: 'Hikvision', featured: true },
  { src: '/images/clients/dmc-connect.webp', alt: 'DMC Connect' },
  { src: '/images/clients/aroi-desu.webp', alt: 'Aroi Desu' },
  { src: '/images/clients/wp51.webp', alt: 'WP51 Company Limited' },
  { src: '/images/clients/kan-development.webp', alt: 'Kan Kanchanaphan Development' },
  { src: '/images/clients/spacetrax.webp', alt: 'Spacetrax' },
  { src: '/images/clients/payso.webp', alt: 'Payso' },
  { src: '/images/clients/jingthai.webp', alt: 'Jingthai Travel Tour' },
  { src: '/images/clients/mulberrysoft.webp', alt: 'Mulberrysoft' },
  { src: '/images/clients/suko-translation.webp', alt: 'Suko Translation' },
  { src: '/images/clients/matchday.webp', alt: 'Match Day' },
];

export default function TrustedBy() {
  const { t } = useLanguage();

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex items-center justify-center rounded-xl bg-white ring-1 shadow-sm transition-all duration-300 hover:shadow-md ${
                logo.featured
                  ? 'h-28 px-6 ring-emerald-200/80 shadow-md sm:h-32 sm:px-8'
                  : 'h-20 px-5 ring-gray-200/70 hover:ring-gray-300'
              }`}
            >
              <div className={`relative w-full ${logo.featured ? 'h-16 sm:h-20' : 'h-10'}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes={logo.featured
                    ? '(max-width: 640px) 44vw, (max-width: 768px) 30vw, 220px'
                    : '(max-width: 640px) 40vw, (max-width: 768px) 30vw, 160px'}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
