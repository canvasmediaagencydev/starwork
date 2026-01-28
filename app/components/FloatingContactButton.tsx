'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaTimes, FaLine } from 'react-icons/fa';
import { HiChatAlt2 } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingContactButton() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Card - Show when open */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 mb-3 w-72 animate-fade-in-up">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <h3 className="text-white font-semibold">{t('ติดต่อเราได้ทันที', 'Contact Us Now')}</h3>
              </div>
              <p className="text-green-50 text-sm mt-1">{t('เราพร้อมให้บริการคุณ', 'We are ready to serve you')}</p>
            </div>

            {/* Contact Options */}
            <div className="p-4 space-y-2">
              <a
                href="tel:0634414239"
                className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-green-50 rounded-xl transition-all duration-300 hover:shadow-md border border-transparent hover:border-green-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 font-medium">{t('โทรหาเรา', 'Call Us')}</div>
                  <div className="text-gray-900 font-bold">063-441-4239</div>
                </div>
              </a>

              <a
                href="mailto:sale@starworkchiangmai.com"
                className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-green-50 rounded-xl transition-all duration-300 hover:shadow-md border border-transparent hover:border-green-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 font-medium">{t('ส่งอีเมล', 'Email Us')}</div>
                  <div className="text-gray-900 font-bold text-xs break-all">sale@starworkchiangmai.com</div>
                </div>
              </a>

              <a
                href="https://line.me/ti/p/@starwork"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-green-50 rounded-xl transition-all duration-300 hover:shadow-md border border-transparent hover:border-green-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <FaLine className="text-white text-lg" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 font-medium">{t('แอดไลน์', 'Add Line')}</div>
                  <div className="text-gray-900 font-bold text-sm">@starwork</div>
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                {t('เปิดทุกวัน 09:00-18:00', 'Open daily 09:00-18:00')}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-gray-900 hover:bg-gray-800 rotate-90'
            : 'bg-gradient-to-br from-green-600 to-emerald-600 hover:scale-110'
        }`}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
      >
        {isOpen ? (
          <FaTimes className="text-white text-2xl" />
        ) : (
          <HiChatAlt2 className="text-white text-3xl group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Ping Animation - Only show when closed */}
      {!isOpen && (
        <>
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </>
      )}
    </div>
  );
}
