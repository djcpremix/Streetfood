import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="container py-8 md:py-12">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
            </Link>
          <Badge variant="secondary" className="uppercase text-xs font-bold tracking-wider">{post.category}</Badge>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 mb-8">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.authorImage} alt={post.author} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-sm text-muted-foreground">{post.date}</p>
          </div>
        </div>

        <div className="relative h-80 md:h-[500px] w-full mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint="blog post"
          />
        </div>
        
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </article>
    </main>
  );
}

// Add basic prose styles to globals.css for blog content
// This is a common practice for styling HTML from a CMS or markdown.
// You might need to install @tailwindcss/typography if you don't have it.
// I'll add the styles to globals.css
