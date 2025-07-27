
'use client';

import Link from 'next/link';
import { UtensilsCrossed, ShoppingCart, LayoutDashboard, User as UserIcon, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { NoSsr } from './NoSsr';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';
import { Separator } from '../ui/separator';


export function Header() {
  const { cart } = useCart();
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast({
        title: 'Signed Out',
        description: 'You have been successfully signed out.',
      });
      router.push('/');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Sign Out Failed',
        description: 'There was a problem signing you out.',
      });
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center space-x-2">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">StreetVendorConnect</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mr-6">
          <Link href="/distributors" className="transition-colors hover:text-primary">
            Distributors
          </Link>
          <Link href="/delivery" className="transition-colors hover:text-primary">
            Delivery
          </Link>
        </nav>
        <div className="flex items-center justify-end space-x-2 md:space-x-4">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </Badge>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
          <NoSsr>
            <div className='hidden md:flex items-center gap-2'>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.photoURL || `https://i.pravatar.cc/150?u=${user.uid}`} alt={user.displayName || 'User'} />
                        <AvatarFallback>{user.displayName?.charAt(0) || 'U'}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.displayName || 'User'}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/account">
                          <UserIcon className="mr-2 h-4 w-4" />
                          <span>Account</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                   <Button variant="ghost" size="icon">
                     <Menu className="h-5 w-5" />
                   </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px]">
                    <div className="flex flex-col h-full">
                       <SheetClose asChild>
                          <Link href="/" className="mr-auto flex items-center space-x-2 mb-8">
                            <UtensilsCrossed className="h-6 w-6 text-primary" />
                            <span className="font-bold font-headline text-lg">StreetVendorConnect</span>
                          </Link>
                        </SheetClose>
                      <nav className="flex flex-col gap-4 text-lg font-medium">
                        <SheetClose asChild>
                          <Link href="/distributors" className="transition-colors hover:text-primary">Distributors</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/delivery" className="transition-colors hover:text-primary">Delivery</Link>
                        </SheetClose>
                      </nav>
                      <Separator className="my-6" />
                      {user ? (
                         <div className="flex flex-col gap-4 text-lg font-medium">
                            <SheetClose asChild>
                              <Link href="/dashboard" className="flex items-center gap-2">
                                  <LayoutDashboard className="h-5 w-5" />
                                  <span>Dashboard</span>
                              </Link>
                            </SheetClose>
                            <SheetClose asChild>
                               <Link href="/account" className="flex items-center gap-2">
                                  <UserIcon className="h-5 w-5" />
                                  <span>Account</span>
                              </Link>
                            </SheetClose>
                            <Separator />
                            <Button variant="ghost" onClick={handleSignOut} className='justify-start p-0 h-auto text-lg font-medium'>
                               <LogOut className="mr-2 h-5 w-5" />
                               <span>Log out</span>
                           </Button>
                         </div>
                      ): (
                        <div className='flex flex-col gap-4'>
                           <SheetClose asChild>
                             <Button asChild><Link href="/login">Log In</Link></Button>
                           </SheetClose>
                           <SheetClose asChild>
                             <Button asChild variant="outline"><Link href="/signup">Sign Up</Link></Button>
                           </SheetClose>
                        </div>
                      )}

                    </div>
                </SheetContent>
              </Sheet>
            </div>
          </NoSsr>
        </div>
      </div>
    </header>
  );
}
