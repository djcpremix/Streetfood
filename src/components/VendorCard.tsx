import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarRating } from './StarRating';
import type { Vendor } from '@/lib/placeholder-data';
import { MapPin } from 'lucide-react';

type VendorCardProps = {
  vendor: Vendor;
};

export function VendorCard({ vendor }: VendorCardProps) {
  return (
    <Link href={`/vendor/${vendor.id}`} className="block group">
      <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={vendor.image}
              alt={vendor.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              data-ai-hint={vendor.cuisine}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <Badge variant="secondary" className="mb-2 uppercase text-xs font-bold tracking-wider">{vendor.cuisine}</Badge>
            <CardTitle className="text-xl font-headline mb-2">{vendor.name}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <StarRating rating={vendor.rating} />
              <span>{vendor.rating.toFixed(1)} ({vendor.reviewsCount})</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{vendor.distance} away</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
