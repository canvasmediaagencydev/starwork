'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaClock, FaLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
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
              พร้อมเริ่มต้น
              <br />
              <span className="text-green-600">ที่นี่</span>แล้วหรือยัง?
            </h2>

            <p className="text-xl text-gray-600 font-light mb-10 leading-relaxed">
              จองเข้าชมสำนักงานวันนี้ และค้นพบพื้นที่ทำงาน
              <br />
              ที่เหมาะกับธุรกิจของคุณ
            </p>

            {/* Quick Info */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-green-600 text-lg" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">เปิดบริการ</div>
                  <div className="text-gray-900 font-medium">เปิดทุกวัน 09:00 - 18:00</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-green-600 text-lg" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">ที่อยู่</div>
                  <div className="text-gray-900 font-medium">87/9 ถนนทุ่งโฮเต็ล ตำบลวัดเกต<br />อำเภอเมือง จังหวัดเชียงใหม่ 50000</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#plans"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-2xl hover:shadow-green-600/20"
            >
              <span>ดูแพ็คเกจของเรา</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
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
                    <span className="text-green-700 text-xs font-medium">พร้อมให้บริการ</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    ติดต่อเราวันนี้
                  </h3>
                  <p className="text-gray-600 font-light">
                    เราพร้อมช่วยเหลือคุณทุกขั้นตอน
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
                      <div className="text-xs text-gray-500 mb-1 font-medium">โทรหาเรา</div>
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
                      <div className="text-xs text-gray-500 mb-1 font-medium">ส่งอีเมล</div>
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
                      <div className="text-xs text-gray-500 mb-1 font-medium">แอดไลน์</div>
                      <div className="text-gray-900 font-bold">@starwork</div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                  </a>
                </div>

                {/* Bottom Note */}
                <div className="mt-6 p-4 bg-green-50/50 backdrop-blur-sm rounded-xl border border-green-100/50 text-center">
                  <p className="text-sm text-gray-700">
                    หรือ <a href="#plans" className="text-green-600 font-semibold hover:underline transition-all">จองทัวร์ชมสำนักงาน</a> ได้ทันที
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
