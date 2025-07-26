'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative mb-12 max-w-xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input placeholder="Search for food or vendors..." className="pl-12 h-12 text-base" />
    </div>
  );
}
