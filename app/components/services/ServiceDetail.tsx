'use client';

import { useState } from 'react';
import { FaCheck, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

interface Service {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  descriptionEn?: string;
  images: string[];
  features: string[];
  featuresEn?: string[];
  sizes?: string[];
  sizesEn?: string[];
  pricing?: string;
  pricingEn?: string;
  packages?: Array<{ name: string; price: string; priceEn?: string }>;
  rooms?: Array<{ capacity: string; capacityEn?: string; price: string; priceEn?: string }>;
  hours?: string;
  hoursEn?: string;
  reverse?: boolean;
}

interface ServiceDetailProps {
  service: Service;
  index: number;
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language, t } = useLanguage();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  return (
    <section
      id={service.id}
      className={`relative py-16 md:py-24 overflow-hidden ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
      }`}
    >
      {/* Decorative Elements */}
      {index % 2 === 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Images */}
          <div className={`${service.reverse ? 'lg:order-2' : ''}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={service.images[currentImageIndex]}
                alt={service.title}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {service.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="text-gray-900" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="text-gray-900" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {service.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Content */}
          <div className={`${service.reverse ? 'lg:order-1' : ''}`}>
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
              <span className="text-green-700 text-sm font-medium">{service.title}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'EN' ? service.title : service.titleTh}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
              {language === 'EN' && service.descriptionEn ? service.descriptionEn : service.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('คุณสมบัติเด่น:', 'Key Features:')}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {(language === 'EN' && service.featuresEn ? service.featuresEn : service.features).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <FaCheck className="text-green-600 text-xs" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            {service.sizes && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('ขนาดห้องที่มี:', 'Available Room Sizes:')}</h3>
                <div className="flex flex-wrap gap-3">
                  {(language === 'EN' && service.sizesEn ? service.sizesEn : service.sizes).map((size, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-200"
                    >
                      <span className="text-gray-700 font-medium">{size}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Packages */}
            {service.packages && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('แพ็คเกจ:', 'Packages:')}</h3>
                <div className="space-y-3">
                  {service.packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100"
                    >
                      <span className="text-gray-900 font-medium">{pkg.name}</span>
                      <span className="text-green-600 font-bold">{language === 'EN' && pkg.priceEn ? pkg.priceEn : pkg.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rooms */}
            {service.rooms && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('ห้องและราคา:', 'Rooms & Pricing:')}</h3>
                <div className="space-y-3">
                  {service.rooms.map((room, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100"
                    >
                      <span className="text-gray-900 font-medium">{t('ความจุ', 'Capacity')} {language === 'EN' && room.capacityEn ? room.capacityEn : room.capacity}</span>
                      <span className="text-green-600 font-bold">{language === 'EN' && room.priceEn ? room.priceEn : room.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hours */}
            {service.hours && (
              <div className="mb-8 p-4 bg-green-50 rounded-xl border border-green-100">
                <p className="text-gray-700 font-medium">{language === 'EN' && service.hoursEn ? service.hoursEn : service.hours}</p>
              </div>
            )}

            {/* Pricing */}
            {service.pricing && (
              <div className="mb-8">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
                  <span className="text-white font-bold text-lg">{language === 'EN' && service.pricingEn ? service.pricingEn : service.pricing}</span>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-xl"
              >
                <span>{t('จองเข้าชม', 'Book a Tour')}</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0634414239"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-green-600 hover:text-green-600 transition-all duration-300"
              >
                <span>{t('สอบถามเพิ่มเติม', 'Inquire More')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
