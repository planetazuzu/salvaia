"use client";

import Header from '@/components/common/Header';
import GenerateTip from '@/components/tips/GenerateTip';
import { Metadata } from 'next';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/lib/db';
import { Loader2 } from 'lucide-react';

// Metadata is now static as we can't export it from a client component.
// For dynamic metadata, you would use the `generateMetadata` export.
// export const metadata: Metadata = {
//   title: 'Consejos y Noticias',
//   description: 'Mantente actualizado con los últimos consejos y noticias de primeros auxilios.',
// };

export default function TipsPage() {
  const initialTips = useLiveQuery(() => db.tips.toArray(), []);

  if (!initialTips) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="Consejos y Noticias" subtitle="Mantente actualizado y preparado" />

      <GenerateTip initialTips={initialTips} />

    </div>
  );
}
