import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { BlogPost } from '@/lib/placeholder-data';
import { ArrowRight } from 'lucide-react';

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href="#" className="block group">
      <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="blog post"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow flex flex-col">
          <div>
            <Badge variant="secondary" className="mb-3 uppercase text-xs font-bold tracking-wider">{post.category}</Badge>
            <CardTitle className="text-xl font-headline mb-3 leading-snug">{post.title}</CardTitle>
            <CardDescription>{post.excerpt}</CardDescription>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
            </div>
             <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <span className="text-sm font-semibold">Read More</span>
                <ArrowRight className="h-4 w-4" />
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

    