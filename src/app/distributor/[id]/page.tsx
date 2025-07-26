import Image from 'next/image';
import { distributors } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import { StarRating } from '@/components/StarRating';
import { Badge } from '@/components/ui/badge';
import { RawMaterialCard } from '@/components/RawMaterialCard';

export default function DistributorDetailPage({ params }: { params: { id: string } }) {
  const distributor = distributors.find((d) => d.id === params.id);

  if (!distributor) {
    notFound();
  }

  return (
    <main className="pb-12">
      <section className="relative h-64 md:h-80 w-full">
        <Image
          src={distributor.image}
          alt={distributor.name}
          fill
          className="object-cover"
          data-ai-hint={distributor.category}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>
      
      <div className="container -mt-24 relative z-10">
        <div className="bg-card p-6 rounded-xl shadow-xl">
          <Badge variant="secondary" className="mb-2 uppercase text-xs font-bold tracking-wider">{distributor.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">{distributor.name}</h1>
          <div className="flex items-center gap-2 mt-2">
              <StarRating rating={distributor.rating} />
              <span className="font-medium">{distributor.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">({distributor.reviewsCount} reviews)</span>
          </div>
        </div>
      </div>

      <div className="container mt-12">
        <h2 className="text-2xl font-bold font-headline mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {distributor.products.map((material) => (
            <RawMaterialCard key={material.id} material={material} />
          ))}
        </div>
      </div>
    </main>
  );
}
