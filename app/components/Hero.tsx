'use client';

import { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.play().catch((error) => {
        console.log('Video play failed:', error);
      });
    };

    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Try to play immediately if already loaded
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

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
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        </div>

        {/* Video - Only if no error */}
        {!hasError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover z-1 transition-opacity duration-2000 ease-out ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source
              src="https://starworkchiangmai.com/wp-content/uploads/NewFolder/Starwork%20Service%20Office%20_Floor%203%20(New%20Zone).mp4"
              type="video/mp4"
            />
          </video>
        )}

        {/* Dark Overlay - Above video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80 z-2" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Small text */}
          <div className="flex items-center gap-3 mb-10 opacity-90">
            <HiLocationMarker className="text-white/70 text-lg" />
            <span className="text-white/70 text-md tracking-[0.3em] font-light uppercase">
              Chiang Mai
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Your Space
            <br />
            <span className="font-light italic">Your Success</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/85 mb-12 font-light leading-relaxed max-w-2xl">
            พื้นที่ทำงานที่ออกแบบมาเพื่อธุรกิจของคุณ
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#plans"
              className="group inline-flex items-center justify-center gap-4 bg-white/70 backdrop-blur-md text-gray-900 px-10 py-5 rounded-full text-lg font-medium hover:bg-white hover:gap-6 hover:shadow-2xl hover:shadow-green-500/20 border border-white/40 transition-all duration-500 ease-out"
            >
              <span>เริ่มต้นใช้งานวันนี้</span>
              <FaArrowRight className="transition-transform duration-500 group-hover:translate-x-1 text-green-600" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-lg font-light border border-white/30 hover:bg-white/15 hover:border-white/50 transition-all duration-500 ease-out"
            >
              <span>ติดต่อเรา</span>
            </a>
          </div>

          {/* Small info */}
          <div className="mt-15 flex flex-wrap gap-8 text-white/70 text-md font-light">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>ห้องประชุมพร้อมใช้งาน</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>เข้าถึงได้ 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>WiFi ความเร็วสูง</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce hover:scale-110 transition-transform cursor-pointer"
        aria-label="Scroll to content"
      >
        <FaChevronDown className="text-white/40 hover:text-white/60 text-2xl transition-colors" />
      </button>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent z-10" />
    </section>
  );
}
