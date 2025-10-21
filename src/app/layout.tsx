import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import BottomNavigation from '@/components/common/BottomNavigation';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: "SalvAID",
    template: "%s | SalvAID",
  },
  description: 'Your First Aid Companion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E0F8F8" />
      </head>
      <body className={cn("font-body antialiased min-h-screen")}>
        <div className="relative flex flex-col h-screen">
          <main className="flex-1 pb-24 overflow-y-auto">
            {children}
          </main>
          <BottomNavigation />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
