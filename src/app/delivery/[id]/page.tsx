import Image from 'next/image';
import { deliveryPersonnel } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import { StarRating } from '@/components/StarRating';
import { Badge } from '@/components/ui/badge';
import { Bike, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function DeliveryPersonDetailPage({ params }: { params: { id: string } }) {
  const person = deliveryPersonnel.find((d) => d.id === params.id);

  if (!person) {
    notFound();
  }

  return (
    <main className="container py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
                <Card className="sticky top-24">
                    <CardHeader className="p-0">
                         <Image
                            src={person.image}
                            alt={person.name}
                            width={400}
                            height={400}
                            className="object-cover w-full rounded-t-lg"
                            data-ai-hint="person face"
                            priority
                        />
                    </CardHeader>
                    <CardContent className="p-4 text-center">
                        <h1 className="text-2xl font-bold font-headline">{person.name}</h1>
                         <div className="flex items-center justify-center gap-2 mt-2">
                            <StarRating rating={person.rating} />
                            <span className="font-medium">{person.rating.toFixed(1)}</span>
                            <span className="text-muted-foreground">({person.reviewsCount} reviews)</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                         <Button size="lg" className="w-full">Hire Me</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold font-headline">About {person.name.split(' ')[0]}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{person.bio}</p>
                <Separator className="my-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold font-headline mb-4">Details</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Award className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Experience</p>
                                    <p className="text-muted-foreground">{person.experience}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Bike className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Vehicle</p>
                                    <p className="text-muted-foreground">{person.vehicle}</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Delivery Range</p>
                                    <p className="text-muted-foreground">{person.deliveryRange}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold font-headline mb-4">Reviews</h3>
                        <p className="text-muted-foreground italic">Review system coming soon...</p>
                        {/* We will add the review component here later */}
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

// We need to add Card components to this page to make it look better
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';