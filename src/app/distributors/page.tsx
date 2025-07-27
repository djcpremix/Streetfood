
'use client';

import { useState } from 'react';
import { DistributorCard } from '@/components/DistributorCard';
import { distributors } from '@/lib/placeholder-data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function DistributorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDistributors = distributors.filter((distributor) =>
    distributor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    distributor.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          Find Raw Material Distributors
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Order fresh ingredients and supplies from the best distributors.
        </p>
      </section>

      <div className="relative mb-12 max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search for distributors by name or city..." 
          className="pl-12 h-12 text-base" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDistributors.map((distributor) => (
          <DistributorCard key={distributor.id} distributor={distributor} />
        ))}
      </div>
    </main>
  );
}
