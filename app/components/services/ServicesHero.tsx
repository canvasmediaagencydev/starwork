'use client';

import { FaArrowDown } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export default function ServicesHero() {
  const { t } = useLanguage();
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-list');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-green-700">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-white text-xs font-medium">Services</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            {t('บริการของเรา', 'Our Services')}
          </h1>
          <p className="text-base sm:text-lg text-green-50 font-light mb-8">
            {t('ครบครัน ตอบโจทย์ทุกความต้องการ', 'Complete solutions for all your needs')}
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">5</div>
              <div className="text-xs sm:text-sm text-green-100">{t('บริการหลัก', 'Main Services')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-green-100">{t('เข้าถึงได้ตลอด', 'Access')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-xs sm:text-sm text-green-100">{t('ลูกค้าพอใจ', 'Happy Clients')}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-green-50/80 font-light max-w-2xl mx-auto mb-8">
            {t('จาก Private Office, Virtual Office, Co-Working Space ไปจนถึง Meeting Room เราพร้อมรองรับทุกรูปแบบการทำงานของคุณ', 'From Private Office, Virtual Office, Co-Working Space to Meeting Room, we are ready to support all your work styles')}
          </p>

          {/* Scroll Button */}
          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all group border border-white/30"
            aria-label="Scroll to services"
          >
            <span className="text-sm font-medium">{t('ดูรายละเอียดบริการ', 'View Service Details')}</span>
            <FaArrowDown className="text-xs group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
