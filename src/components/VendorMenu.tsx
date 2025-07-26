import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import type { MenuItem } from '@/lib/placeholder-data';

type VendorMenuProps = {
  menu: MenuItem[];
};

export function VendorMenu({ menu }: VendorMenuProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {menu.map((item) => (
        <Card key={item.id} className="overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-headline">{item.name}</CardTitle>
            <CardDescription className="h-10 text-ellipsis overflow-hidden">{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between mt-auto pt-0">
            <p className="text-xl font-semibold text-primary">${item.price.toFixed(2)}</p>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
