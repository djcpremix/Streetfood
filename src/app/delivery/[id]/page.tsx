import { notFound } from 'next/navigation';
import { deliveryPeople } from '@/lib/placeholder-data';
import Image from 'next/image';
import { StarRating } from '@/components/StarRating';
import { Award, Bike, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Reviews } from '@/components/Reviews';

export default function DeliveryPersonDetailPage({ params }: { params: { id: string } }) {
  const person = deliveryPeople.find((p) => p.id === params.id);

  if (!person) {
    notFound();
  }

  return (
    <main className="pb-12 bg-muted/20">
       <section className="relative h-48 md:h-64 w-full bg-primary/10"></section>
      
      <div className="container -mt-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
                src={person.image}
                alt={person.name}
                width={160}
                height={160}
                className="rounded-full object-cover border-4 border-card shadow-lg"
                data-ai-hint="person face"
                priority
            />
            <div className="bg-card p-6 rounded-xl shadow-xl flex-1 w-full">
                <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">{person.name}</h1>
                <p className="text-lg text-muted-foreground mt-1">Delivery Partner</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <StarRating rating={person.rating} />
                        <span className="font-medium">{person.rating.toFixed(1)}</span>
                        <span className="text-muted-foreground">({person.reviewsCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Bike className="h-4 w-4 text-primary" />
                        <span>{person.vehicle}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="h-4 w-4 text-primary" />
                        <span>{person.experience} of experience</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container mt-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
           <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Customer Reviews</CardTitle>
                    <CardDescription>See what vendors are saying about {person.name}.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {person.reviews.map((review, index) => (
                            <div key={review.id}>
                            <div className="flex gap-4">
                                <Avatar>
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${review.author}`} alt={review.author} />
                                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-foreground">{review.author}</p>
                                    <p className="text-sm text-muted-foreground">{review.date}</p>
                                </div>
                                <StarRating rating={review.rating} className="my-1" />
                                <p className="text-sm text-foreground/90">{review.comment}</p>
                                </div>
                            </div>
                            {index < person.reviews.length - 1 && <Separator className="mt-6" />}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
         <div className="lg:col-span-1 space-y-8">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Partner Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
               <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                      <p className="font-semibold">Email</p>
                      <a href={`mailto:${person.email}`} className="text-primary hover:underline text-sm">{person.email}</a>
                  </div>
              </div>
               <Separator />
               <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                      <p className="font-semibold">Phone</p>
                      <a href={`tel:${person.phone}`} className="text-primary hover:underline text-sm">{person.phone}</a>
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
