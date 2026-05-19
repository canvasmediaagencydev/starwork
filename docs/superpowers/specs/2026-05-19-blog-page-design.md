# Blog Page Design

**Date:** 2026-05-19
**Status:** Approved (brainstorm), pending implementation plan

## Goal

เพิ่มหน้า Blog ให้เว็บ Star Work เพื่อให้ทีมสามารถเผยแพร่บทความ (ข่าวสาร / promotions / content / community stories) ได้ผ่าน markdown files โดยไม่ต้องใช้ CMS

## Scope decisions (from brainstorming)

- **Categories:** ไม่มี — feed รวมเป็นอันเดียว
- **Content source:** Markdown files (`.md`) ใน repo
- **Pages:** 2 หน้า — list (`/blog`) + detail (`/blog/[slug]`)
- **List layout:** Card grid 3 columns (responsive 1/2/3)
- **Pagination:** "Load more" button (client-side state)
- **Initial content:** 1 sample post

## Tech additions

| Package | Purpose |
|---|---|
| `gray-matter` | Parse markdown frontmatter |
| `remark` | Markdown processor |
| `remark-html` | Render markdown → HTML |

ไม่ใช้ MDX (overkill สำหรับ blog เนื้อหา text) และไม่ใช้ `@tailwindcss/typography` (Tailwind v4 plugin ecosystem ยังไม่ stable; scope แค่ blog → custom CSS พอ)

## File structure

```
app/
  blog/
    page.tsx                    # /blog — list page (Server Component)
    [slug]/
      page.tsx                  # /blog/[slug] — detail page (Server Component)
  components/
    blog/
      BlogHero.tsx              # Title section ของหน้า list
      BlogCard.tsx              # Card 1 ใบ
      BlogGrid.tsx              # Client Component: grid + "Load more" button
      BlogPostContent.tsx       # Render HTML ของ post detail (server)
lib/
  blog.ts                       # Helpers: getAllPosts(), getPostBySlug()
content/
  blog/
    welcome-to-star-work.md     # Sample post #1
public/
  blog/
    welcome-cover.jpg           # Cover image ของ sample post
```

**ทำไมแบ่งแบบนี้:**
- `content/blog/` แยกจาก `app/` — markdown ไม่ใช่ code
- `lib/blog.ts` รวม logic อ่านไฟล์ + parse ไว้ที่เดียว เรียกจากทั้ง list page และ detail page
- `BlogGrid` แยกเป็น Client Component เพราะมี state สำหรับปุ่ม "Load more"; ส่วนที่เหลือเป็น Server Component ทั้งหมด (อ่าน fs ตอน build)

## Data model

### Markdown frontmatter

```markdown
---
title: "ยินดีต้อนรับสู่ Star Work"
date: "2026-05-19"
excerpt: "พื้นที่ทำงาน + คาเฟ่ที่จะทำให้วันทำงานของคุณดีขึ้น"
coverImage: "/blog/welcome-cover.jpg"
author: "Star Work Team"
---

## หัวข้อใน post

เนื้อหา markdown ปกติ...
```

### TypeScript type (`lib/blog.ts`)

```ts
type Post = {
  slug: string;           // มาจากชื่อไฟล์ (เช่น "welcome-to-star-work")
  title: string;
  date: string;           // ISO date "2026-05-19"
  excerpt: string;
  coverImage: string;
  author: string;
  contentHtml: string;    // populate เฉพาะตอน getPostBySlug()
};
```

### `lib/blog.ts` API

- `getAllPosts(): Post[]` — list ทุก post (ไม่รวม `contentHtml` — set เป็น `""`) เรียงตาม `date` ใหม่→เก่า
- `getPostBySlug(slug: string): Post | null` — โหลด post เดียวพร้อม `contentHtml` ที่ render แล้ว, คืน `null` ถ้าไม่เจอ
- ทั้งคู่ใช้ Node `fs` (synchronous) — run แค่บน server ตอน build/SSG

## Page: `/blog` (list)

### `app/blog/page.tsx` (Server Component)

```
1. const posts = getAllPosts();
2. Render:
   <Navbar />
   <BlogHero />
   <BlogGrid posts={posts} />
   <Footer />
```

### `BlogHero`

- Title "Blog" + tagline
- ขนาดเล็กกว่า hero หน้าแรก (เพราะนี่เป็น sub-page)
- Style สอดคล้องกับ warm tone ของ `Hero.tsx` หลัก

### `BlogGrid` (Client Component, `"use client"`)

- Props: `posts: Post[]`
- State: `const [visibleCount, setVisibleCount] = useState(6);`
- Render `posts.slice(0, visibleCount)` ใน grid:
  - `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- ถ้า `visibleCount < posts.length`:
  - แสดงปุ่ม "โหลดเพิ่มเติม" กึ่งกลาง
  - คลิก → `setVisibleCount(c => c + 6)`
- Edge cases:
  - `posts.length === 0` → empty state ("ยังไม่มีบทความ — กลับมาใหม่เร็วๆ นี้")
  - `posts.length <= 6` → ไม่แสดงปุ่ม

### `BlogCard`

- `<Link href={`/blog/${slug}`}>`
- Cover image: `next/image`, aspect 16:9, `object-cover`
- Title: line-clamp 2
- Excerpt: line-clamp 3, สีจาง
- Date: เล็ก, format ไทย `"19 พ.ค. 2026"` ผ่าน `Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })`
- Hover: subtle lift + shadow (เข้ากับ Pricing/Amenities cards ใน codebase)

## Page: `/blog/[slug]` (detail)

### `app/blog/[slug]/page.tsx` (Server Component, SSG)

```
1. export function generateStaticParams() {
     return getAllPosts().map(p => ({ slug: p.slug }));
   }
2. export function generateMetadata({ params }) {
     const post = getPostBySlug(params.slug);
     if (!post) return {};
     return {
       title: `${post.title} | Star Work Blog`,
       description: post.excerpt,
       openGraph: { images: [post.coverImage] },
     };
   }
3. Component:
   const post = getPostBySlug(params.slug);
   if (!post) notFound();
   Render:
   <Navbar />
   <article>
     <BlogHeroSection post={post} />   // cover image + title + meta
     <BlogPostContent html={post.contentHtml} />
     <BackToBlogLink />
   </article>
   <Footer />
```

### Layout sections

- **Hero (top):** Cover image เต็มความกว้าง, max-h ~480px, `object-cover`; gradient overlay; title + date + author ซ้อนบน image
- **Content (center):** `max-w-[720px]`, generous padding; `<article className="blog-content">` + render `contentHtml` ผ่าน `dangerouslySetInnerHTML`
- **Back link (bottom):** "← กลับไปยังบทความทั้งหมด" → `/blog`

### Typography (`globals.css`)

เพิ่ม scoped styles ใต้ `.blog-content` สำหรับ `h2`, `h3`, `p`, `ul`, `ol`, `blockquote`, `code`, `a`, `img` — ขนาด/spacing/สีให้สอดคล้องกับ design system ของไซต์

## Site integration

### `Navbar.tsx`

- เพิ่ม menu item "Blog" → `/blog` (ตำแหน่ง: หลัง Cafe หรือก่อน Contact — ตัดสินตอน implement)
- **เช็คก่อน:** ถ้า Navbar เดิมใช้ link แบบ `#section` (hash อย่างเดียว) จะพังเมื่อ click จากหน้า `/blog`/`/cafe` — ต้องแก้เป็น `/#section` ถ้ายังไม่ใช่
- ถ้าหน้า `/cafe` ใช้ Navbar เดียวกันแล้วทำงานได้ → blog ก็ใช้ได้ตามนั้น (case นี้ไม่ต้องแก้)

### `Footer.tsx`

- เพิ่ม link "Blog" ใน sitemap section (ถ้ามี)

### `sitemap.ts`

- เพิ่ม entry `/blog`
- Loop `getAllPosts()` → push `/blog/${slug}` ทุกอัน

## Testing checklist (manual via dev server)

- [ ] `/blog` แสดง sample post 1 ใบในรูปแบบ grid
- [ ] Click card → ไป `/blog/welcome-to-star-work` แสดงเนื้อหาเต็ม
- [ ] `/blog/non-existent-slug` → 404 (Next built-in)
- [ ] Mobile responsive: grid stack เป็น 1 column, hero text อ่านง่าย
- [ ] "Load more" button — จำลองโดย duplicate post หรือลด `visibleCount` initial
- [ ] Navbar/Footer link ไปหน้า blog ทำงาน
- [ ] Build success — ไม่มี TS error, sitemap include blog routes

## Out of scope (intentional)

- Tags / categories / search
- Comments
- RSS feed
- Reading time estimate
- Related posts
- Author pages
- Multi-language (i18n) — บทความเขียนภาษาไทยเป็นหลัก ใช้ Google Translate widget ของไซต์เดิม
- Pagination แบบเป็นหน้า (`?page=2`) — เลือก "Load more" แทน

ถ้าจะเพิ่มในอนาคต — refactor `getAllPosts()` + `lib/blog.ts` เป็นจุดเริ่ม
