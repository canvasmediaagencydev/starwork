import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import FaviconLinks from "./components/FaviconLinks";
import GoogleTranslateProvider from "./components/GoogleTranslateProvider";

const notoSansThai = Noto_Sans_Thai({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://starworkchiangmai.com";

export const metadata: Metadata = {
  title: {
    default: "StarWork Chiang Mai | Service Offices & Coworking Space",
    template: "%s | StarWork Chiang Mai",
  },
  description: "สำนักงานส่วนตัว ห้องประชุม และพื้นที่ทำงานร่วมสมัยใหม่ใจกลางเชียงใหม่ ใกล้นิมมาน MAYA และ Think Park พร้อมบริการครบครัน Virtual Office, Serviced Office, Meeting Room และ Event Space",
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
    description: "สำนักงานส่วนตัว ห้องประชุม และพื้นที่ทำงานร่วมสมัยใหม่ใจกลางเชียงใหม่ ใกล้นิมมาน MAYA และ Think Park",
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
  verification: {
    google: "your-google-verification-code",
  },
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
  alternates: {
    canonical: siteUrl,
    languages: {
      "th-TH": siteUrl,
      "en-US": `${siteUrl}/en`,
      "x-default": siteUrl,
    },
  },
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
        <StructuredData />
      </head>
      <body
        className={`${notoSansThai.variable} antialiased`}
      >
        {/* Google Translate Provider */}
        <GoogleTranslateProvider />
        {children}
      </body>
    </html>
  );
}
