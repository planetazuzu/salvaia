import { Bell, Briefcase, MessageSquare, Newspaper, Smartphone, Megaphone, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';


const TopCard = ({ icon: Icon, title, subtitle, bgColorClass, textColorClass, large = false }) => (
  <Card className={`${bgColorClass} ${textColorClass} rounded-2xl shadow-lg flex flex-col justify-between p-4 ${large ? 'row-span-2' : ''}`}>
    <div>
      <Icon className="w-6 h-6 mb-2" />
      <h3 className="font-bold text-lg">{title}</h3>
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </div>
  </Card>
);

const BottomCard = ({ icon: Icon, title }) => (
  <Card className="bg-accent text-accent-foreground rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 aspect-square">
    <Icon className="w-8 h-8 mb-2" />
    <h3 className="font-bold text-center text-sm">{title}</h3>
  </Card>
);


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-extrabold text-foreground">Osalan.app</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">EU</Button>
          <Button variant="ghost" size="icon">
            <Info className="w-6 h-6" />
          </Button>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-foreground leading-tight">
          Hola, ¿en qué te <br /> podemos ayudar hoy?
        </h2>
      </section>

      <section className="grid grid-cols-2 grid-rows-2 gap-4 mb-8">
        <Card className="bg-primary text-primary-foreground rounded-2xl shadow-lg flex flex-col justify-end p-4 row-span-2">
            <MessageSquare className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-xl">Asistente</h3>
            <p>Virtual PRL</p>
        </Card>
        
        <Card className="bg-orange-400 text-black rounded-2xl shadow-lg flex flex-col justify-end p-4">
             <Bell className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-xl">Alertas PRL</h3>
        </Card>

        <Card className="bg-yellow-400 text-black rounded-2xl shadow-lg flex flex-col justify-end p-4">
            <Megaphone className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-xl">Consejos</h3>
        </Card>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Y además</h2>
        <div className="grid grid-cols-3 gap-4">
          <BottomCard icon={Newspaper} title="NOTICIAS" />
          <BottomCard icon={Smartphone} title="DIGITALAN" />
          <BottomCard icon={Briefcase} title="OSALAN" />
        </div>
      </section>

      <section className="bg-red-500 text-white p-4 rounded-2xl mb-4 shadow-lg">
          <div className="flex gap-4 items-center">
            <div className="bg-red-400 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            </div>
            <div>
              <h3 className="font-bold">Seguridad y salud en el trabajo para todas las personas</h3>
              <p className="text-sm">Semana Europea SST 2025</p>
            </div>
          </div>
      </section>

      <div className="bg-yellow-200 border border-yellow-300 text-black p-4 rounded-2xl flex justify-between items-center shadow-lg">
        <p className="font-semibold">Añade un acceso directo de Osalan.app en la pantalla de inicio de tu móvil</p>
        <Button variant="ghost" size="icon">
          <X className="w-5 h-5"/>
        </Button>
      </div>

    </div>
  );
}
