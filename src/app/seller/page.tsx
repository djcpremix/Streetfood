import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

const benefits = [
  "Reach thousands of new customers in your area.",
  "Easy-to-use tools to manage your menu and orders.",
  "Access to reliable delivery partners.",
  "Secure and fast weekly payments.",
  "Join a growing community of food entrepreneurs."
];

export default function SellerPage() {
  return (
    <main>
      <section className="relative bg-primary/10 py-20 md:py-32 text-center">
         <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
              Grow Your Business with StreetVendorConnect
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our platform to connect with a larger audience, streamline your operations, and focus on what you do best: making amazing food.
            </p>
             <Button asChild size="lg" className="mt-8">
                <Link href="/signup">Get Started Today</Link>
            </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold font-headline mb-6">Why Partner With Us?</h2>
                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center mt-1">
                                    <Check className="h-4 w-4" />
                                </div>
                                <p className="text-lg">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                        src="https://placehold.co/600x400.png"
                        alt="Happy street vendor"
                        fill
                        className="object-cover"
                        data-ai-hint="happy vendor"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container text-center">
             <h2 className="text-3xl font-bold font-headline mb-6">Ready to Join?</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Signing up is quick and easy. Click the button below to create your account and start building your online presence.
            </p>
             <Button asChild size="lg">
                <Link href="/signup">Create Your Vendor Account</Link>
            </Button>
        </div>
      </section>
    </main>
  );
}
