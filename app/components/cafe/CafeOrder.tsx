'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaClock } from 'react-icons/fa';

export default function CafeOrder() {
  const { t } = useLanguage();

  return (
    <section id="order" className="py-20 lg:py-28 bg-gradient-to-br from-green-700 via-emerald-700 to-green-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('สั่งเครื่องดื่มผ่าน LINE', 'Order Drinks via LINE')}
            </h2>
            <p className="text-green-100 text-lg leading-relaxed mb-8">
              {t(
                'สะดวกยิ่งขึ้นด้วยการสั่งเครื่องดื่มผ่าน LINE เราจะจัดส่งเครื่องดื่มให้ถึงมือคุณ ไม่ว่าคุณจะอยู่ที่ออฟฟิศหรือพื้นที่ทำงานใน StarWork',
                'Even more convenient — order drinks via LINE and we\'ll deliver them right to you, whether you\'re at your office or workspace in StarWork.'
              )}
            </p>

            {/* Opening Hours */}
            <div className="flex items-center gap-3 mb-8 text-white">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <FaClock className="text-green-200" />
              </div>
              <div>
                <p className="text-sm text-green-200">{t('เวลาเปิดทำการ', 'Opening Hours')}</p>
                <p className="text-lg font-semibold">07:30 - 19:30</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://line.me/ti/p/@starwork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('เพิ่มเพื่อน LINE', 'Add LINE Friend')}
            </a>
          </motion.div>

          {/* LINE QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">LINE @starwork</h3>
                <p className="text-gray-500 text-sm">
                  {t('สแกน QR Code เพื่อสั่งเครื่องดื่ม', 'Scan QR Code to order drinks')}
                </p>
              </div>
              <div className="relative w-full aspect-square max-w-[260px] mx-auto rounded-2xl overflow-hidden">
                <Image
                  src="/images/cafe/ID-Line-cafe-Amazon-300x300.jpg"
                  alt="LINE QR Code - Café Amazon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-gray-400 text-xs mt-4">
                {t('สแกนเพื่อเพิ่มเพื่อนและสั่งเครื่องดื่ม', 'Scan to add friend and order drinks')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
