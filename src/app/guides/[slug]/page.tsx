"use client";

import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SummarizeButton from '@/components/guides/SummarizeButton';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Loader2 } from 'lucide-react';
import BottomNavigation from '@/components/common/BottomNavigation';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/lib/db';
import ReadAloudButton from '@/components/guides/ReadAloudButton';

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = useLiveQuery(() => db.guides.get({ slug: params.slug }), [params.slug]);

  if (guide === undefined) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!guide) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find(p => p.id === guide.image);

  // Combine all steps for summarization and text-to-speech
  const fullGuideText = guide.content.map(section => 
    `${section.title}:\n${section.steps.map(step => `- ${step}`).join('\n')}`
  ).join('\n\n');


  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Header title={guide.title} subtitle={guide.description} />

        {placeholder && (
          <div className="relative h-60 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={placeholder.imageUrl}
              alt={placeholder.description}
              fill
              className="object-cover"
              data-ai-hint={placeholder.imageHint}
              priority
            />
          </div>
        )}

        <div className="flex justify-end gap-2 mb-6">
          <ReadAloudButton guideText={fullGuideText} />
          <SummarizeButton guideText={fullGuideText} />
        </div>

        <Accordion type="multiple" defaultValue={guide.content.map(c => c.title)} className="w-full">
          {guide.content.map((section, index) => (
            <AccordionItem value={section.title} key={index}>
              <AccordionTrigger className="text-xl font-headline font-semibold text-foreground/90 hover:text-foreground">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4 pl-4">
                  {section.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <BottomNavigation />
    </>
  );
}
