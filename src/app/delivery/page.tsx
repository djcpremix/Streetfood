import { DeliveryPersonCard } from '@/components/DeliveryPersonCard';
import { deliveryPersonnel } from '@/lib/placeholder-data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function DeliveryPage() {
  return (
    <main className="container py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          Find Delivery Partners
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with reliable delivery personnel to expand your business reach.
        </p>
      </section>

      <div className="relative mb-12 max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search for delivery partners..." className="pl-12 h-12 text-base" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deliveryPersonnel.map((person) => (
          <DeliveryPersonCard key={person.id} person={person} />
        ))}
      </div>
    </main>
  );
}

    