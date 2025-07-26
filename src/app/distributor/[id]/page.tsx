
import Image from 'next/image';
import { distributors } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import { StarRating } from '@/components/StarRating';
import { Badge } from '@/components/ui/badge';
import { RawMaterialCard } from '@/components/RawMaterialCard';
import { Building, MapPin, User, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
            <div className="flex items-center gap-2">
              <StarRating rating={distributor.rating} />
              <span className="font-medium">{distributor.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">({distributor.reviewsCount} reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{distributor.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-headline mb-6">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {distributor.products.map((material) => (
                <RawMaterialCard key={material.id} material={material} />
            ))}
            </div>
        </div>
         <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold font-headline">Distributor Information</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                      <p className="font-semibold">Owner</p>
                      <p className="text-muted-foreground">{distributor.ownerName}</p>
                  </div>
              </div>
               <div className="flex items-center gap-4">
                  <Building className="h-5 w-5 text-primary" />
                  <div>
                      <p className="font-semibold">Company Status</p>
                      <p className={`flex items-center gap-2 ${distributor.companyRegistered ? 'text-green-600' : 'text-red-600'}`}>
                        {distributor.companyRegistered ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        {distributor.companyRegistered ? 'Registered' : 'Not Registered'}
                      </p>
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

    