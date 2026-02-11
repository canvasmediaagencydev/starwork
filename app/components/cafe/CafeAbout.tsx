'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function CafeAbout() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full mb-4">
              Café Amazon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t('คาเฟ่อเมซอน', 'Café Amazon')}
              <br />
              <span className="text-green-600">
                {t('สตาร์เวิร์ค', 'StarWork')}
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t(
                'ร้านกาแฟคาเฟ่อเมซอนสําหรับคนที่ทันสมัยเช่นคุณ นั่งและจิบกาแฟพรีเมี่ยมของเราด้วยเมนูต่างๆของกาแฟอเมซอน ในสถานที่ที่สะดวกสบายของเราด้วย Wi-Fi และปลั๊กไฟฟ้า',
                'Café Amazon for modern people like you. Sit and sip our premium coffee with a wide selection of Café Amazon menus in our comfortable space with Wi-Fi and power outlets.'
              )}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t(
                'ที่นี่คุณสามารถเพลิดเพลินกับวันและการทํางานของคุณในบรรยากาศที่สะดวกสบายมากโดยน้ําตกที่สวยงาม นอกจากนี้เรายังมีบริการจัดส่งเครื่องดื่มให้ถึงมือคุณ เพื่อความสะดวกสบายยิ่งขึ้นและที่จอดรถที่จะให้บริการคุณ',
                'Here you can enjoy your day and work in an extremely comfortable atmosphere by a beautiful waterfall. We also offer drink delivery service for your convenience, along with parking to serve you.'
              )}
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 text-sm">
                <span className="font-semibold">{t('หมายเหตุ', 'Note')} : </span>
                {t(
                  'เมนูเครื่องดื่มพิเศษอื่นๆ ตามเวลาและเทศกาล สามารถสอบถามได้ที่ คาเฟ่ อเมซอน',
                  'Special seasonal menus and limited-time drinks are available. Please inquire at Café Amazon for details.'
                )}
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cafe/img_29.webp"
                alt={t('คาเฟ่อเมซอน สตาร์เวิร์ค', 'Café Amazon StarWork')}
                width={600}
                height={450}
                className="object-cover w-full h-[450px]"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
