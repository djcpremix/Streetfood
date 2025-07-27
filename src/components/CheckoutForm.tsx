'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { CreditCard, Banknote, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function CheckoutForm() {
  const { cart, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.05; // 5% tax
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
        setIsLoading(false);
        toast({
            title: "Payment Successful!",
            description: "Your order has been placed. Thank you for your purchase!",
        });
        clearCart();
        router.push('/');
    }, 2000); // 2-second delay
  };
  
  if (cart.length === 0 && !isLoading) {
     router.push('/');
     return null;
  }

  return (
    <div className="grid lg:grid-cols-3 gap-12 items-start">
      <div className="lg:col-span-2">
        <Tabs defaultValue="card" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card">
                    <CreditCard className="mr-2" /> Credit/Debit Card
                </TabsTrigger>
                <TabsTrigger value="upi">
                    <Banknote className="mr-2" /> UPI
                </TabsTrigger>
            </TabsList>
            <form onSubmit={handlePayment}>
                <Card className="mt-4 border-t-0 rounded-t-none">
                    <CardContent className="pt-6">
                        <TabsContent value="card">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="cardNumber">Card Number</Label>
                                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="expiry">Expiry</Label>
                                        <Input id="expiry" placeholder="MM/YY" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cvc">CVC</Label>
                                        <Input id="cvc" placeholder="123" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">ZIP Code</Label>
                                        <Input id="zip" placeholder="411001" required />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="upi">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="upiId">UPI ID</Label>
                                    <Input id="upiId" placeholder="yourname@bank" required />
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    A payment request will be sent to your UPI app.
                                </p>
                            </div>
                        </TabsContent>
                    </CardContent>
                    <CardFooter>
                        <Button size="lg" type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 animate-spin" />
                                    Processing Payment...
                                </>
                            ) : (
                                `Pay ₹${total.toFixed(2)}`
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Tabs>
      </div>
      
      <div className="lg:col-span-1 sticky top-24">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {cart.map(item => (
                <div key={item.id} className="flex justify-between items-start text-sm">
                    <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
            ))}
            <Separator className="my-4" />
             <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Taxes (5%)</span>
              <span>₹{taxAmount.toFixed(2)}</span>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
