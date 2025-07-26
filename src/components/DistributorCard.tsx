import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarRating } from './StarRating';
import type { Distributor } from '@/lib/placeholder-data';
import { Truck } from 'lucide-react';

type DistributorCardProps = {
  distributor: Distributor;
};

export function DistributorCard({ distributor }: DistributorCardProps) {
  return (
    <Link href={`/distributor/${distributor.id}`} className="block group">
      <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={distributor.image}
              alt={distributor.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              data-ai-hint={distributor.category}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <Badge variant="secondary" className="mb-2 uppercase text-xs font-bold tracking-wider">{distributor.category}</Badge>
            <CardTitle className="text-xl font-headline mb-2">{distributor.name}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <StarRating rating={distributor.rating} />
              <span>{distributor.rating.toFixed(1)} ({distributor.reviewsCount} reviews)</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary font-medium mt-4">
            <Truck className="h-4 w-4" />
            <span>Delivers to your area</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
