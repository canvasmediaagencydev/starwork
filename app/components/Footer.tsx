'use client';

import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: 'Plans & Pricing', href: '/#plans' },
    { name: 'Amenities', href: '/#amenities' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Location', href: '/#location' },
    { name: 'Blog', href: '/blog' },
  ];

  const support = [
    { name: 'Contact Us', href: '/#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-white text-gray-700">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 hidden opacity-10 md:block">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#10b981_1px,transparent_1px),linear-gradient(150deg,#10b981_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 border-t border-gray-100 py-10 sm:py-14 md:grid-cols-2 md:gap-12 md:border-t-0 lg:grid-cols-12 lg:py-16">
          {/* Brand - Larger Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="group mb-5 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 transition-transform group-hover:scale-110 md:h-12 md:w-12">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900 md:text-2xl">StarWork</div>
                <div className="text-xs text-green-600">Chiang Mai</div>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-gray-600 md:text-base">
              Premium service offices in the heart of Chiang Mai, designed for growing businesses.
            </p>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 md:mb-6 md:text-sm md:tracking-wider">Quick Links</h4>
            <ul className="divide-y divide-gray-100 md:divide-y-0 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:text-green-700 md:inline-block md:py-0 md:font-normal md:text-gray-600 md:hover:translate-x-1 md:hover:text-green-600"
                  >
                    <span>{link.name}</span>
                    <span className="text-gray-300 md:hidden">/</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 md:mb-6 md:text-sm md:tracking-wider">Support</h4>
            <ul className="divide-y divide-gray-100 md:divide-y-0 md:space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:text-green-700 md:inline-block md:py-0 md:font-normal md:text-gray-600 md:hover:translate-x-1 md:hover:text-green-600"
                  >
                    <span>{link.name}</span>
                    <span className="text-gray-300 md:hidden">/</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top */}
          <div className="flex lg:col-span-3 lg:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex h-fit w-full items-center justify-between border-t border-gray-100 py-4 transition-colors hover:text-green-700 sm:w-auto sm:justify-start sm:gap-3 sm:border-t-0 sm:rounded-xl sm:border sm:border-gray-200 sm:bg-white sm:px-6 sm:shadow-sm sm:hover:border-green-600 sm:hover:bg-green-600 sm:hover:text-white sm:hover:shadow-xl"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 transition-all group-hover:-translate-y-1 group-hover:bg-green-100 sm:h-8 sm:w-8 sm:rounded-lg sm:bg-gray-100 sm:group-hover:bg-white/20">
                <FaArrowUp className="text-sm text-green-700 sm:text-gray-700 sm:group-hover:text-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6 md:py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-xs leading-6 text-gray-500 md:text-left md:text-sm">
              © 2025 StarWork Chiang Mai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
