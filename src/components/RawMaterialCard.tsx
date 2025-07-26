'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import type { RawMaterial } from '@/lib/placeholder-data';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

type RawMaterialCardProps = {
  material: RawMaterial;
};

export function RawMaterialCard({ material }: RawMaterialCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(material);
    toast({
      title: "Added to cart!",
      description: `${material.name} has been added to your order.`,
    });
  };

  return (
    <Card className="overflow-hidden flex flex-col">
       <CardHeader className="flex-row items-start gap-4 space-y-0 p-4">
        <Image 
          src={material.image} 
          alt={material.name} 
          width={80} 
          height={80} 
          className="rounded-md object-cover border"
          data-ai-hint="raw material"
        />
        <div className="flex-1">
          <CardTitle className="text-lg">{material.name}</CardTitle>
          <p className="text-sm text-muted-foreground">per {material.unit}</p>
        </div>
      </CardHeader>
      <CardFooter className="bg-muted/40 p-3 flex items-center justify-between mt-auto">
         <p className="text-lg font-semibold text-primary">₹{material.price.toFixed(2)}</p>
         <Button size="sm" onClick={handleAddToCart}>
            <Plus className="h-4 w-4 mr-1" /> Add to Order
         </Button>
      </CardFooter>
    </Card>
  );
}
