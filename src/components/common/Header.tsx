import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, className }) => {
  return (
    <header className={cn("mb-6", className)}>
      <h1 className="text-4xl font-bold font-headline text-primary tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-1 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </header>
  );
};

export default Header;
