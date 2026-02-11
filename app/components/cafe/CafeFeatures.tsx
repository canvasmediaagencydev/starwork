'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaWifi, FaPlug, FaCar, FaMotorcycle, FaTree, FaCoffee } from 'react-icons/fa';
import { HiOutlineSun } from 'react-icons/hi';
import { MdDeliveryDining } from 'react-icons/md';

export default function CafeFeatures() {
  const { t } = useLanguage();

  const features = [
    {
      icon: FaCoffee,
      title: t('กาแฟพรีเมี่ยม', 'Premium Coffee'),
      description: t('เมนูกาแฟอเมซอนหลากหลาย', 'Wide selection of Café Amazon menus'),
    },
    {
      icon: FaWifi,
      title: t('Wi-Fi ความเร็วสูง', 'High-Speed Wi-Fi'),
      description: t('อินเทอร์เน็ตความเร็วสูงฟรี', 'Free high-speed internet'),
    },
    {
      icon: FaPlug,
      title: t('ปลั๊กไฟ', 'Power Outlets'),
      description: t('ปลั๊กไฟสำหรับทำงาน', 'Power outlets for working'),
    },
    {
      icon: FaTree,
      title: t('น้ำตกสวยงาม', 'Beautiful Waterfall'),
      description: t('บรรยากาศที่สะดวกสบายโดยน้ําตก', 'Relaxing atmosphere by the waterfall'),
    },
    {
      icon: HiOutlineSun,
      title: t('ในร่มและกลางแจ้ง', 'Indoor & Outdoor'),
      description: t('ที่นั่งทั้งในร่มและกลางแจ้ง', 'Both indoor and outdoor seating'),
    },
    {
      icon: MdDeliveryDining,
      title: t('บริการจัดส่ง', 'Delivery Service'),
      description: t('บริการจัดส่งเครื่องดื่มถึงมือคุณ', 'Drink delivery straight to you'),
    },
    {
      icon: FaCar,
      title: t('ที่จอดรถ', 'Parking'),
      description: t('ที่จอดรถฟรีสะดวกสบาย', 'Free convenient parking'),
    },
    {
      icon: FaMotorcycle,
      title: t('สะดวกเข้าถึง', 'Easy Access'),
      description: t('ทำเลสะดวกใจกลางเชียงใหม่', 'Convenient location in Chiang Mai'),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
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
            {t('สิ่งอำนวยความสะดวก', 'Amenities')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('เพลิดเพลินกับการทํางานและกาแฟ', 'Enjoy Your Work & Coffee')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t(
              'ด้วยอินเทอร์เน็ตความเร็วสูง และปลั๊กเต้าเสียบไฟฟ้าสําหรับทุกโต๊ะ ทั้งในร่มและกลางแจ้ง',
              'With high-speed internet and power outlets at every table, both indoor and outdoor'
            )}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-50 group-hover:bg-green-100 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <feature.icon className="text-xl text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
