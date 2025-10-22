"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Download } from 'lucide-react';

// This is a simplified check. For a robust solution, you might need a more comprehensive check.
const isPwaInstalled = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true;
};

export default function InstallPWA() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);

      // Show the install prompt only if not already installed and not dismissed before
      if (!isPwaInstalled() && !localStorage.getItem('pwaInstallDismissed')) {
        setShowInstallPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    setShowInstallPrompt(false);
    if (!deferredPrompt) {
      return;
    }
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    await deferredPrompt.userChoice;
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    localStorage.setItem('pwaInstallDismissed', 'true');
  };

  if (!showInstallPrompt) {
    return null;
  }

  return (
    <AlertDialog open={showInstallPrompt} onOpenChange={setShowInstallPrompt}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Download />
            Instalar SalvAID
          </AlertDialogTitle>
          <AlertDialogDescription>
            Instala esta aplicación en tu dispositivo para un acceso rápido y sin conexión a las guías de primeros auxilios y al asistente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleDismiss}>Más tarde</AlertDialogCancel>
          <AlertDialogAction onClick={handleInstallClick} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Instalar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
