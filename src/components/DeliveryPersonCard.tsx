import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarRating } from './StarRating';
import type { DeliveryPerson } from '@/lib/placeholder-data';
import { Bike, Award } from 'lucide-react';

type DeliveryPersonCardProps = {
  person: DeliveryPerson;
};

export function DeliveryPersonCard({ person }: DeliveryPersonCardProps) {
  return (
    <Link href={`/delivery/${person.id}`} className="block group">
      <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
        <CardHeader className="flex flex-row items-center gap-4 p-4">
           <Image
              src={person.image}
              alt={person.name}
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-primary/50"
              data-ai-hint="person face"
            />
            <div className="flex-1">
                 <CardTitle className="text-xl font-headline">{person.name}</CardTitle>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <StarRating rating={person.rating} />
                    <span>{person.rating.toFixed(1)} ({person.reviewsCount} reviews)</span>
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-between">
            <CardDescription>{person.bio.slice(0,100)}...</CardDescription>
            <div className='mt-4 space-y-2'>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <Award className="h-4 w-4 text-primary" />
                    <span>{person.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <Bike className="h-4 w-4 text-primary" />
                    <span>Uses a {person.vehicle}</span>
                </div>
            </div>
        </CardContent>
      </Card>
    </Link>
  );
}