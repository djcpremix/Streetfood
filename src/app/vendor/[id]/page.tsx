import Image from 'next/image';
import { vendors } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import { StarRating } from '@/components/StarRating';
import { MapPin, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VendorMenu } from '@/components/VendorMenu';
import { Reviews } from '@/components/Reviews';

export default function VendorPage({ params }: { params: { id: string } }) {
  const vendor = vendors.find((v) => v.id === params.id);

  if (!vendor) {
    notFound();
  }

  return (
    <main className="pb-12">
      <section className="relative h-64 md:h-80 w-full">
        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          className="object-cover"
          data-ai-hint={vendor.cuisine}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      <div className="container -mt-24 relative z-10">
        <div className="bg-card p-6 rounded-xl shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">{vendor.name}</h1>
          <p className="text-lg text-primary mt-1">{vendor.cuisine}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <StarRating rating={vendor.rating} />
              <span className="font-medium">{vendor.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">({vendor.reviewsCount} reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{vendor.address}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Open until 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-8">
        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="reviews">Reviews & Ratings</TabsTrigger>
          </TabsList>
          <TabsContent value="menu" className="mt-6">
            <VendorMenu menu={vendor.menu} />
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <Reviews reviews={vendor.reviews} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
