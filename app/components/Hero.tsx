'use client';

import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const heroVideoId = 'spBoyqXiPDg';
  const heroVideoUrl = `https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroVideoId}&modestbranding=1&playsinline=1&rel=0&showinfo=0&enablejsapi=1`;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const iframeWindow = iframeRef.current?.contentWindow;
      if (!iframeWindow || event.source !== iframeWindow) return;
      if (typeof event.data !== 'string') return;

      try {
        const data = JSON.parse(event.data);
        if (data.event === 'onReady') {
          setPlayerReady(true);
        }
        if (data.event === 'infoDelivery' && data.info?.playerState === 1) {
          setIsVideoLoaded(true);
        }
        if (data.event === 'onError') {
          setHasError(true);
        }
      } catch (error) {
        console.error('Failed to parse YouTube message', error);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    if (!playerReady) return;

    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) return;

    const postCommand = (command: string) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
    };

    postCommand('mute');
    postCommand('playVideo');
  }, [playerReady]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0">
          <div className="absolute inset-0 opacity-20 bg-[url('/images/unsplash/hero-office.jpg')] bg-cover bg-center" />
        </div>

        {/* Video - Only if no error */}
        {!hasError && isDesktop && (
          <iframe
            ref={iframeRef}
            src={heroVideoUrl}
            title="Starwork Hero Background"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
            frameBorder="0"
            aria-hidden="true"
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] z-1 transition-opacity duration-2000 ease-out pointer-events-none ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsVideoLoaded(true)}
            onError={() => setHasError(true)}
          />
        )}

        {/* Dark Overlay - Above video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80 z-2" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <HiLocationMarker className="text-green-400 text-lg" />
            <span className="text-green-400 text-xs sm:text-sm tracking-[0.35em] font-semibold uppercase">
              Chiang Mai&apos;s Premium Serviced Office
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
          >
            Your Space
            <br />
            <span className="font-light italic">Your Success</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl lg:text-2xl text-white/85 mb-12 font-light leading-relaxed max-w-2xl"
          >
            {t(
              'พื้นที่ทำงานระดับพรีเมียมที่ออกแบบมาเพื่อทีมที่กำลังเติบโต — พร้อมใช้งานทันที ไม่มีค่าใช้จ่ายแอบแฝง',
              'Premium workspace designed for growing teams — ready to use instantly, with no hidden costs'
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#plans"
              className="group inline-flex items-center justify-center gap-4 bg-green-600 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-green-700 hover:gap-6 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 ease-out"
            >
              <span>{t('เริ่มต้นใช้งานวันนี้', 'Get Started Today')}</span>
              <FaArrowRight className="transition-transform duration-500 group-hover:translate-x-1 text-white" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-lg font-light border border-white/30 hover:bg-white/15 hover:border-white/50 transition-all duration-500 ease-out"
            >
              <span>{t('จองทัวร์ชม', 'Book a Tour')}</span>
            </a>
          </motion.div>

          {/* Social Proof Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-14 flex flex-wrap items-center gap-8 sm:gap-12"
          >
            <div className="flex flex-col">
              <span className="text-3xl lg:text-4xl font-bold text-white leading-none">100+</span>
              <span className="mt-2 text-sm text-white/70 font-light">{t('ธุรกิจที่ไว้วางใจ', 'Businesses trust us')}</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl lg:text-4xl font-bold text-white leading-none">24/7</span>
              <span className="mt-2 text-sm text-white/70 font-light">{t('เข้าถึงได้ตลอด', 'Always accessible')}</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl lg:text-4xl font-bold text-white leading-none">11 Year+</span>
              <span className="mt-2 text-sm text-white/70 font-light">{t('ประสบการณ์', 'Experience')}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce hover:scale-110 transition-transform cursor-pointer"
        aria-label="Scroll to content"
      >
        <FaChevronDown className="text-white/40 hover:text-white/60 text-2xl transition-colors" />
      </motion.button>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent z-10" />
    </section>
  );
}
