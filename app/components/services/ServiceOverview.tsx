'use client';

import { FaBuilding, FaGlobe, FaUsers, FaDoorOpen, FaCoffee } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  titleEn: string;
  shortDesc: string;
  shortDescEn: string;
}

export default function ServiceOverview() {
  const { language, t } = useLanguage();
  const services: Service[] = [
    {
      id: 'serviced-office',
      icon: FaBuilding,
      title: 'ออฟฟิศพร้อมบริการ',
      titleEn: 'Serviced Office',
      shortDesc: 'ห้องออฟฟิศส่วนตัวพร้อมเฟอร์นิเจอร์ครบครัน',
      shortDescEn: 'Private office with full furniture',
    },
    {
      id: 'virtual-office',
      icon: FaGlobe,
      title: 'ออฟฟิศเสมือน',
      titleEn: 'Virtual Office',
      shortDesc: 'ที่อยู่จดทะเบียนบริษัทในทำเลดี',
      shortDescEn: 'Business registration address in prime location',
    },
    {
      id: 'coworking',
      icon: FaUsers,
      title: 'พื้นที่ทำงานร่วม',
      titleEn: 'Co-Working Space',
      shortDesc: 'พื้นที่ทำงานแบบเปิดที่ยืดหยุ่น',
      shortDescEn: 'Flexible open workspace',
    },
    {
      id: 'meeting-room',
      icon: FaDoorOpen,
      title: 'ห้องประชุม',
      titleEn: 'Meeting Room',
      shortDesc: 'ห้องประชุมพร้อมอุปกรณ์ครบครัน',
      shortDescEn: 'Fully equipped meeting room',
    },
    {
      id: 'cafe-amazon',
      icon: FaCoffee,
      title: 'คาเฟ่ อเมซอน',
      titleEn: 'Café Amazon',
      shortDesc: 'กาแฟสดและเครื่องดื่มคุณภาพ',
      shortDescEn: 'Fresh coffee and quality beverages',
    },
  ];

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('เลือกบริการที่เหมาะกับคุณ', 'Choose the Right Service for You')}
          </h2>
          <p className="text-gray-600 font-light">
            {t('คลิกเพื่อดูรายละเอียดของแต่ละบริการ', 'Click to see details of each service')}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToService(service.id)}
              className="group relative bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-green-600 hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <service.icon className="text-2xl text-green-600 group-hover:text-white transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                {language === 'EN' ? service.titleEn : service.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                {language === 'EN' ? service.title : service.titleEn}
              </p>

              {/* Short Description */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {language === 'EN' ? service.shortDescEn : service.shortDesc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
