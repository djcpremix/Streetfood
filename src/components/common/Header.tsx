import Link from 'next/link';
import { UtensilsCrossed, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">StreetVendorConnect</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Discover
          </Link>
          <Link href="/recommendations" className="transition-colors hover:text-primary">
            AI Tools
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button>
            <UserCircle className="mr-2 h-5 w-5" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
