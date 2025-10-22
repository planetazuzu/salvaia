import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import InstallPWA from '@/components/common/InstallPWA';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import MainHeader from '@/components/common/MainHeader';
import { DataSyncProvider } from '@/components/common/DataSyncProvider';
import PageTransition from '@/components/common/PageTransition';
import BottomNavigation from '@/components/common/BottomNavigation';


export const metadata: Metadata = {
  title: {
    default: "SalvAID",
    template: "%s | SalvAID",
  },
  description: 'Tu Asistente de Primeros Auxilios',
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={cn("font-body antialiased min-h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DataSyncProvider>
            <div className="relative flex flex-col h-screen">
              <MainHeader />
              <main className="flex-1 overflow-y-auto pb-24">
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
              <BottomNavigation />
            </div>
            <Toaster />
            <InstallPWA />
          </DataSyncProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
