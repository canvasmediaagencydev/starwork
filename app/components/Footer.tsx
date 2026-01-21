'use client';

import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: 'Plans & Pricing', href: '#plans' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  const support = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 text-gray-700 overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#10b981_1px,transparent_1px),linear-gradient(150deg,#10b981_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand - Larger Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">StarWork</div>
                <div className="text-xs text-green-600">Chiang Mai</div>
              </div>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
              Premium service offices in the heart of Chiang Mai, designed for growing businesses.
            </p>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top */}
          <div className="lg:col-span-3 flex lg:justify-end">
            <button
              onClick={scrollToTop}
              className="group h-fit px-6 py-4 bg-white hover:bg-green-600 rounded-xl border border-gray-200 hover:border-green-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900 group-hover:text-white">Back to Top</span>
                <div className="w-8 h-8 bg-gray-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center group-hover:-translate-y-1 transition-all">
                  <FaArrowUp className="text-sm text-gray-700 group-hover:text-white" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 StarWork Chiang Mai. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <Link href="#privacy" className="hover:text-green-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-green-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
