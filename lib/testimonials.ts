// lib/testimonials.ts
// Single source of truth for real customer reviews (Google Reviews, all 5 stars).
// Used by both the homepage (HomeTestimonials) and the services page (Testimonials)
// so the two never drift. Text is verbatim from the customers' Google reviews;
// the English is a faithful display translation of the Thai original.

export type CustomerReview = {
  /** Avatar initial (Google profile photos can't be embedded cross-origin). */
  letter: string;
  /** Reviewer's Google display name (same in both languages). */
  name: string;
  textTh: string;
  textEn: string;
};

export const customerReviews: CustomerReview[] = [
  {
    letter: 'P',
    name: 'Pv Nirut',
    textTh:
      'ประทับใจ StarWork Serviced Office มากค่ะ บรรยากาศที่นี่ดีมาก ตั้งแต่เดินเข้ามารู้สึกโปร่ง โล่ง สะอาด และดูเป็นมืออาชีพ เหมาะทั้งสำหรับคนที่มองหาออฟฟิศส่วนตัวหรือพื้นที่ทำงานเงียบ ๆ อินเทอร์เน็ตเร็ว ทำงานได้ลื่นไม่มีสะดุดเลยค่ะ ชอบตรงที่มีสิ่งอำนวยความสะดวกครบมาก ทั้งห้องประชุม พื้นที่ส่วนกลาง ที่จอดรถ รวมถึงมุมพักผ่อนต่าง ๆ ทีมงานก็น่ารัก บริการดี คอยช่วยเหลือตลอด ใครกำลังมองหา serviced office หรือ coworking space ในเชียงใหม่ แนะนำที่นี่เลยค่ะ คุ้มค่าทั้งบรรยากาศและบริการจริง ๆ',
    textEn:
      'I’m really impressed with StarWork Serviced Office. The atmosphere is wonderful — from the moment you walk in it feels open, airy, clean and professional. Great for a private office or a quiet workspace, and the internet is fast so work flows without a hitch. I love how complete the facilities are: meeting rooms, common areas, parking, and relaxation corners. The team is lovely, service is great, always ready to help. If you’re looking for a serviced office or coworking space in Chiang Mai, I highly recommend this place — truly worth it for both the atmosphere and the service.',
  },
  {
    letter: 'ไ',
    name: 'ไอรดา การหมั่น',
    textTh:
      'ประทับใจมากกับ StarWork Chiangmai ออฟฟิศสะอาด ทันสมัย พร้อมเฟอร์นิเจอร์และอินเทอร์เน็ตความเร็วสูง สามารถเริ่มทำงานได้ทันที บรรยากาศเงียบ สงบ มีพื้นที่สีเขียวและมุมนั่งทำงานที่ช่วยให้มีสมาธิ พนักงานให้บริการดี เป็นกันเอง และคอยช่วยเหลือตลอด มีห้องประชุมและสิ่งอำนวยความสะดวกครบ เหมาะสำหรับฟรีแลนซ์ สตาร์ทอัพ และบริษัทที่กำลังมองหาออฟฟิศพร้อมใช้งาน แนะนำสำหรับคนที่ต้องการพื้นที่ทำงานคุณภาพในเชียงใหม่ค่ะ',
    textEn:
      'Very impressed with StarWork Chiangmai. The office is clean and modern, fully furnished with high-speed internet, so you can start working right away. The atmosphere is quiet and calm, with green space and work nooks that help you concentrate. Staff are helpful and friendly, always ready to assist, and there are meeting rooms and complete facilities — perfect for freelancers, startups, and companies looking for a ready-to-use office. Recommended for anyone who wants a quality workspace in Chiang Mai.',
  },
  {
    letter: 'น',
    name: 'นานช่อง',
    textTh:
      'ลองมาใช้บริการที่ StarWork Chiangmai ครั้งแรกแล้วรู้สึกเกินคาดมากค่ะ บรรยากาศดี เงียบ ทำให้ประชุมและทำงานได้อย่างเต็มที่ พนักงานตอนรับดีมากค่ะ ชอบสุดๆ อยากให้คนที่หาสถานที่ทำงานต้องมาลองที่นี่เลยค่ะ',
    textEn:
      'I tried StarWork Chiangmai for the first time and it exceeded my expectations. The atmosphere is great and quiet, letting me meet and work to the fullest. The staff welcome you so warmly — I loved it. I’d want anyone looking for a place to work to come try this place.',
  },
];
