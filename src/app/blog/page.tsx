import { BlogPostCard } from "@/components/BlogPostCard";
import { blogPosts } from "@/lib/placeholder-data";

export default function BlogPage() {
  return (
    <main className="container py-8 md:py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          The StreetVendorConnect Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          News, tips, and stories from the street food community.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

    