
'use client';

import React from 'react';
import Link from 'next/link';
import { LifeBuoy } from 'lucide-react';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';
import { usePathname } from 'next/navigation';
import BackButton from './BackButton';
import { cn } from '@/lib/utils';

export default function MainHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-2">
            {!isHomePage && <BackButton />}
            <Link href="/" className="flex items-center space-x-2">
              <LifeBuoy className="h-6 w-6 text-primary" />
              <span className="font-bold inline-block">SalvAID</span>
            </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
