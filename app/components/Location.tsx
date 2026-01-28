'use client';

import { HiCheck } from 'react-icons/hi';
import { FaMapMarkerAlt, FaPlane, FaWalking, FaParking } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Location() {
  const { language, t } = useLanguage();

  const accessPoints = [
    {
      icon: FaMapMarkerAlt,
      text: 'ใกล้ Central Festival Chiang Mai',
      textEn: 'Near Central Festival Chiang Mai',
    },
    {
      icon: FaPlane,
      text: '10 นาทีจากสนามบินเชียงใหม่ (CNX)',
      textEn: '10 minutes from Chiang Mai Airport (CNX)',
    },
    {
      icon: FaParking,
      text: 'ที่จอดรถเพียงพอ',
      textEn: 'Ample parking available',
    },
  ];

  return (
    <section id="location" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-50/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('ใกล้ Central Festival', 'Near Central Festival')}
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            {t('ตั้งอยู่ใกล้ Central Festival Chiang Mai ทำเลทองใจกลางเมือง', 'Located near Central Festival Chiang Mai, prime location in the heart of the city')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Access Points */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('เข้าถึงได้สะดวก', 'Easy Access')}
              </h3>
              <p className="text-gray-600 font-light">
                {t('ทำเลที่ตั้งยอดเยี่ยมในย่านธุรกิจและไลฟ์สไตล์ของเชียงใหม่', 'Excellent location in Chiang Mai\'s business and lifestyle district')}
              </p>
            </div>

            <div className="space-y-4">
              {accessPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <point.icon className="text-green-600 text-lg" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1">
                    <p className="text-gray-700 font-light">{language === 'EN' ? point.textEn : point.text}</p>
                  </div>

                  {/* Checkmark */}
                  <div className="flex-shrink-0">
                    <HiCheck className="text-green-600 text-xl" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {t('อยากมาเยี่ยมชม?', 'Would you like to visit?')}
              </h4>
              <p className="text-gray-600 font-light mb-4">
                {t('นัดหมายเพื่อมาดูสำนักงานและสถานที่จริง', 'Schedule an appointment to see our office and premises in person')}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <span>{t('จองทัวร์ชมสำนักงาน', 'Book a Tour')}</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative">
            {/* Mobile: Clickable card to open Google Maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=StarWork+Chiangmai"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:hidden rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100 h-[300px]"
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <p className="text-gray-900 font-bold text-lg mb-1">StarWork Chiang Mai</p>
                <p className="text-gray-600 text-sm text-center mb-4">87/9 Tunghotel Rd, Wat Ket, Mueang Chiang Mai</p>
                <div className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium">
                  {t('แตะเพื่อเปิดแผนที่', 'Tap to open map')}
                </div>
              </div>
            </a>

            {/* Desktop: Interactive iframe */}
            <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.8967055705!2d99.01425!3d18.796376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da254c6ffcc5cb%3A0x375d86903a9983c7!2sStarWork%20Chiangmai!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="StarWork Chiang Mai Location"
              />
            </div>

            {/* Map Overlay Badge - Desktop only */}
            <div className="hidden md:block absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-900">
                  StarWork Chiang Mai
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
