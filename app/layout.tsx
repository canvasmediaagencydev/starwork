import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import FaviconLinks from "./components/FaviconLinks";
import JsonLd from "./components/JsonLd";
import { getOrganizationSchema, getWebSiteSchema, SITE_URL } from "@/lib/schema";
import { LanguageProvider } from "./context/LanguageContext";

const notoSansThai = Noto_Sans_Thai({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: 'swap',
});

// Canonical base URL — standardised on the www host (see lib/schema.ts SITE_URL).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "StarWork Chiang Mai | Service Offices & Coworking Space",
    template: "%s | StarWork Chiang Mai",
  },
  description: "ออฟฟิศให้เช่า เชียงใหม่ StarWork — Serviced Office & Coworking ย่านวัดเกต ใกล้ Central Festival, Star Avenue, ขนส่งอาเขต, สนามบิน CNX เริ่มต้น 6,900 บาท/เดือน",
  keywords: [
    "StarWork Chiang Mai",
    "coworking space เชียงใหม่",
    "serviced office เชียงใหม่",
    "virtual office เชียงใหม่",
    "ห้องประชุม เชียงใหม่",
    "meeting room เชียงใหม่",
    "พื้นที่ทำงานร่วม เชียงใหม่",
    "สำนักงานให้เช่า เชียงใหม่",
    "ออฟฟิศเสมือน",
    "ที่อยู่จดทะเบียน เชียงใหม่",
  ],
  authors: [{ name: "StarWork Chiang Mai" }],
  creator: "StarWork Chiang Mai",
  publisher: "StarWork Chiang Mai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "StarWork Chiang Mai",
    title: "StarWork Chiang Mai | Service Offices & Coworking Space",
    description: "ออฟฟิศให้เช่า เชียงใหม่ StarWork — Serviced Office, Coworking และ Virtual Office ย่านวัดเกต ใกล้ Central Festival, Star Avenue และขนส่งอาเขต 10 นาทีจากสนามบิน CNX",
    // TODO(client): og:image ยังเป็นไฟล์ screenshot ("/Screenshot from 2025-11-19 21-53-12.png")
    // ขอรูป OG ที่ออกแบบจริง (1200x630) เพื่อแทนที่ — ยังไม่เปลี่ยนไฟล์ตามที่ระบุ
    images: [
      {
        url: "/Screenshot from 2025-11-19 21-53-12.png",
        width: 1200,
        height: 630,
        alt: "StarWork Chiang Mai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StarWork Chiang Mai | Service Offices & Coworking Space",
    description: "สำนักงานส่วนตัว ห้องประชุม และพื้นที่ทำงานร่วมสมัยใหม่ใจกลางเชียงใหม่",
    // TODO(client): แทนที่ screenshot ด้วยรูป OG จริง (เหมือน openGraph.images ด้านบน)
    images: ["/Screenshot from 2025-11-19 21-53-12.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // NOTE: Google Search Console verification removed — it was a placeholder
  // ("your-google-verification-code"). TODO(client): provide the real
  // verification token to re-add `verification: { google: "..." }`.
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '70x78', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  // Canonical is set PER-PAGE (see each page's metadata) rather than globally,
  // because a layout-level canonical is inherited by every route and would make
  // all pages canonicalize to the homepage. The previous `languages` hreflang
  // also pointed to a non-existent "/en" route, so it was removed.
  // TODO(client): if a real English ("/en") site is added, restore hreflang.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <FaviconLinks />
        {/* Site-wide structured data (present on every page) */}
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
      </head>
      <body
        className={`${notoSansThai.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
