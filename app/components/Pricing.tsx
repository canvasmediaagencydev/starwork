'use client';

import { FaBuilding, FaGlobe, FaUsers, FaArrowRight, FaPhone, FaLine, FaEnvelope } from 'react-icons/fa';
import { HiLocationMarker, HiShieldCheck, HiWifi, HiClock } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Pricing() {
  const { language, t } = useLanguage();

  const features = [
    { icon: HiLocationMarker, text: 'ใกล้ Central Festival', textEn: 'Near Central Festival' },
    { icon: HiShieldCheck, text: 'เข้าถึงได้ 24/7', textEn: '24/7 Access' },
    { icon: HiClock, text: 'เปิดทุกวัน 09:00-18:00', textEn: 'Open daily 09:00-18:00' },
    { icon: HiWifi, text: 'อินเทอร์เน็ตความเร็วสูง', textEn: 'High-Speed Internet' },
  ];

  const contactButtons = [
    { icon: FaPhone, label: 'โทร', labelEn: 'Call', href: 'tel:0634414239' },
    { icon: FaLine, label: 'Line', labelEn: 'Line', href: 'https://line.me/ti/p/@starwork' },
    { icon: FaEnvelope, label: 'อีเมล', labelEn: 'Email', href: 'mailto:sale@starworkchiangmai.com' },
  ];

  const services = [
    {
      id: 'coworking',
      icon: FaUsers,
      title: 'พื้นที่ทำงานร่วม',
      titleEn: 'Co-Working Space',
      shortDesc: 'พื้นที่ทำงานแบบเปิดที่ยืดหยุ่น เหมาะสำหรับ Freelancer และ Startup',
      shortDescEn: 'Flexible open workspace, perfect for Freelancers and Startups',
      image: '/images/img_1.webp',
      features: [
        'โต๊ะทำงานสบาย ergonomic',
        'Wi-Fi ความเร็วสูง ไม่จำกัด',
        'เครื่องดื่มฟรี (กาแฟ, น้ำ)',
      ],
      featuresEn: [
        'Ergonomic work desks',
        'Unlimited high-speed Wi-Fi',
        'Free beverages (coffee, water)',
      ],
      pricing: '300 บาท/วัน',
      pricingEn: '300 THB/day',
    },
    {
      id: 'serviced-office',
      icon: FaBuilding,
      title: 'ออฟฟิศพร้อมบริการ',
      titleEn: 'Serviced Office',
      shortDesc: 'ห้องออฟฟิศส่วนตัวพร้อมเฟอร์นิเจอร์ครบครัน เหมาะสำหรับธุรกิจที่ต้องการความเป็นส่วนตัว',
      shortDescEn: 'Private office with full furniture, ideal for businesses seeking privacy',
      image: '/images/img_4.webp',
      features: [
        'เฟอร์นิเจอร์ครบครัน พร้อมใช้งานทันที',
        'ที่อยู่จดทะเบียนบริษัท',
        'Wi-Fi ความเร็วสูง',
      ],
      featuresEn: [
        'Fully furnished, ready to use',
        'Business registration address',
        'High-speed Wi-Fi',
      ],
      pricing: 'เริ่มต้น 6,900 บาท/เดือน',
      pricingEn: 'Starting at 6,900 THB/month',
    },
    {
      id: 'virtual-office',
      icon: FaGlobe,
      title: 'ออฟฟิศเสมือน',
      titleEn: 'Virtual Office',
      shortDesc: 'ที่อยู่ธุรกิจในทำเลดีโดยไม่ต้องเช่าพื้นที่จริง',
      shortDescEn: 'Business address in prime location without renting physical space',
      image: '/images/Pic_V2.webp',
      features: [
        'ที่อยู่จดทะเบียนบริษัทในทำเลดี',
        'รับจดหมายและพัสดุ',
        'บริการตอบโทรศัพท์',
      ],
      featuresEn: [
        'Business registration address in prime location',
        'Mail and package handling',
        'Phone answering service',
      ],
      pricing: '',
      pricingEn: '',
    },
  ];

  return (
    <section id="plans" className="relative py-24 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        {/* Top Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-64 text-white"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Bottom Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 text-green-50"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.5"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Features Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200/50"
            >
              <feature.icon className="text-green-600 text-xl flex-shrink-0" />
              <span className="text-sm text-gray-700 font-light">{language === 'EN' ? feature.textEn : feature.text}</span>
            </div>
          ))}
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {contactButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 hover:shadow-lg transition-all duration-300"
            >
              <button.icon className="text-lg" />
              <span>{language === 'EN' ? button.labelEn : button.label}</span>
            </a>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('แพ็คเกจและราคา', 'Packages & Pricing')}
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            {t(
              'ทุกแพ็คเกจรวมค่าสาธารณูปโภค ทำความสะอาด จัดการจดหมาย เครดิตห้องประชุม และการสนับสนุนในสถานที่',
              'All packages include utilities, cleaning, mail handling, meeting room credits, and on-site support'
            )}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Icon on Image */}
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="text-2xl text-green-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {language === 'EN' ? service.titleEn : service.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    {language === 'EN' ? service.title : service.titleEn}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 font-light text-sm mb-4 min-h-[2.5rem]">
                  {language === 'EN' ? service.shortDescEn : service.shortDesc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {(language === 'EN' ? service.featuresEn : service.features).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                {service.pricing && (
                  <div className="pt-4 border-t border-gray-100 mb-4">
                    <p className="text-base font-bold text-green-600">
                      {language === 'EN' ? service.pricingEn : service.pricing}
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                <Link
                  href={`/services#${service.id}`}
                  className="group/btn w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-medium hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  <span>{t('ดูรายละเอียด', 'View Details')}</span>
                  <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30 transition-all duration-300 group"
          >
            <span>{t('ติดต่อเรา เพื่อรับคำปรึกษาฟรี', 'Contact Us for Free Consultation')}</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
