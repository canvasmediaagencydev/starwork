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

/** A plain JSON-LD object without the required `@type`/`@context` of a top-level node. */
type JsonLdObject = { [key: string]: JsonLdValue };

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
/** A single priced tier — used for services with several capacity/price options. */
export type OfferInput = {
  price: number;
  /** Billing unit, e.g. "MON" | "DAY" | "HUR" (UN/CEFACT). */
  unitCode?: string;
  unitText?: string;
  /** Human label for this tier, e.g. a meeting-room capacity "4 persons". */
  name?: string;
};

export type ServiceInput = {
  name: string;
  description: string;
  /** Anchor/path on the site for this service, e.g. "/services#serviced-office" */
  url?: string;
  /** Real starting price for a single Offer. Omit when the price is unknown. */
  price?: number;
  /** Billing unit for `price`, e.g. "MON" | "DAY" | "HUR" (UN/CEFACT). */
  unitCode?: string;
  unitText?: string;
  /**
   * Multiple real priced tiers (e.g. meeting rooms by capacity). When present,
   * the service carries an AggregateOffer with per-tier Offers. Takes precedence
   * over `price`.
   */
  offers?: OfferInput[];
};

/** Build a UnitPriceSpecification when a billing unit is known, else null. */
function unitPriceSpec(o: {
  price: number;
  unitCode?: string;
  unitText?: string;
}): JsonLdObject | null {
  if (!o.unitCode) return null;
  return {
    '@type': 'UnitPriceSpecification',
    price: o.price,
    priceCurrency: 'THB',
    unitCode: o.unitCode,
    ...(o.unitText ? { unitText: o.unitText } : {}),
  };
}

export function getServiceSchema(service: ServiceInput): JsonLdNode {
  // Absolute URL for this service anchor — used for both `url` and a stable `@id`.
  const absUrl = service.url ? absoluteUrl(service.url) : undefined;

  const node: JsonLdNode = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Service',
    ...(absUrl ? { '@id': absUrl } : {}),
    name: service.name,
    description: service.description,
    provider: { '@id': `${SITE_URL}/#localbusiness` },
    areaServed: {
      '@type': 'City',
      name: 'Chiang Mai',
    },
  };

  // A canonical URL belongs at the Service level (serviceType is a category label,
  // never a substitute for url).
  if (absUrl) {
    node.url = absUrl;
    node.serviceType = service.name;
  }

  if (service.offers && service.offers.length > 0) {
    // Several real priced tiers → AggregateOffer summarising low/high + each Offer.
    const prices = service.offers.map((o) => o.price);
    const aggregate: JsonLdObject = {
      '@type': 'AggregateOffer',
      priceCurrency: 'THB',
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: service.offers.length,
      availability: 'https://schema.org/InStock',
      ...(absUrl ? { url: absUrl } : {}),
      offers: service.offers.map((o): JsonLdObject => {
        const offer: JsonLdObject = {
          '@type': 'Offer',
          price: o.price,
          priceCurrency: 'THB',
          availability: 'https://schema.org/InStock',
          ...(o.name ? { name: o.name } : {}),
          ...(absUrl ? { url: absUrl } : {}),
        };
        const spec = unitPriceSpec(o);
        if (spec) offer.priceSpecification = spec;
        return offer;
      }),
    };
    node.offers = aggregate;
  } else if (typeof service.price === 'number') {
    // Single Offer — only when we have a real price; never invent one.
    const price = service.price;
    const offer: JsonLdObject = {
      '@type': 'Offer',
      price,
      priceCurrency: 'THB',
      availability: 'https://schema.org/InStock',
      ...(absUrl ? { url: absUrl } : {}),
    };
    const spec = unitPriceSpec({
      price,
      unitCode: service.unitCode,
      unitText: service.unitText,
    });
    if (spec) offer.priceSpecification = spec;
    node.offers = offer;
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
  {
    // Meeting Room — four real capacity tiers priced by the hour, verified from
    // the `rooms` array in app/services/page.tsx (200/300/500/800 THB/hr).
    name: 'Meeting Room',
    description: 'ห้องประชุมสำหรับการประชุม อบรม และนำเสนอผลงาน',
    url: '/services#meeting-room',
    offers: [
      { price: 200, unitCode: 'HUR', unitText: 'hour', name: '4 persons' },
      { price: 300, unitCode: 'HUR', unitText: 'hour', name: '8 persons' },
      { price: 500, unitCode: 'HUR', unitText: 'hour', name: '15 persons' },
      { price: 800, unitCode: 'HUR', unitText: 'hour', name: '30 persons' },
    ],
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
  /** Real keyword list from frontmatter (built from the article's keyword map). */
  keywords?: string[];
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
    inLanguage: 'th-TH',
  };

  if (post.coverImage) node.image = absoluteUrl(post.coverImage);

  // Only emit keywords when the frontmatter genuinely provides them.
  if (post.keywords && post.keywords.length > 0) {
    node.keywords = post.keywords.join(', ');
  }

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

// ---------------------------------------------------------------------------
// 7) Café (CafeOrCoffeeShop) — the Café Amazon inside the StarWork building
// ---------------------------------------------------------------------------
// Modelled as a CafeOrCoffeeShop that is `containedInPlace` of the StarWork
// LocalBusiness — a neutral "located within" relationship. We do NOT claim
// StarWork owns the Café Amazon brand; `brand` simply records the franchise.
//
// Café hours are 07:30–19:30 (from app/components/cafe/CafeOrder.tsx), which are
// deliberately DIFFERENT from the LocalBusiness staffed hours (09:00–18:00), so
// those are never reused here. Description text mirrors the /cafe <meta>.
const CAFE_NAME = 'Café Amazon – StarWork Chiang Mai';
const CAFE_DESCRIPTION =
  'คาเฟ่อเมซอน สตาร์เวิร์ค เชียงใหม่ ร้านกาแฟพร้อม Wi-Fi ความเร็วสูง ปลั๊กไฟทุกโต๊ะ บรรยากาศสบาย เหมาะสำหรับทำงานและพักผ่อน';
const CAFE_HOURS = { opens: '07:30', closes: '19:30' };

export function getCafeSchema(): JsonLdNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'CafeOrCoffeeShop',
    '@id': `${SITE_URL}/cafe#cafe`,
    name: CAFE_NAME,
    description: CAFE_DESCRIPTION,
    url: absoluteUrl('/cafe'),
    brand: { '@type': 'Brand', name: 'Café Amazon' },
    servesCuisine: ['Coffee', 'Bakery'],
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: OPENING_HOURS.days, // café shares the "open every day" schedule
        opens: CAFE_HOURS.opens,
        closes: CAFE_HOURS.closes,
      },
    ],
    // Menu items are shown on /cafe (names only, no prices), so we link the menu
    // page rather than enumerate priced MenuItems we cannot verify.
    hasMenu: absoluteUrl('/cafe'),
    // Amenities all shown on the /cafe page (CafeFeatures.tsx).
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Power outlets', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Outdoor seating', value: true },
    ],
    containedInPlace: { '@id': `${SITE_URL}/#localbusiness` },
    // TODO(client): no location-specific café photo is shown on /cafe (hero uses a
    // generic Café Amazon banner) — add a real StarWork café image to set `image`.
  };
}

// ---------------------------------------------------------------------------
// 8) Blog index (CollectionPage + ItemList)
// ---------------------------------------------------------------------------
export type CollectionPostInput = { slug: string; title: string };

export function getBlogCollectionSchema(
  posts: CollectionPostInput[],
  opts: { name: string; description: string; path: string }
): JsonLdNode {
  const pageUrl = absoluteUrl(opts.path);
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'CollectionPage',
    '@id': pageUrl,
    url: pageUrl,
    name: opts.name,
    description: opts.description,
    inLanguage: 'th-TH',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };
}
