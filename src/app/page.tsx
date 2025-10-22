"use client";

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, icons, Loader2 } from 'lucide-react';
import Header from '@/components/common/Header';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, StorableGuide } from '@/lib/db';
import React from 'react';

const GuideCard = ({ guide }: { guide: StorableGuide }) => {
  const Icon = icons[guide.iconName as keyof typeof icons] || BookOpen;
  return (
    <Link href={`/guides/${guide.slug}`} className="block h-full">
      <Card className="bg-card text-card-foreground rounded-2xl shadow-lg flex flex-col justify-between p-4 h-full hover:bg-card/90 transition-colors">
        <div>
          <Icon className="w-8 h-8 mb-2 text-primary" />
          <h3 className="font-bold text-lg">{guide.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{guide.description}</p>
      </Card>
    </Link>
  );
};


export default function Home() {
  const guides = useLiveQuery(() => db.guides.toArray(), []);

  if (!guides) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-6">
      <Header title="Asistente de Primeros Auxilios" subtitle="Guías rápidas para emergencias" />

      <section className="grid grid-cols-2 gap-4 mb-8">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </section>

      <div className="bg-primary/10 border border-primary/20 text-primary-foreground p-4 rounded-2xl flex justify-between items-center shadow-lg">
        <div className='flex items-center gap-4'>
            <BookOpen className='w-8 h-8 text-primary'/>
            <p className="font-semibold text-primary">¿No encuentras lo que buscas? Pregúntale al Asistente.</p>
        </div>
        <Button variant="default" size="sm" asChild>
            <Link href="/lia">
                Ir al Asistente
            </Link>
        </Button>
      </div>

    </div>
  );
}
