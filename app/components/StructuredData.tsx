export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'StarWork Chiang Mai',
    description: 'สำนักงานส่วนตัว ห้องประชุม และพื้นที่ทำงานร่วมสมัยใหม่ใจกลางเชียงใหม่',
    url: 'https://starworkchiangmai.com',
    telephone: '0X-XXXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ใกล้นิมมาน MAYA และ Think Park',
      addressLocality: 'เชียงใหม่',
      addressRegion: 'เชียงใหม่',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.8021,
      longitude: 98.9676,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '฿฿',
    image: 'https://starworkchiangmai.com/Screenshot from 2025-11-19 21-53-12.png',
    logo: 'https://starworkchiangmai.com/Screenshot from 2025-11-19 21-53-12.png',
    sameAs: [
      'https://www.facebook.com/starworkchiangmai',
      'https://www.instagram.com/starworkchiangmai',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Office Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Serviced Office',
            description: 'ห้องออฟฟิศส่วนตัวพร้อมเฟอร์นิเจอร์ครบครัน',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Virtual Office',
            description: 'ที่อยู่จดทะเบียนบริษัทในทำเลดี',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Co-Working Space',
            description: 'พื้นที่ทำงานแบบเปิดที่ยืดหยุ่น',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Meeting Room',
            description: 'ห้องประชุมพร้อมอุปกรณ์ครบครัน',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Event Space',
            description: 'พื้นที่จัดงาน Seminar และ Workshop',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '100',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
