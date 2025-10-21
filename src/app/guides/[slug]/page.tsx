import { notFound } from 'next/navigation';
import { guides } from '@/lib/data/guides';
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
import { CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find(p => p.id === guide.image);

  // Combine all steps for summarization
  const fullGuideText = guide.content.map(section => 
    `${section.title}:\n${section.steps.join('\n')}`
  ).join('\n\n');


  return (
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

      <div className="flex justify-end mb-6">
        <SummarizeButton guideText={fullGuideText} />
      </div>

      <Accordion type="multiple" defaultValue={guide.content.map(c => c.title)} className="w-full">
        {guide.content.map((section, index) => (
          <AccordionItem value={section.title} key={index}>
            <AccordionTrigger className="text-xl font-headline font-semibold text-gray-800/90 hover:text-gray-800">
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
  );
}
