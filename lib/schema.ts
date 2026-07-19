// lib/schema.ts
// Central source of truth for all JSON-LD (schema.org) structured data.
//
// IMPORTANT: Every value below is pulled from real data already present in the
// codebase (Contact.tsx, Location.tsx, Pricing.tsx, Footer.tsx, layout.tsx,
// content/blog/*.md). Fields we could NOT verify from the code are intentionally
// omitted and marked with `TODO(client)` so we never ship guessed business data.

// ---------------------------------------------------------------------------
// Minimal recursive JSON-LD types (no `any`)
// ---------------------------------------------------------------------------
export type JsonLdValue =
  | string
  | number
  | boolean
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

export interface JsonLdNode {
  '@context'?: string;
  '@type': string | string[];
  [key: string]: JsonLdValue | undefined;
}

// ---------------------------------------------------------------------------
// Canonical base URL — www everywhere (see app/layout.tsx metadataBase)
// ---------------------------------------------------------------------------
export const SITE_URL = 'https://www.starworkchiangmai.com';

/** Turn a project-relative path into an absolute canonical URL. */
export function absoluteUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

// ---------------------------------------------------------------------------
// Verified business constants (single source)
// ---------------------------------------------------------------------------
const BUSINESS_NAME = 'StarWork Chiang Mai';
const BUSINESS_ALT_NAME_TH = 'สตาร์เวิร์ค เชียงใหม่'; // from app/cafe/page.tsx copy
const BUSINESS_DESCRIPTION =
  'สำนักงานส่วนตัว ห้องประชุม และพื้นที่ทำงานร่วมสมัยใหม่ใจกลางเชียงใหม่ พร้อมบริการครบครัน Virtual Office, Serviced Office, Meeting Room และ Event Space';

// Phone from Contact.tsx / Pricing.tsx (tel:0634414239) → E.164
const BUSINESS_PHONE = '+66634414239';
// Email from Contact.tsx / ServiceFAQ.tsx
const BUSINESS_EMAIL = 'sale@starworkchiangmai.com';

// Address from Contact.tsx + Location.tsx (map card)
const ADDRESS = {
  streetAddress: '87/9 Tunghotel Rd, Wat Ket',
  addressLocality: 'Mueang Chiang Mai',
  addressRegion: 'Chiang Mai',
  postalCode: '50000',
  addressCountry: 'TH',
};

// Geo — CONFIRMED by client (2026-07). Matches the StarWork destination marker
// embedded in the Google Maps iframe in Location.tsx.
const GEO = { latitude: 18.7963759, longitude: 99.0164451 };

// Google Maps place link from Location.tsx
const MAP_URL = 'https://maps.app.goo.gl/KTyJigsxDtwbLJ889';

// Logo: no dedicated logo asset is referenced in code; the PWA icon is the
// closest real brand mark. TODO(client): confirm the official logo file.
const LOGO_URL = absoluteUrl('/icon-512.png');

// Business photos actually used on the site (Pricing.tsx / services page).
const IMAGE_URLS = [
  absoluteUrl('/images/img_4.webp'), // serviced office
  absoluteUrl('/images/img_1.webp'), // co-working
  absoluteUrl('/images/img_2.webp'), // meeting room
];

// Confirmed official social profiles (client-provided, 2026-07).
// TODO(client): LINE account not yet confirmed (@starwork vs @starworkthailand)
// and no Google Business Profile URL yet — add to sameAs once verified.
const SAME_AS = [
  'https://www.facebook.com/StarWorkChiangMai',
  'https://www.instagram.com/starwork.cnx',
  'https://x.com/starworkcnx',
];

// Opening hours from Contact.tsx ("เปิดทุกวัน 09:00 - 18:00") and Pricing.tsx.
// Note: serviced-office members have 24/7 access, but these are the hours staff
// are on-site, which is what OpeningHoursSpecification should reflect.
const OPENING_HOURS = {
  days: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  opens: '09:00',
  closes: '18:00',
};

const SCHEMA_CONTEXT = 'https://schema.org';

// ---------------------------------------------------------------------------
// 1) LocalBusiness
// ---------------------------------------------------------------------------
// @type choice: a serviced-office / workspace-leasing provider is best modelled
// as ["LocalBusiness", "RealEstateAgent"] — LocalBusiness supplies the geo /
// hours / contact fields, while RealEstateAgent is the type Google most commonly
// recognises for office-space rental & leasing businesses.
export function getLocalBusinessSchema(): JsonLdNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    alternateName: BUSINESS_ALT_NAME_TH,
    description: BUSINESS_DESCRIPTION,
    url: SITE_URL,
    logo: LOGO_URL,
    image: IMAGE_URLS,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    hasMap: MAP_URL,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: OPENING_HOURS.days,
        opens: OPENING_HOURS.opens,
        closes: OPENING_HOURS.closes,
      },
    ],
    priceRange: '฿฿',
    currenciesAccepted: 'THB',
    areaServed: {
      '@type': 'City',
      name: 'Chiang Mai',
    },
    sameAs: SAME_AS,
  };
}

// ---------------------------------------------------------------------------
// 2) Organization + WebSite
// ---------------------------------------------------------------------------
export function getOrganizationSchema(): JsonLdNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    alternateName: BUSINESS_ALT_NAME_TH,
    url: SITE_URL,
    logo: LOGO_URL,
    description: BUSINESS_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
      contactType: 'customer service',
      areaServed: 'TH',
      availableLanguage: ['th', 'en'],
    },
    sameAs: SAME_AS,
  };
}

export function getWebSiteSchema(): JsonLdNode {
  // No on-site search feature exists, so SearchAction is intentionally omitted.
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    inLanguage: 'th-TH',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

// ---------------------------------------------------------------------------
// 3) Service
// ---------------------------------------------------------------------------
export type ServiceInput = {
  name: string;
  description: string;
  /** Anchor/path on the site for this service, e.g. "/services#serviced-office" */
  url?: string;
  /** Real starting price. Omit entirely when the price is unknown in the code. */
  price?: number;
  /** Billing unit for the price, e.g. "MON" | "DAY" | "HUR" (UN/CEFACT). */
  unitCode?: string;
  unitText?: string;
};

export function getServiceSchema(service: ServiceInput): JsonLdNode {
  const node: JsonLdNode = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: { '@id': `${SITE_URL}/#localbusiness` },
    areaServed: {
      '@type': 'City',
      name: 'Chiang Mai',
    },
  };

  if (service.url) node.serviceType = service.name;

  // Only attach an Offer when we have a real price — never invent one.
  if (typeof service.price === 'number') {
    node.offers = {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'THB',
      availability: 'https://schema.org/InStock',
      ...(service.url ? { url: absoluteUrl(service.url) } : {}),
      ...(service.unitCode
        ? {
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: service.price,
              priceCurrency: 'THB',
              unitCode: service.unitCode,
              ...(service.unitText ? { unitText: service.unitText } : {}),
            },
          }
        : {}),
    };
  }

  return node;
}

// Core services with prices verified from Pricing.tsx / app/services/page.tsx.
// Virtual Office pricing is intentionally NOT disclosed (confirmed by client),
// so it carries no Offer/price — only name/description/provider/areaServed.
export const CORE_SERVICES: ServiceInput[] = [
  {
    name: 'Serviced Office',
    description:
      'ห้องออฟฟิศส่วนตัวพร้อมเฟอร์นิเจอร์ครบครัน เหมาะสำหรับธุรกิจที่ต้องการความเป็นส่วนตัวและความเป็นมืออาชีพ',
    url: '/services#serviced-office',
    price: 6900,
    unitCode: 'MON',
    unitText: 'month',
  },
  {
    name: 'Co-Working Space',
    description:
      'พื้นที่ทำงานแบบเปิดที่ยืดหยุ่น เหมาะสำหรับ Freelancer, Startup และผู้ที่ต้องการทำงานในบรรยากาศที่สร้างสรรค์',
    url: '/services#coworking',
    price: 300,
    unitCode: 'DAY',
    unitText: 'day',
  },
  {
    name: 'Virtual Office',
    description: 'ที่อยู่ธุรกิจในทำเลดีโดยไม่ต้องเช่าพื้นที่จริง เหมาะสำหรับธุรกิจที่ต้องการที่อยู่จดทะเบียน',
    url: '/services#virtual-office',
    // price intentionally omitted — Virtual Office pricing is not disclosed.
  },
];

export function getCoreServicesSchema(): JsonLdNode[] {
  return CORE_SERVICES.map(getServiceSchema);
}

// ---------------------------------------------------------------------------
// 4) FAQPage
// ---------------------------------------------------------------------------
export type FaqInput = { question: string; answer: string };

export function getFAQPageSchema(faqs: FaqInput[]): JsonLdNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// 5) Article (BlogPosting)
// ---------------------------------------------------------------------------
export type ArticleInput = {
  slug: string;
  title: string;
  date: string; // "YYYY-MM-DD"
  updated?: string; // optional "YYYY-MM-DD" from frontmatter `updated`
  excerpt: string;
  coverImage: string;
  author: string;
};

export function getArticleSchema(post: ArticleInput): JsonLdNode {
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const node: JsonLdNode = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    // Use the frontmatter `updated` date when present; otherwise fall back to
    // the publish date so dateModified is never empty.
    dateModified: post.updated || post.date,
    author: {
      '@type': 'Organization',
      name: post.author || 'Star Work Team',
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    url: pageUrl,
  };

  if (post.coverImage) node.image = absoluteUrl(post.coverImage);

  return node;
}

// ---------------------------------------------------------------------------
// 6) BreadcrumbList
// ---------------------------------------------------------------------------
export type BreadcrumbItem = { name: string; url: string };

export function getBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}
