# Content Recovery — StarWork Chiang Mai

> บันทึกผลการสืบหาบทความ/หน้าเก่าที่อาจสูญหายจากการย้ายเว็บ WordPress → Next.js
> จัดทำ: 2026-07-19 · สถานะ: **เฟส A เสร็จ → เริ่มเฟส B (FAQ Hub)**

---

## 0. อัปเดตล่าสุด — ผลตรวจเว็บเก่า (ยืนยันแล้ว 2026-07-19)

- ✅ `starworkchiangmai.com` **ยัง live อยู่** — `/en/coworking-space/` เปิดได้ปกติ
- 🔴 `/en/knowledge/` = **404 แล้ว** แต่ Google **ยัง index อยู่** (snapshot เม.ย. 2025)
  - บทความถูกลบจากเว็บ live แล้ว → กู้ได้จาก **Wayback / Google cache เท่านั้น**
  - ⏰ **เร่งด่วน:** 404 ทำให้เสีย link equity ทุกวัน — ควรตั้ง 301 โดยเร็ว

### ข้อมูลใหม่ที่ได้
- ✅ **อีเมลธุรกิจ:** `sale@starworkchiangmai.com` — *(อยู่ใน LocalBusiness schema แล้ว)*
- 🔴 **LINE ไม่ตรงกัน — ต้องยืนยันด่วน:** พบ **`@starworkthailand`** จาก 2 แหล่ง
  (`starwork.is.co.th` + `creativechiangmai`) แต่**โค้ดใช้ `@starwork`**
  → **TODO(client): ยืนยัน LINE ID ที่ถูกต้องโดยด่วน** เพราะปุ่ม CTA
  "จองทัวร์ชมฟรี" / "แอดไลน์" ใน `Contact.tsx` + `Pricing.tsx` อาจลิงก์ผิดอยู่
  (ยังไม่แก้โค้ด รอยืนยัน)
- ✅ **ปิดเคส "MAYA/นิมมาน":** ต้นตอเคลมทำเลผิด = `welcome-to-star-work.md`
  (sample post ที่ถูกลบไปแล้ว) — ไม่หลงเหลือในเว็บใหม่

---

## 1. สรุปสถานการณ์ (ทำไมถึงมีของหาย)

จาก SEO strategy report ที่พบในเครื่อง (`~/Downloads/starwork-complete-report.html`)
พบว่าปัจจุบันมี **2 เว็บรันขนานกัน** และ Google index ทั้งคู่:

| เว็บ | โฮสต์ | สถานะ |
|------|-------|-------|
| **เก่า (WordPress)** | `starworkchiangmai.com` (ไม่มี www) + `/en/` | ยังออนไลน์ Google index อยู่ |
| **ใหม่ (Next.js — repo นี้)** | `www.starworkchiangmai.com` | repo ปัจจุบัน มีแค่ 3 บทความ |

ผลกระทบ: duplicate content, authority กระจาย, canonical สับสน
→ ต้องทำ **301 redirect เว็บเก่า → เว็บใหม่** แบบ 1:1

> ⚠️ "บทความเก่า" ที่หายไป **ไม่ได้อยู่ใน git ของ repo นี้** — มันอยู่บนเว็บ
> WordPress เก่าซึ่งเป็นคนละระบบ (ไม่มี backup ในเครื่องนี้)

---

## 2. สิ่งที่ตรวจแล้ว (หลักฐานในเครื่อง/repo)

| แหล่ง | ผล |
|-------|-----|
| `git log --diff-filter=D -- content/` | ลบไปแค่ **1 ไฟล์**: `welcome-to-star-work.md` (โพสต์ตัวอย่าง — ดูข้อ 3) |
| ประวัติ `.md/.mdx` ทั้ง repo | เคยมีแค่ 4 ไฟล์ (3 ปัจจุบัน + 1 sample ที่ลบ) — **ไม่เคยมี trove บทความจำนวนมากใน repo** |
| `next.config.ts` redirects/rewrites | **ไม่มี** redirect map เลย |
| `_redirects` / `vercel.json` / `netlify.toml` | **ไม่มี** |
| `public/*.xml` / sitemap เก่า | **ไม่มี** |
| WordPress backup ในเครื่อง (`wp-content`, `*.wpress`, `*.sql`, `*.wxr`, export xml) | **ไม่พบ** |
| `~/Downloads/starwork/` | มีแค่รูป `.jpg` 6 ไฟล์ ไม่ใช่บทความ |
| `starwork_home*.html` (7.7K) | snapshot หน้าแรก ไม่มีลิสต์บทความ |

---

## 3. บทความที่กู้ได้จาก git (แต่ไม่ควรใช้ตามเดิม)

**`content/blog/welcome-to-star-work.md`** — ลบใน commit `4057d34` (2026-05-19)
- เป็น **โพสต์ตัวอย่าง** (sample) ไม่ใช่บทความจริงของลูกค้า
- 🔴 **มีเคลมทำเลผิด**: เขียนว่า *"ทำเลใกล้ MAYA Lifestyle Shopping Center และนิมมาน"*
  ซึ่งเป็นข้อมูลผิด (ที่ตั้งจริง = วัดเกต ฝั่งตะวันออก)
- กู้เนื้อหาเต็มได้ด้วย: `git show 4057d34~1:content/blog/welcome-to-star-work.md`
- **สรุป: ไม่ใช่เป้าหมายการกู้** — ถ้าจะนำกลับต้องแก้ทำเลก่อน

---

## 4. หน้าเก่าที่ยัง index อยู่ (เป้าหมาย 301 — จาก report)

report ระบุชื่อหน้า WordPress เก่าที่ Google index (แต่**ไม่ได้ให้ URL เต็ม**):

- Services Office
- Event Space
- Cafe Amazon
- Virtual Office
- Knowledge  ← **น่าจะเป็นที่อยู่ของบทความ/สาระเก่า**
- Contact
- `/en/` (เวอร์ชันภาษาอังกฤษทั้งชุด)

---

## 5. แผน 301 Redirect Map (ร่าง 1:1)

> ระดับความมั่นใจ: ✅ = ชัดเจน · ⚠️ = ต้องยืนยัน/ยังไม่มีหน้าปลายทาง

| # | URL เก่า (WordPress) | → URL ใหม่ | มั่นใจ |
|---|----------------------|-----------|:---:|
| 1 | `starworkchiangmai.com/` (non-www) | `https://www.starworkchiangmai.com/` | ✅ |
| 2 | `/services-office` / "Services Office" | `/services#serviced-office` | ✅ |
| 3 | "Virtual Office" | `/services#virtual-office` | ✅ |
| 4 | "Cafe Amazon" | `/cafe` | ✅ |
| 5 | "Contact" | `/#contact` | ✅ |
| 6 | "Event Space" | `/services` | ⚠️ เว็บใหม่**ยังไม่มี**หน้า/section Event Space |
| 7 | "Knowledge" (index) | `/blog` | ⚠️ |
| 8 | บทความเดี่ยวใต้ Knowledge/blog เก่า | `/blog/<slug ที่ตรงกัน>` | ⚠️ **ยังไม่รู้ URL** |
| 9 | `/en/` และ `/en/*` | `/` (หรือ `/en` ถ้าจะทำเว็บ EN) | ⚠️ ต้องตัดสินใจ |
| 10 | `/en/knowledge/` (**404 แล้ว** ยัง index) | `/blog` | 🔴 เร่งด่วน — เสีย link equity |
| 11 | `/en/coworking-space/` (**live**) | หน้า coworking ใหม่ (**ยังไม่มี** → บทความชิ้นที่ 4) | ⚠️ ปลายทางยังไม่มี |
| 12 | `/en/seminar-space/` | `/services#event` หรือ `/services` | ⚠️ ยังไม่มี section event |
| 13 | URL บทความรายชิ้น (ทั้งหมด) | `/blog/<slug>` | ⚠️ **รอ GSC export** |

> หมายเหตุ: เว็บใหม่ปัจจุบันมี route แค่ `/`, `/services`, `/blog`, `/blog/[slug]`, `/cafe`
> (ยังไม่มี `/faq`, `/event-space`, `/virtual-office` แบบ standalone, ไม่มีหน้า `/contact` แยก)

---

## 6. บทความที่ยังกู้ไม่ได้ — ต้องดึงจากภายนอก

ยังไม่มีข้อมูล URL/เนื้อหาบทความเก่าเป็นรายชิ้นในเครื่องนี้เลย ต้องดึงจาก:

1. **Google Search Console** (เว็บเก่า `starworkchiangmai.com`)
   → รายงาน *Pages / Coverage* + *Performance → Pages* = ได้ URL เก่าที่เคย index ครบทุกหน้า (แหล่งที่แม่นที่สุดสำหรับ 301 map)
2. **Wayback Machine** (`web.archive.org/web/*/starworkchiangmai.com/*`)
   → กู้ **เนื้อหา** บทความเก่าที่หน้าถูกลบไปแล้ว
3. **WordPress export** (ถ้ายัง access เว็บเก่าได้) → Tools → Export (ไฟล์ `.wxr`)
   = ได้ทั้งเนื้อหา + slug ครบ ดีที่สุดถ้าทำได้

> ผมยังไม่ได้ดึงจากภายนอก (Wayback/GSC) — รอคุณยืนยันก่อนตามที่สั่ง

---

## 7. ข้อมูลที่ต้องขอจากลูกค้า (TODO client)

- [ ] สิทธิ์เข้า **GSC ของเว็บเก่า** (หรือ export รายการ URL ที่ index)
- [ ] ยังเข้า **WordPress admin เก่า** ได้ไหม (เพื่อ export `.wxr`)
- [ ] ตัดสินใจ `/en/` → redirect ไป `/` หรือจะทำเว็บ EN จริง
- [ ] ยืนยันว่าจะมีหน้า **Event Space** บนเว็บใหม่ไหม (ถ้าไม่มี ให้ 301 ไป `/services`)
