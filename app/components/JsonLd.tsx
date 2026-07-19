// app/components/JsonLd.tsx
// Server component that injects one or more JSON-LD blocks into the page.
// No 'use client' — this must render on the server so the markup is in the
// initial HTML for crawlers.
import type { JsonLdNode } from '@/lib/schema';

type JsonLdProps = {
  data: JsonLdNode | JsonLdNode[];
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Google accepts either a single object or an array of objects per script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
