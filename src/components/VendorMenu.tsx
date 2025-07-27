'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import type { MenuItem } from '@/lib/placeholder-data';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

type VendorMenuProps = {
  menu: MenuItem[];
};

export function VendorMenu({ menu }: VendorMenuProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: MenuItem) => {
    const cartItem = {
      ...item,
      unit: 'item',
    };
    addToCart(cartItem);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your order.`,
    });
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {menu.map((item) => (
        <Card key={item.id} className="overflow-hidden flex flex-col">
          <CardHeader className='p-4'>
            <div className='flex gap-4 items-start'>
                <Image src={item.image} alt={item.name} width={80} height={80} className='rounded-md border object-cover' data-ai-hint="food item" />
                <div>
                  <CardTitle className="text-lg font-headline">{item.name}</CardTitle>
                  <CardDescription className="mt-1 h-10 text-ellipsis overflow-hidden">{item.description}</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardFooter className="flex items-center justify-between mt-auto p-4 bg-muted/40">
            <p className="text-xl font-semibold text-primary">₹{item.price.toFixed(2)}</p>
            <Button size="sm" onClick={() => handleAddToCart(item)}>
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
