"use client";

import { useState, useEffect } from "react";

type Language = "TH" | "EN";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export default function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const [language, setLanguage] = useState<Language>("TH");
  const [isOpen, setIsOpen] = useState(false);

  // Detect current language from cookie
  const detectLanguage = (): Language => {
    if (typeof window === "undefined") return "TH";

    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [key, val] = cookie.trim().split("=");
      if (key === "googtrans") {
        if (val?.includes("/en") || decodeURIComponent(val || "").includes("/en")) {
          return "EN";
        }
      }
    }

    // Fallback: check HTML class
    const htmlClass = document.documentElement.className || "";
    if (htmlClass.includes("translated-ltr")) return "EN";

    return "TH";
  };

  useEffect(() => {
    setLanguage(detectLanguage());

    // Monitor for changes
    const interval = setInterval(() => {
      const detected = detectLanguage();
      setLanguage((prev) => (prev !== detected ? detected : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Delete cookie
  const deleteCookie = (name: string) => {
    const domains = [
      "",
      window.location.hostname,
      "." + window.location.hostname,
    ];
    const paths = ["/", ""];

    domains.forEach((domain) => {
      paths.forEach((path) => {
        let cookieStr = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        if (path) cookieStr += `; path=${path}`;
        if (domain) cookieStr += `; domain=${domain}`;
        document.cookie = cookieStr;
      });
    });
  };

  // Set cookie
  const setCookie = (name: string, value: string, days: number = 1) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    const hostname = window.location.hostname;

    // Set for current domain
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;

    // Set for root domain (production)
    if (hostname !== "localhost") {
      const rootDomain = hostname.split(".").slice(-2).join(".");
      document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=.${rootDomain}`;
    }
  };

  // Switch to Thai
  const switchToThai = () => {
    deleteCookie("googtrans");
    setLanguage("TH");
    setIsOpen(false);

    // Reload to reset Google Translate
    setTimeout(() => {
      window.location.href = window.location.pathname + "?lang=th&t=" + Date.now();
    }, 100);
  };

  // Switch to English
  const switchToEnglish = () => {
    setCookie("googtrans", "/th/en", 1);
    setLanguage("EN");
    setIsOpen(false);

    setTimeout(() => {
      window.location.href = window.location.pathname + "?lang=en&t=" + Date.now();
    }, 100);
  };

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
        <span suppressHydrationWarning className="text-sm">
          {language === "TH" ? "TH" : "EN"}
        </span>
        <svg
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
              language === "TH" ? "bg-orange-50 text-orange-600 font-medium" : "text-gray-700"
            }`}
          >
            <span suppressHydrationWarning>TH ไทย</span>
          </button>
          <button
            onClick={switchToEnglish}
            className={`w-full flex items-center gap-2 px-3 py-2.5 text-left hover:bg-gray-50 rounded-b-lg text-sm ${
              language === "EN" ? "bg-orange-50 text-orange-600 font-medium" : "text-gray-700"
            }`}
          >
            <span suppressHydrationWarning>EN English</span>
          </button>
        </div>
      )}
    </div>
  );
}
