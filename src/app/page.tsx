import Image from 'next/image';
import Link from 'next/link';
import { guides } from '@/lib/data/guides';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from '@/components/common/Header';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="SalvAID" subtitle="Your First Aid Companion" />

      <section className="mt-8">
        <h2 className="text-2xl font-bold font-headline">Emergency Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {guides.map((guide) => {
            const placeholder = PlaceHolderImages.find(p => p.id === guide.image);
            const GuideIcon = guide.icon;

            return (
              <Link href={`/guides/${guide.slug}`} key={guide.slug} className="group">
                <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1">
                  <CardHeader>
                    {placeholder && (
                       <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                        <Image
                          src={placeholder.imageUrl}
                          alt={placeholder.description}
                          fill
                          className="object-cover"
                          data-ai-hint={placeholder.imageHint}
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                       <div className="bg-primary/10 p-2 rounded-lg">
                        <GuideIcon className="w-8 h-8 text-primary" />
                       </div>
                       <CardTitle className="font-headline text-xl">{guide.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <CardDescription>{guide.description}</CardDescription>
                    <div className="flex items-center justify-end text-primary font-semibold mt-4">
                      View Guide
                      <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
