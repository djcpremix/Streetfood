'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Utensils, Loader2, Trash2 } from 'lucide-react';
import { vendors } from '@/lib/placeholder-data';
import type { MenuItem } from '@/lib/placeholder-data';
import { addMenuItem } from '@/app/dashboard/actions';
import Image from 'next/image';

const menuItemSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.coerce.number().positive('Price must be a positive number'),
});

// We'll use the first vendor's menu as a stand-in for the logged-in user's menu.
const initialMenuItems = vendors[0].menu;

export function MenuItemManager() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const form = useForm<z.infer<typeof menuItemSchema>>({
    resolver: zodResolver(menuItemSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof menuItemSchema>) {
    setIsLoading(true);
    
    // In a real app, you'd get the vendorId from the user's session
    const vendorId = '1'; 
    const result = await addMenuItem(vendorId, values);

    if (result.success && result.data) {
      setMenuItems((prev) => [...prev, result.data!]);
      form.reset();
      setIsAdding(false);
    } else {
      // In a real app, you would show a toast notification for the error
      console.error(result.error);
    }

    setIsLoading(false);
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
          <Utensils className="text-primary" />
          <span>Your Menu</span>
        </h2>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)}>
            <PlusCircle className="mr-2" /> Add New Item
          </Button>
        )}
      </div>

      {isAdding && (
        <Card className="mb-8 bg-card/50">
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>Add a New Menu Item</CardTitle>
                <CardDescription>Fill out the details for your new dish.</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Spicy Chicken Wings" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.01" placeholder="e.g., 12.99" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe your item..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                 </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button type="button" variant="ghost" onClick={() => { setIsAdding(false); form.reset(); }}>Cancel</Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin" /> : 'Save Item'}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Card key={item.id} className="overflow-hidden flex flex-col">
            <CardHeader className="flex-row items-start gap-4 space-y-0">
               <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover border" data-ai-hint="food item" />
               <div className="flex-1">
                <CardTitle>{item.name}</CardTitle>
                <p className="text-xl font-semibold text-primary mt-1">${item.price.toFixed(2)}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
            <CardFooter className="bg-muted/40 p-3 flex justify-end">
               <Button variant="outline" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
