'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export default function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const switchToThai = () => {
    setLanguage('TH');
    setIsOpen(false);
  };

  const switchToEnglish = () => {
    setLanguage('EN');
    setIsOpen(false);
  };

  return (
    <div className="relative language-switcher">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
          isScrolled
            ? 'hover:bg-gray-100 text-gray-700'
            : 'hover:bg-white/10 text-white'
        }`}
      >
        <span className="text-sm font-medium">
          {language === 'TH' ? 'TH' : 'EN'}
        </span>
        <svg
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-lg border z-50">
          <button
            onClick={switchToThai}
            className={`w-full flex items-center gap-2 px-3 py-2.5 text-left hover:bg-gray-50 rounded-t-lg text-sm ${
              language === 'TH' ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700'
            }`}
          >
            <span>TH ไทย</span>
          </button>
          <button
            onClick={switchToEnglish}
            className={`w-full flex items-center gap-2 px-3 py-2.5 text-left hover:bg-gray-50 rounded-b-lg text-sm ${
              language === 'EN' ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700'
            }`}
          >
            <span>EN English</span>
          </button>
        </div>
      )}
    </div>
  );
}
