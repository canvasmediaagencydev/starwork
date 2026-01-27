# ระบบแปลภาษา (i18n) สำหรับ Next.js

คู่มือการติดตั้งระบบแปลภาษาแบบ Hybrid ที่ใช้ Google Translate + Custom Labels

---

## สารบัญ

1. [ภาพรวม](#1-ภาพรวม)
2. [โครงสร้างไฟล์](#2-โครงสร้างไฟล์)
3. [Google Translate Provider](#3-google-translate-provider)
4. [Thai Labels System](#4-thai-labels-system)
5. [Language Switcher](#5-language-switcher)
6. [การตั้งค่า Layout](#6-การตั้งค่า-layout)
7. [การตั้งค่า CSP Headers](#7-การตั้งค่า-csp-headers)
8. [วิธีใช้งาน](#8-วิธีใช้งาน)
9. [Tips & Tricks](#9-tips--tricks)

---

## 1. ภาพรวม

ระบบนี้ใช้ 2 วิธีผสมกัน:

| วิธี | ใช้กับ | ข้อดี |
|------|--------|-------|
| **Google Translate Widget** | เนื้อหาทั่วไป (หน้าเว็บ) | แปลอัตโนมัติ ไม่ต้องแปลเอง |
| **THAI_LABELS Object** | Admin UI, UI คงที่ | ควบคุมได้ 100%, Type-safe |

**ภาษาที่รองรับ:** ไทย (th) และ อังกฤษ (en)

---

## 2. โครงสร้างไฟล์

```
your-project/
├── lib/
│   └── thai-labels.ts              # Labels ภาษาไทย (Type-safe)
├── app/
│   ├── components/
│   │   ├── GoogleTranslateProvider.tsx  # Google Translate setup
│   │   └── Navbar.tsx                   # Language Switcher
│   └── layout.tsx                  # Root layout
└── next.config.ts                  # CSP headers สำหรับ Google Translate
```

---

## 3. Google Translate Provider

สร้างไฟล์ `app/components/GoogleTranslateProvider.tsx`:

```tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            layout?: unknown;
            autoDisplay?: boolean;
          },
          elementId: string
        ) => unknown;
        InlineLayout?: { SIMPLE: unknown };
      };
    };
  }
}

export default function GoogleTranslateProvider() {
  useEffect(() => {
    // ป้องกัน React hydration error จาก Google Translate DOM mutations
    if (typeof Node === "function" && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function <T extends Node>(child: T): T {
        if (child.parentNode !== this) {
          if (console) {
            console.warn(
              "Cannot remove a child from a different parent",
              child,
              this
            );
          }
          return child;
        }
        return originalRemoveChild.apply(this, [child]) as T;
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function <T extends Node>(
        newNode: T,
        referenceNode: Node | null
      ): T {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.warn(
              "Cannot insert before a reference node from a different parent",
              referenceNode,
              this
            );
          }
          return newNode;
        }
        return originalInsertBefore.apply(this, [newNode, referenceNode]) as T;
      };
    }

    // Initialize Google Translate
    window.googleTranslateElementInit = function () {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "th",           // ภาษาเริ่มต้นของเว็บ
            includedLanguages: "en,th",   // ภาษาที่รองรับ (เพิ่มได้ เช่น "en,th,zh,ja")
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Load Google Translate script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll(
        'script[src*="translate.google.com"]'
      );
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return <div id="google_translate_element" className="hidden" />;
}
```

---

## 4. Thai Labels System

สร้างไฟล์ `lib/thai-labels.ts`:

```typescript
/**
 * Thai Labels for UI elements
 * ใช้สำหรับ text คงที่ใน UI เช่น ปุ่ม, labels, messages
 */
export const THAI_LABELS = {
  // ============ Navigation ============
  home: "หน้าแรก",
  dashboard: "แดชบอร์ด",
  settings: "ตั้งค่า",
  profile: "โปรไฟล์",
  logout: "ออกจากระบบ",
  login: "เข้าสู่ระบบ",
  register: "สมัครสมาชิก",

  // ============ Common Actions ============
  save: "บันทึก",
  cancel: "ยกเลิก",
  delete: "ลบ",
  edit: "แก้ไข",
  add: "เพิ่ม",
  create: "สร้าง",
  update: "อัปเดต",
  search: "ค้นหา",
  filter: "กรอง",
  reset: "รีเซ็ต",
  submit: "ส่ง",
  confirm: "ยืนยัน",
  back: "กลับ",
  next: "ถัดไป",
  previous: "ก่อนหน้า",
  close: "ปิด",
  view: "ดู",
  download: "ดาวน์โหลด",
  upload: "อัปโหลด",

  // ============ Form Labels ============
  title: "หัวข้อ",
  name: "ชื่อ",
  description: "รายละเอียด",
  email: "อีเมล",
  password: "รหัสผ่าน",
  confirmPassword: "ยืนยันรหัสผ่าน",
  phone: "เบอร์โทรศัพท์",
  address: "ที่อยู่",
  date: "วันที่",
  time: "เวลา",
  status: "สถานะ",
  type: "ประเภท",
  category: "หมวดหมู่",
  price: "ราคา",
  quantity: "จำนวน",
  total: "รวม",
  image: "รูปภาพ",
  file: "ไฟล์",

  // ============ Table Headers ============
  no: "ลำดับ",
  actions: "จัดการ",
  createdAt: "สร้างเมื่อ",
  updatedAt: "แก้ไขเมื่อ",

  // ============ Status ============
  active: "เปิดใช้งาน",
  inactive: "ปิดใช้งาน",
  pending: "รอดำเนินการ",
  approved: "อนุมัติแล้ว",
  rejected: "ปฏิเสธ",
  completed: "เสร็จสิ้น",
  draft: "ฉบับร่าง",
  published: "เผยแพร่แล้ว",

  // ============ Messages ============
  loading: "กำลังโหลด...",
  saving: "กำลังบันทึก...",
  deleting: "กำลังลบ...",
  noData: "ไม่มีข้อมูล",
  noResults: "ไม่พบผลลัพธ์",
  error: "เกิดข้อผิดพลาด",
  success: "สำเร็จ",

  // ============ Confirmation ============
  confirmDelete: "คุณต้องการลบรายการนี้หรือไม่?",
  confirmCancel: "คุณต้องการยกเลิกหรือไม่? การเปลี่ยนแปลงจะไม่ถูกบันทึก",
  confirmLogout: "คุณต้องการออกจากระบบหรือไม่?",

  // ============ Validation ============
  required: "จำเป็นต้องกรอก",
  invalidEmail: "รูปแบบอีเมลไม่ถูกต้อง",
  invalidPhone: "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง",
  minLength: "ต้องมีอย่างน้อย {min} ตัวอักษร",
  maxLength: "ต้องไม่เกิน {max} ตัวอักษร",
  passwordMismatch: "รหัสผ่านไม่ตรงกัน",

  // ============ Pagination ============
  page: "หน้า",
  of: "จาก",
  showing: "แสดง",
  entries: "รายการ",
  perPage: "ต่อหน้า",
  firstPage: "หน้าแรก",
  lastPage: "หน้าสุดท้าย",

  // ============ Language ============
  language: "ภาษา",
  thai: "ไทย",
  english: "English",

  // ============ เพิ่มเติมตามต้องการ ============
  // yourLabel: "ข้อความ",

} as const;

// Type สำหรับ key ของ THAI_LABELS
export type ThaiLabel = keyof typeof THAI_LABELS;

// Helper function สำหรับดึง label
export function getLabel(key: ThaiLabel): string {
  return THAI_LABELS[key];
}

// Helper function สำหรับ label ที่มี placeholder
export function getLabelWithParams(
  key: ThaiLabel,
  params: Record<string, string | number>
): string {
  let label = THAI_LABELS[key] as string;
  Object.entries(params).forEach(([paramKey, value]) => {
    label = label.replace(`{${paramKey}}`, String(value));
  });
  return label;
}
```

---

## 5. Language Switcher

เพิ่มใน `app/components/Navbar.tsx` หรือสร้าง component แยก:

```tsx
"use client";

import { useState, useEffect } from "react";

type Language = "TH" | "EN";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>("TH");
  const [isOpen, setIsOpen] = useState(false);

  // ตรวจจับภาษาปัจจุบันจาก cookie
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

  // ลบ cookie
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

  // ตั้ง cookie
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

  // เปลี่ยนเป็นไทย
  const switchToThai = () => {
    deleteCookie("googtrans");
    setLanguage("TH");
    setIsOpen(false);

    // Reload เพื่อให้ Google Translate reset
    setTimeout(() => {
      window.location.href = window.location.pathname + "?lang=th&t=" + Date.now();
    }, 100);
  };

  // เปลี่ยนเป็นอังกฤษ
  const switchToEnglish = () => {
    setCookie("googtrans", "/th/en", 1);
    setLanguage("EN");
    setIsOpen(false);

    setTimeout(() => {
      window.location.href = window.location.pathname + "?lang=en&t=" + Date.now();
    }, 100);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span suppressHydrationWarning>
          {language === "TH" ? "🇹🇭" : "🇬🇧"}
        </span>
        <span suppressHydrationWarning className="text-sm font-medium">
          {language}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border z-50">
          <button
            onClick={switchToThai}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 rounded-t-lg ${
              language === "TH" ? "bg-orange-50 text-orange-600 font-medium" : ""
            }`}
          >
            <span>🇹🇭</span>
            <span suppressHydrationWarning>ไทย</span>
          </button>
          <button
            onClick={switchToEnglish}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 rounded-b-lg ${
              language === "EN" ? "bg-orange-50 text-orange-600 font-medium" : ""
            }`}
          >
            <span>🇬🇧</span>
            <span suppressHydrationWarning>English</span>
          </button>
        </div>
      )}
    </div>
  );
}
```

---

## 6. การตั้งค่า Layout

แก้ไขไฟล์ `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import GoogleTranslateProvider from "./components/GoogleTranslateProvider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    siteName: "Your Site Name",
  },
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        {/* Google Translate Provider - ต้องอยู่ก่อน children */}
        <GoogleTranslateProvider />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
```

---

## 7. การตั้งค่า CSP Headers

แก้ไขไฟล์ `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              // Scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://translate.google.com https://translate.googleapis.com https://translate-pa.googleapis.com",

              // Styles
              "style-src 'self' 'unsafe-inline' https://translate.googleapis.com https://www.gstatic.com",

              // Fonts
              "font-src 'self' https://fonts.gstatic.com",

              // Images
              "img-src 'self' data: blob: https: http:",

              // Frames
              "frame-src 'self' https://translate.google.com https://translate.googleapis.com",

              // Connections
              "connect-src 'self' https://translate.googleapis.com https://translate-pa.googleapis.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## 8. วิธีใช้งาน

### 8.1 ใช้ THAI_LABELS ใน Component

```tsx
"use client";

import { THAI_LABELS, getLabelWithParams } from "@/lib/thai-labels";

export default function MyForm() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form>
      {/* Label ปกติ */}
      <label>{THAI_LABELS.email}</label>
      <input type="email" required />

      {/* Label with validation */}
      <p className="text-red-500">
        {getLabelWithParams("minLength", { min: 8 })}
      </p>

      {/* Button with loading state */}
      <button disabled={isLoading}>
        {isLoading ? THAI_LABELS.saving : THAI_LABELS.save}
      </button>

      {/* Cancel button */}
      <button type="button">
        {THAI_LABELS.cancel}
      </button>
    </form>
  );
}
```

### 8.2 ใช้ใน Table

```tsx
import { THAI_LABELS } from "@/lib/thai-labels";

export default function DataTable({ data }) {
  if (data.length === 0) {
    return <p>{THAI_LABELS.noData}</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>{THAI_LABELS.no}</th>
          <th>{THAI_LABELS.name}</th>
          <th>{THAI_LABELS.status}</th>
          <th>{THAI_LABELS.actions}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.active ? THAI_LABELS.active : THAI_LABELS.inactive}</td>
            <td>
              <button>{THAI_LABELS.edit}</button>
              <button>{THAI_LABELS.delete}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### 8.3 ใช้ใน Confirmation Dialog

```tsx
import { THAI_LABELS } from "@/lib/thai-labels";

export default function DeleteConfirmDialog({ onConfirm, onCancel }) {
  return (
    <div className="modal">
      <p>{THAI_LABELS.confirmDelete}</p>
      <div className="flex gap-2">
        <button onClick={onCancel}>{THAI_LABELS.cancel}</button>
        <button onClick={onConfirm}>{THAI_LABELS.confirm}</button>
      </div>
    </div>
  );
}
```

---

## 9. Tips & Tricks

### 9.1 ป้องกัน Hydration Warning

ใช้ `suppressHydrationWarning` กับ elements ที่แสดงค่าจาก client-side:

```tsx
<span suppressHydrationWarning>{language}</span>
```

### 9.2 ซ่อน Google Translate Banner

เพิ่มใน `globals.css`:

```css
/* ซ่อน Google Translate banner */
.goog-te-banner-frame,
.skiptranslate {
  display: none !important;
}

body {
  top: 0 !important;
}

/* ซ่อน Google Translate widget */
#google_translate_element {
  display: none !important;
}
```

### 9.3 เพิ่มภาษาอื่นๆ

แก้ไขใน `GoogleTranslateProvider.tsx`:

```typescript
includedLanguages: "en,th,zh-CN,ja,ko",  // เพิ่มภาษาจีน, ญี่ปุ่น, เกาหลี
```

### 9.4 สร้าง Multi-language Labels (ถ้าต้องการ)

```typescript
// lib/labels.ts
export const LABELS = {
  th: {
    save: "บันทึก",
    cancel: "ยกเลิก",
  },
  en: {
    save: "Save",
    cancel: "Cancel",
  },
} as const;

// Usage with context
import { useLanguage } from "@/contexts/LanguageContext";

function MyComponent() {
  const { lang } = useLanguage();
  return <button>{LABELS[lang].save}</button>;
}
```

### 9.5 Debug Cookie

```typescript
// ดู cookie ทั้งหมด
console.log(document.cookie);

// ดูเฉพาะ googtrans
const googtrans = document.cookie
  .split(";")
  .find((c) => c.trim().startsWith("googtrans="));
console.log("Current language cookie:", googtrans);
```

---

## Checklist การติดตั้ง

- [ ] สร้าง `lib/thai-labels.ts`
- [ ] สร้าง `app/components/GoogleTranslateProvider.tsx`
- [ ] สร้าง/แก้ไข Language Switcher ใน Navbar
- [ ] แก้ไข `app/layout.tsx` เพิ่ม GoogleTranslateProvider
- [ ] แก้ไข `next.config.ts` เพิ่ม CSP headers
- [ ] เพิ่ม CSS ซ่อน Google Translate banner
- [ ] ทดสอบการเปลี่ยนภาษา

---

## License

MIT - ใช้ได้อิสระ
