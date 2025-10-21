import { guides } from '@/lib/data/guides';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, PlusCircle, BookOpen } from 'lucide-react';
import Header from '@/components/common/Header';

const GuideCard = ({ guide }) => (
  <Link href={`/guides/${guide.slug}`} className="block">
    <Card className="bg-card text-card-foreground rounded-2xl shadow-lg flex flex-col justify-between p-4 h-full hover:bg-card/90 transition-colors">
      <div>
        <guide.icon className="w-8 h-8 mb-2 text-primary" />
        <h3 className="font-bold text-lg">{guide.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mt-2">{guide.description}</p>
    </Card>
  </Link>
);


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Header title="Asistente de Primeros Auxilios" subtitle="Guías rápidas para emergencias" />

      <section className="grid grid-cols-2 gap-4 mb-8">
        {guides.slice(0, 4).map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Más Guías</h2>
        <div className="space-y-3">
          {guides.slice(4).map((guide) => (
             <Link href={`/guides/${guide.slug}`} key={guide.slug} className="block">
                <Card className="p-4 rounded-lg flex items-center gap-4 hover:bg-card/90 transition-colors">
                    <guide.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div className='flex-grow'>
                        <h3 className="font-semibold">{guide.title}</h3>
                        <p className="text-sm text-muted-foreground">{guide.description}</p>
                    </div>
                </Card>
             </Link>
          ))}
        </div>
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
