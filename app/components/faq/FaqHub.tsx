'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaArrowRight, FaPhone } from 'react-icons/fa';
import { faqHubCategories } from '@/lib/faq-hub-data';

// Related internal links per category (UI concern — kept out of the schema data).
// Provides the internal linking to /services and /blog required for SEO.
const RELATED: Record<string, { label: string; href: string }[]> = {
  'serviced-office': [
    { label: 'ทำไม Startup และ SME เลือก Serviced Office', href: '/blog/why-startups-smes-choose-serviced-office' },
    { label: 'ดูรายละเอียด Serviced Office', href: '/services#serviced-office' },
  ],
  pricing: [
    { label: '5 ค่าใช้จ่ายแฝงของการเช่าออฟฟิศ', href: '/blog/hidden-costs-office-rental-serviced-office' },
    { label: 'ดูแพ็กเกจและราคาทั้งหมด', href: '/services' },
  ],
  'company-registration': [
    { label: 'ดูรายละเอียด Virtual Office', href: '/services#virtual-office' },
  ],
  'facilities-access': [
    { label: 'ดูบริการและสิ่งอำนวยความสะดวกทั้งหมด', href: '/services' },
  ],
  'location-transport': [
    { label: 'คาเฟ่อเมซอนภายในอาคาร', href: '/cafe' },
  ],
};

export default function FaqHub() {
  // One open item at a time, keyed by a global index across all categories.
  const [openKey, setOpenKey] = useState<string | null>('serviced-office-0');

  return (
    <section className="relative bg-white pt-28 pb-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-24 -left-20 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-24 -right-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
      </div>

      {/* TODO: เพิ่มรูป hero/ประกอบหน้า FAQ เมื่อได้ภาพจริงจากลูกค้า */}

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb (visual) */}
        <nav aria-label="breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-green-600 transition-colors">หน้าแรก</Link>
            </li>
            <li aria-hidden className="text-gray-300">/</li>
            <li className="text-gray-700 font-medium" aria-current="page">คำถามที่พบบ่อย</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-14">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-5">
            <span className="text-green-700 text-sm font-medium">คำถามที่พบบ่อย</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            คำถามที่พบบ่อยเรื่องเช่าออฟฟิศในเชียงใหม่
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            รวมคำตอบเรื่อง Serviced Office, Virtual Office, ราคา การจดทะเบียนบริษัท
            สิ่งอำนวยความสะดวก และทำเลย่านวัดเกตใกล้ Central Festival — ดูรายละเอียดแต่ละแพ็กเกจได้ที่หน้า{' '}
            <Link href="/services" className="text-green-600 font-medium hover:underline">บริการของเรา</Link>{' '}
            หรืออ่านบทความเชิงลึกในหน้า{' '}
            <Link href="/blog" className="text-green-600 font-medium hover:underline">บล็อก</Link>
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {faqHubCategories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{cat.title}</h2>

              <div className="space-y-4">
                {cat.items.map((item, idx) => {
                  const key = `${cat.id}-${idx}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <button
                        onClick={() => setOpenKey(isOpen ? null : key)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">{item.question}</span>
                        <FaChevronDown
                          className={`text-green-600 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-[32rem]' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-5 pt-1">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Related internal links */}
              {RELATED[cat.id] && (
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <span className="text-gray-400">เกี่ยวข้อง:</span>
                  {RELATED[cat.id].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-green-600 font-medium hover:underline"
                    >
                      {link.label}
                      <FaArrowRight className="text-xs" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Soft CTA */}
        <div className="mt-16 text-center p-8 lg:p-10 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl border border-green-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">ยังมีคำถามอื่นอยู่ในใจ?</h2>
          <p className="text-gray-600 mb-8">
            ทีมงานยินดีให้คำปรึกษาและพาชมพื้นที่จริงก่อนตัดสินใจ ไม่มีค่าใช้จ่าย
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-xl hover:shadow-green-600/20"
            >
              <span>ปรึกษาทีมงาน / จองทัวร์ชม</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0634414239"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-700 border-2 border-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300"
            >
              <FaPhone className="text-sm" />
              <span>โทร 063-441-4239</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            หรือดู{' '}
            <Link href="/services" className="text-green-600 font-medium hover:underline">แพ็กเกจและราคาทั้งหมด</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
