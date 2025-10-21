"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LifeBuoy, Bot, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Guides', icon: LifeBuoy },
  { href: '/lia', label: 'Lia', icon: Bot },
  { href: '/tips', label: 'Tips', icon: Newspaper },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-card border-t shadow-t-lg z-50">
      <div className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = (pathname === '/' && item.href === '/') || (pathname.startsWith(item.href) && item.href !== '/');
          const Icon = item.icon;

          return (
            <Link href={item.href} key={item.href}>
              <div
                className={cn(
                  'flex flex-col items-center justify-center gap-1 text-muted-foreground w-24 h-full transition-colors duration-200 ease-in-out',
                  isActive ? 'text-primary' : 'hover:text-primary/80'
                )}
              >
                <Icon className="w-7 h-7" />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
