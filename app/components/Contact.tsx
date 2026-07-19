'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaClock, FaLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AVAILABLE_ROOMS = 3; // TODO: อัปเดตให้ตรงกับจำนวนจริง

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-100/40 to-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-green-50/50 to-emerald-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/10 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              <span className="text-green-700 text-sm font-medium">Get Started Today</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('เริ่มต้นธุรกิจของคุณที่ ', 'Start your business at ')}
              <span className="text-green-600">StarWork</span>
              <br />
              {t('วันนี้', 'today')}
            </h2>

            <p className="text-xl text-gray-600 font-light mb-10 leading-relaxed">
              {t(
                'จองทัวร์ชมสำนักงาน — ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด',
                'Book an office tour — no cost, no commitment'
              )}
            </p>

            {/* Quick Info */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-green-600 text-lg" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{t('เปิดบริการ', 'Opening Hours')}</div>
                  <div className="text-gray-900 font-medium">{t('เปิดทุกวัน 09:00 - 18:00', 'Open daily 09:00 - 18:00')}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-green-600 text-lg" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{t('ที่อยู่', 'Address')}</div>
                  <div className="text-gray-900 font-medium">{t('87/9 ถนนทุ่งโฮเต็ล ตำบลวัดเกต', '87/9 Tunghotel Rd, Wat Ket')}<br />{t('อำเภอเมือง จังหวัดเชียงใหม่ 50000', 'Mueang Chiang Mai, Chiang Mai 50000')}</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://line.me/ti/p/@starwork"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-2xl hover:shadow-green-600/20"
              >
                <span>{t('จองทัวร์ชมฟรี', 'Book a Free Tour')}</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0634414239"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-700 border-2 border-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300"
              >
                <FaPhone className="text-sm" />
                <span>{t('โทร 063-441-4239', 'Call 063-441-4239')}</span>
              </a>
            </div>

            {/* Urgency Bar */}
            <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 bg-green-600 text-white rounded-xl shadow-lg shadow-green-600/20">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <span className="text-sm font-medium">
                {t(
                  `ห้องว่างเหลือจำกัด — ปัจจุบันมีเพียง ${AVAILABLE_ROOMS} ห้องพร้อมเข้าใช้`,
                  `Limited availability — only ${AVAILABLE_ROOMS} rooms ready to move in`
                )}
              </span>
            </div>
          </motion.div>

          {/* Right Side - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 p-8 border border-white/50 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl" />

              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/10 backdrop-blur-sm rounded-full mb-4 border border-green-600/20">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                    <span className="text-green-700 text-xs font-medium">{t('พร้อมให้บริการ', 'Ready to serve')}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {t('ติดต่อเราวันนี้', 'Contact Us Today')}
                  </h3>
                  <p className="text-gray-600 font-light">
                    {t('เราพร้อมช่วยเหลือคุณทุกขั้นตอน', 'We\'re here to help you every step of the way')}
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-3">
                  <a
                    href="tel:0634414239"
                    className="group flex items-center gap-4 p-5 bg-white/80 backdrop-blur-md rounded-2xl hover:bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FaPhone className="text-white text-lg" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs text-gray-500 mb-1 font-medium">{t('โทรหาเรา', 'Call Us')}</div>
                      <div className="text-gray-900 font-bold">063-441-4239</div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="mailto:sale@starworkchiangmai.com"
                    className="group flex items-center gap-4 p-5 bg-white/80 backdrop-blur-md rounded-2xl hover:bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-white text-lg" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs text-gray-500 mb-1 font-medium">{t('ส่งอีเมล', 'Email Us')}</div>
                      <div className="text-gray-900 font-bold">sale@starworkchiangmai.com</div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="https://line.me/ti/p/@starwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 bg-white/80 backdrop-blur-md rounded-2xl hover:bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FaLine className="text-white text-lg" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs text-gray-500 mb-1 font-medium">{t('แอดไลน์', 'Add Line')}</div>
                      <div className="text-gray-900 font-bold">@starwork</div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                  </a>
                </div>

                {/* Bottom Note */}
                <div className="mt-6 p-4 bg-green-50/50 backdrop-blur-sm rounded-xl border border-green-100/50 text-center">
                  <p className="text-sm text-gray-700">
                    {t('หรือ', 'Or')} <a href="https://line.me/ti/p/@starwork" target="_blank"
                      rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline transition-all">{t('จองทัวร์ชมสำนักงาน', 'book an office tour')}</a> {t('ได้ทันที', 'now')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
