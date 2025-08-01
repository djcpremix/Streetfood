
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, ShoppingCart, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { testimonials } from '@/lib/placeholder-data';

const featureCategories = [
  {
    name: 'Fresh Vegetables',
    image: 'https://placehold.co/600x400.png',
    hint: 'vegetables market',
    href: '/distributors'
  },
  {
    name: 'Grains & Flours',
    image: 'https://placehold.co/600x400.png',
    hint: 'grains sacks',
    href: '/distributors'
  },
  {
    name: 'Spices',
    image: 'https://placehold.co/600x400.png',
    hint: 'spices market',
    href: '/distributors'
  },
  {
    name: 'Dairy Products',
    image: 'https://placehold.co/600x400.png',
    hint: 'dairy products',
    href: '/distributors'
  }
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-24 md:py-32 text-center animate-fade-in">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-tight animate-slide-in-from-bottom-slow">
            Empowering Street Food Entrepreneurs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-from-bottom-slow animation-delay-300">
            StreetVendorConnect is your one-stop platform to find quality raw material suppliers, streamline your orders, and grow your street food business.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-slide-in-from-bottom-slow animation-delay-500">
            <Button asChild size="lg">
              <Link href="/distributors">Find Suppliers <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/seller/apply">Become a Vendor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 animate-fade-in">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-200">Ordering supplies for your business is as easy as 1-2-3.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="animate-slide-in-from-bottom-slow">
              <Card className="shadow-lg h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                   <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                      <Search className="h-8 w-8" />
                   </div>
                   <h3 className="text-xl font-bold font-headline mb-2">1. Find Your Suppliers</h3>
                   <p className="text-muted-foreground">Browse our network of trusted local distributors for fresh ingredients, packaging, and more.</p>
                </CardContent>
              </Card>
            </div>
            <div className="animate-slide-in-from-bottom-slow animation-delay-200">
               <Card className="shadow-lg h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                   <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                      <ShoppingCart className="h-8 w-8" />
                   </div>
                   <h3 className="text-xl font-bold font-headline mb-2">2. Place Your Order</h3>
                   <p className="text-muted-foreground">Add products to your cart, choose your preferred payment method, and check out in minutes.</p>
                </CardContent>
              </Card>
            </div>
            <div className="animate-slide-in-from-bottom-slow animation-delay-400">
               <Card className="shadow-lg h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                   <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                      <Truck className="h-8 w-8" />
                   </div>
                   <h3 className="text-xl font-bold font-headline mb-2">3. Get It Delivered</h3>
                   <p className="text-muted-foreground">Our reliable delivery partners will bring your order directly to your stall, on time.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

       {/* Featured Categories Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 animate-fade-in">Everything You Need, All in One Place</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featureCategories.map((cat, i) => (
              <div key={cat.name} className="animate-slide-in-from-bottom-slow" style={{ animationDelay: `${i * 150}ms` }}>
                <Link href={cat.href} className="group relative block overflow-hidden rounded-lg">
                    <Image src={cat.image} alt={cat.name} width={400} height={400} className="object-cover w-full h-48 md:h-64 group-hover:scale-110 transition-transform duration-300" data-ai-hint={cat.hint} />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold font-headline text-center p-2">{cat.name}</h3>
                    </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto text-center animate-fade-in">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative">
                        <Image src={testimonial.image} alt={testimonial.author} width={80} height={80} className="rounded-full mx-auto mb-4" data-ai-hint={testimonial.hint} />
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium text-foreground">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-muted-foreground mt-4 font-semibold">- {testimonial.author}, {testimonial.company}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-20 animate-fade-in">
             <h2 className="text-3xl font-bold font-headline mb-4">Ready to Grow Your Business?</h2>
             <p className="max-w-2xl mx-auto mb-8">
                Join a community of hundreds of street food vendors and suppliers who are building a better food ecosystem together.
            </p>
             <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 animate-pulse">
                <Link href="/seller/apply">Join StreetVendorConnect Today</Link>
            </Button>
        </div>
      </section>
    </main>
  );
}
