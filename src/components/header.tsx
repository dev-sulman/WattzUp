'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Siren, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/lib/types';
import { EmergencyDialog } from './emergency-dialog';

const navItems: NavItem[] = [
  { title: 'Home', href: '/', exact: true },
  { title: 'Our Services', href: '/services' },
  { title: 'Find an Electrician', href: '/find-electrician' },
  { title: 'Cost Estimator', href: '/cost-estimator' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block !font-headline">
              WattzUp
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  (item.exact ? pathname === item.href : pathname.startsWith(item.href))
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-2">
               <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold !font-headline">WattzUp</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      'transition-colors hover:text-foreground/80',
                      (item.exact ? pathname === item.href : pathname.startsWith(item.href))
                        ? 'text-foreground font-semibold'
                        : 'text-foreground/60'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="flex items-center space-x-2 md:hidden">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-bold !font-headline">WattzUp</span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
            <EmergencyDialog>
                <Button variant="destructive" className="animate-pulse">
                    <Siren className="mr-2 h-4 w-4" />
                    Emergency
                </Button>
            </EmergencyDialog>
        </div>
      </div>
    </header>
  );
}
