
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, ShoppingCart, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-24 md:py-32 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-tight">
            Empowering Street Food Entrepreneurs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            StreetVendorConnect is your one-stop platform to find quality raw material suppliers, streamline your orders, and grow your street food business.
          </p>
          <div className="mt-8 flex justify-center gap-4">
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
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">Ordering supplies for your business is as easy as 1-2-3.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                 <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                    <Search className="h-8 w-8" />
                 </div>
                 <h3 className="text-xl font-bold font-headline mb-2">1. Find Your Suppliers</h3>
                 <p className="text-muted-foreground">Browse our network of trusted local distributors for fresh ingredients, packaging, and more.</p>
              </CardContent>
            </Card>
             <Card className="shadow-lg">
              <CardContent className="p-6">
                 <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                    <ShoppingCart className="h-8 w-8" />
                 </div>
                 <h3 className="text-xl font-bold font-headline mb-2">2. Place Your Order</h3>
                 <p className="text-muted-foreground">Add products to your cart, choose your preferred payment method, and check out in minutes.</p>
              </CardContent>
            </Card>
             <Card className="shadow-lg">
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
      </section>

       {/* Featured Categories Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Everything You Need, All in One Place</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featureCategories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group relative block overflow-hidden rounded-lg">
                  <Image src={cat.image} alt={cat.name} width={400} height={400} className="object-cover w-full h-48 md:h-64 group-hover:scale-110 transition-transform duration-300" data-ai-hint={cat.hint} />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold font-headline text-center p-2">{cat.name}</h3>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto text-center">
            <div className="relative">
                 <Image src="https://i.pravatar.cc/150?u=auntie" alt="Auntie's Kitchen" width={80} height={80} className="rounded-full mx-auto mb-4" data-ai-hint="happy woman" />
            </div>
           <blockquote className="text-xl md:text-2xl font-medium text-foreground">
             "StreetVendorConnect has been a game-changer for my business. I can now source the best ingredients at great prices without closing my stall for a day. The time I save is incredible!"
           </blockquote>
           <p className="text-muted-foreground mt-4 font-semibold">- Owner of Auntie's Kitchen, Pune</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-20">
             <h2 className="text-3xl font-bold font-headline mb-4">Ready to Grow Your Business?</h2>
             <p className="max-w-2xl mx-auto mb-8">
                Join a community of hundreds of street food vendors and suppliers who are building a better food ecosystem together.
            </p>
             <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/seller/apply">Join StreetVendorConnect Today</Link>
            </Button>
        </div>
      </section>
    </main>
  );
}
