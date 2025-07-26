
import Image from 'next/image';
import { distributors } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import { StarRating } from '@/components/StarRating';
import { Badge } from '@/components/ui/badge';
import { RawMaterialCard } from '@/components/RawMaterialCard';
import { Building, MapPin, User, CheckCircle, XCircle, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function DistributorDetailPage({ params }: { params: { id: string } }) {
  const distributor = distributors.find((d) => d.id === params.id);

  if (!distributor) {
    notFound();
  }

  return (
    <main className="pb-12 bg-muted/20">
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

      <div className="container mt-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Our Products</CardTitle>
                    <CardDescription>Browse the raw materials available from {distributor.name}.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {distributor.products.map((material) => (
                        <RawMaterialCard key={material.id} material={material} />
                    ))}
                    </div>
                </CardContent>
            </Card>

            {distributor.companyRegistered && distributor.companyDescription && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">About {distributor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{distributor.companyDescription}</p>
                </CardContent>
              </Card>
            )}

             <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg border">
                    <iframe
                        src={distributor.googleMapsEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
        </div>
         <div className="lg:col-span-1 space-y-8">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Distributor Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-start gap-4">
                  <User className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                      <p className="font-semibold">Owner</p>
                      <p className="text-muted-foreground">{distributor.ownerName}</p>
                  </div>
              </div>
              <Separator />
               <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                      <p className="font-semibold">Company Status</p>
                      <p className={`flex items-center gap-2 ${distributor.companyRegistered ? 'text-green-600' : 'text-red-600'}`}>
                        {distributor.companyRegistered ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        {distributor.companyRegistered ? 'Registered' : 'Not Registered'}
                      </p>
                  </div>
              </div>
              <Separator />
               <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                      <p className="font-semibold">Email</p>
                      <a href={`mailto:${distributor.email}`} className="text-primary hover:underline text-sm">{distributor.email}</a>
                  </div>
              </div>
               <Separator />
               <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                      <p className="font-semibold">Phone</p>
                      <a href={`tel:${distributor.phone}`} className="text-primary hover:underline text-sm">{distributor.phone}</a>
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
