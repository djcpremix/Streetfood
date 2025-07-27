'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';

export function CartView() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.05; // 5% tax
  const taxAmount = subtotal * taxRate;
  const deliveryFee = subtotal > 0 ? 50.00 : 0;
  const total = subtotal + taxAmount + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-dashed rounded-lg">
        <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
        <h2 className="mt-4 text-xl font-semibold">Your cart is empty</h2>
        <p className="text-muted-foreground mt-2">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-6">
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Order Items ({cart.reduce((total, item) => total + item.quantity, 0)})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Item</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Image 
                        src={item.image || 'https://placehold.co/100x100.png'} 
                        alt={item.name} 
                        width={64} 
                        height={64}
                        className="rounded-md object-cover border"
                        data-ai-hint={item.name}
                      />
                    </TableCell>
                    <TableCell>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">from {item.distributorName}</p>
                      <p className="text-sm text-muted-foreground">Unit price: ₹{item.price.toFixed(2)}</p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">₹{item.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right font-medium">₹{(item.price * item.quantity).toFixed(2)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      <div className="sticky top-24">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
             <div className="flex justify-between text-muted-foreground">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>GST & Other Taxes (5%)</span>
              <span>₹{taxAmount.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full" asChild>
                <Link href="/checkout">
                    Proceed to Checkout
                </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
