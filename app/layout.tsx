import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "StarWork Chiang Mai | Service Offices & Coworking Space",
  description: "สำนักงานส่วนตัว ห้องประชุม และพื้นที่ทำงานร่วมสมัยใหม่ใจกลางเชียงใหม่ ใกล้นิมมาน MAYA และ Think Park",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
