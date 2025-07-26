'use client';

import Link from 'next/link';
import { UtensilsCrossed } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/40 mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">StreetVendorConnect</span>
            </Link>
            <p className="text-sm text-muted-foreground">Connecting communities, one street meal at a time.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Vendors</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/signup" className="text-sm text-muted-foreground hover:text-primary">Become a Vendor</Link>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary">Dashboard</Link>
                <Link href="/seller" className="text-sm text-muted-foreground hover:text-primary">Seller Info</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} StreetVendorConnect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
