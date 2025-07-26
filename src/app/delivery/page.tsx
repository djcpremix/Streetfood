import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, DollarSign, Bike, MapPin } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

const benefits = [
  {
    icon: DollarSign,
    text: "Competitive earnings and flexible payout options."
  },
  {
    icon: Bike,
    text: "Be your own boss and set your own schedule."
  },
  {
    icon: MapPin,
    text: "Deliver in your preferred areas and discover your city."
  },
  {
    icon: Check,
    text: "Easy-to-use app to manage deliveries and track earnings."
  }
];

export default function DeliveryPage() {
  return (
    <main>
      <section className="relative bg-primary/10 py-20 md:py-32 text-center">
         <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
              Partner with Us as a Delivery Driver
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our network of delivery partners and earn money on your own schedule. Deliver essential supplies to local street food vendors and be a vital part of your community's food scene.
            </p>
             <Button asChild size="lg" className="mt-8">
                <Link href="/delivery/apply">Apply Now</Link>
            </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                        src="https://placehold.co/600x800.png"
                        alt="Delivery partner on a scooter"
                        fill
                        className="object-cover"
                        data-ai-hint="delivery person"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold font-headline mb-6">Why Drive With StreetVendorConnect?</h2>
                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center mt-1">
                                    <benefit.icon className="h-5 w-5" />
                                </div>
                                <p className="text-lg">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container text-center">
             <h2 className="text-3xl font-bold font-headline mb-6">Ready to Hit the Road?</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Signing up is simple. Click the button below to start your application and you could be making deliveries in just a few days.
            </p>
             <Button asChild size="lg">
                <Link href="/delivery/apply">Start Earning Today</Link>
            </Button>
        </div>
      </section>
    </main>
  );
}
