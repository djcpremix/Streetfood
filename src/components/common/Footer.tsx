
'use client';

import Link from 'next/link';
import { UtensilsCrossed, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-muted/40 mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">StreetVendorConnect</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">Connecting street food vendors with quality suppliers and reliable delivery partners.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Vendors</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/seller" className="text-sm text-muted-foreground hover:text-primary">Become a Vendor</Link>
              <Link href="/delivery" className="text-sm text-muted-foreground hover:text-primary">Delivery Partners</Link>
              <Link href="/distributors" className="text-sm text-muted-foreground hover:text-primary">Find Suppliers</Link>
            </nav>
          </div>
           <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between">
           <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} StreetVendorConnect. All Rights Reserved.
          </p>
           <div className="flex items-center space-x-4 mt-4 md:mt-0">
               <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
               <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
