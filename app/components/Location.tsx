'use client';

import { HiCheck } from 'react-icons/hi';
import { FaMapMarkerAlt, FaPlane, FaWalking, FaParking } from 'react-icons/fa';

export default function Location() {
  const accessPoints = [
    {
      icon: FaMapMarkerAlt,
      text: 'ใกล้ Central Festival Chiang Mai',
    },
    {
      icon: FaPlane,
      text: '10 นาทีจากสนามบินเชียงใหม่ (CNX)',
    },
    {
      icon: FaParking,
      text: 'ที่จอดรถเพียงพอ',
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
            ใกล้ Central Festival
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            ตั้งอยู่ใกล้ Central Festival Chiang Mai ทำเลทองใจกลางเมือง
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Access Points */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                เข้าถึงได้สะดวก
              </h3>
              <p className="text-gray-600 font-light">
                ทำเลที่ตั้งยอดเยี่ยมในย่านธุรกิจและไลฟ์สไตล์ของเชียงใหม่
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
                    <p className="text-gray-700 font-light">{point.text}</p>
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
                อยากมาเยี่ยมชม?
              </h4>
              <p className="text-gray-600 font-light mb-4">
                นัดหมายเพื่อมาดูสำนักงานและสถานที่จริง
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <span>จองทัวร์ชมสำนักงาน</span>
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7553.793611641068!2d99.01022199653907!3d18.802751679385423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x30da25341c860e03%3A0x479daf5a0a43e38!2sCentral%20Festival%20Chiang%20Mai%2C%20Lampang%20-%20Chiang%20Mai%20Superhighway%2C%20Fa%20Ham%2C%20Mueang%20Chiang%20Mai%20District%2C%20Chiang%20Mai!3m2!1d18.8061895!2d99.0179173!4m5!1s0x30da254c6ffcc5cb%3A0x375d86903a9983c7!2zU3RhcldvcmsgQ2hpYW5nbWFpLCA4Ny85IFR1bmdob3RlbCBSZCwg4LiV4Liz4Lia4Lil4Lin4Lix4LiU4LmA4LiB4LiV4Li4IE11ZWFuZyBDaGlhbmcgTWFpIERpc3RyaWN0LCBDaGlhbmcgTWFpIDUwMDAw!3m2!1d18.796375899999997!2d99.0164451!5e0!3m2!1sen!2sth!4v1768972710961!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] contrast-[1.1]"
              />
            </div>

            {/* Map Overlay Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
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
