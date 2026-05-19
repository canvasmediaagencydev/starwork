// app/components/blog/BlogPostContent.tsx
export default function BlogPostContent({ html }: { html: string }) {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
      <article
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
