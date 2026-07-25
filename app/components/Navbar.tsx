'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to hash after navigation
  useEffect(() => {
    // Check for hash in URL after navigation
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Scroll to top first to show we're on home page
          window.scrollTo({ top: 0, behavior: 'instant' });
          // Then smooth scroll to section
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      }
    };

    // Run on pathname change
    handleHashScroll();
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);

    // Check if it's a hash link
    if (href.includes('#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');

      // If we're on the home page already
      if (pathname === '/' && (path === '/' || path === '')) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to home page first, then scroll
        router.push(`/#${hash}`);
      }
    }
  };

  const navLinks = [
    { th: 'หน้าแรก', en: 'Home', href: '/' },
    { th: 'บริการ', en: 'Services', href: '/services' },
    { th: 'คาเฟ่อเมซอน', en: 'Café Amazon', href: '/cafe' },
    { th: 'บทความ', en: 'Blog', href: '/blog' },
    { th: 'แพ็คเกจ', en: 'Pricing', href: '/#plans' },
    { th: 'แกลเลอรี่', en: 'Gallery', href: '/#gallery' },
    { th: 'ติดต่อเรา', en: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-50">
            <div className="relative h-12 w-40">
              <Image
                src="/images/starwork-logo-4.png"
                alt="StarWork Chiang Mai"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-all duration-300 relative group notranslate ${
                  isScrolled || isMobileMenuOpen
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white hover:text-white'
                }`}
              >
                {language === 'EN' ? link.en : link.th}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher isScrolled={isScrolled || isMobileMenuOpen} />
            <Link
              href="tel:0634414239"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <span className="notranslate">063-441-4239</span>
            </Link>
            <Link
              href="https://line.me/ti/p/@starwork"
              target="_blank"
              className={`px-6 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 notranslate ${
                isScrolled || isMobileMenuOpen
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              {language === 'EN' ? 'Book a Tour' : 'จองเข้าชม'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen
                ? 'text-gray-900'
                : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors notranslate"
            >
              {language === 'EN' ? link.en : link.th}
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            <div className="px-4 py-2">
              <LanguageSwitcher isScrolled={true} />
            </div>
            <Link
              href="tel:0634414239"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors notranslate"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === 'EN' ? 'Call: ' : 'โทร: '}<span>063-441-4239</span>
            </Link>
            <Link
              href="https://line.me/ti/p/@starwork"
              target="_blank"
              className="block px-4 py-3 bg-gray-900 text-white text-center rounded-md font-semibold hover:bg-gray-800 transition-colors notranslate"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === 'EN' ? 'Book a Tour' : 'จองเข้าชม'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
