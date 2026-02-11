'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const galleryImages = [
  { src: '/images/cafe/img_29.webp', alt: 'Café Amazon StarWork' },
  { src: '/images/cafe/img_30.webp', alt: 'Café Amazon Interior' },
  { src: '/images/cafe/img_31.webp', alt: 'Café Amazon Outdoor' },
  { src: '/images/cafe/img_32.webp', alt: 'Café Amazon Drinks' },
  { src: '/images/cafe/img_33.webp', alt: 'Café Amazon Atmosphere' },
];

function GalleryItem({
  image,
  index,
  onClick,
  t,
  className,
}: {
  image: { src: string; alt: string };
  index: number;
  onClick: (i: number) => void;
  t: (th: string, en: string) => string;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${className}`}
      onClick={() => onClick(index)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg drop-shadow-lg">
          {t('ดูรูป', 'View')}
        </span>
      </div>
    </motion.div>
  );
}

export default function CafeGallery() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full mb-4">
            {t('แกลเลอรี่', 'Gallery')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('บรรยากาศภายในร้าน', 'Our Atmosphere')}
          </h2>
        </motion.div>

        {/* Gallery Grid — Masonry-style bento layout */}
        <div className="grid grid-cols-4 md:grid-cols-6 auto-rows-[140px] md:auto-rows-[180px] gap-3 md:gap-4">
          {/* img_29 — large left hero */}
          <GalleryItem image={galleryImages[0]} index={0} onClick={openLightbox} t={t}
            className="col-span-2 row-span-2 md:col-span-3 md:row-span-2" />

          {/* img_30 — top right */}
          <GalleryItem image={galleryImages[1]} index={1} onClick={openLightbox} t={t}
            className="col-span-2 row-span-1 md:col-span-3 md:row-span-1" />

          {/* img_31 — mid right */}
          <GalleryItem image={galleryImages[2]} index={2} onClick={openLightbox} t={t}
            className="col-span-2 row-span-1 md:col-span-3 md:row-span-1" />

          {/* img_32 — bottom left */}
          <GalleryItem image={galleryImages[3]} index={3} onClick={openLightbox} t={t}
            className="col-span-2 row-span-1 md:col-span-2 md:row-span-1" />

          {/* img_33 — bottom right wide */}
          <GalleryItem image={galleryImages[4]} index={4} onClick={openLightbox} t={t}
            className="col-span-2 row-span-1 md:col-span-4 md:row-span-1" />
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-50"
              aria-label="Close"
            >
              <HiX className="text-3xl" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white p-2 z-50"
              aria-label="Previous"
            >
              <HiChevronLeft className="text-4xl" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white p-2 z-50"
              aria-label="Next"
            >
              <HiChevronRight className="text-4xl" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                width={1200}
                height={800}
                className="object-contain w-full h-full max-h-[85vh] rounded-lg"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 text-white/60 text-sm">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
