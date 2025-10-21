import Header from '@/components/common/Header';
import Chat from '@/components/lia/Chat';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asistente Lia',
  description: 'Pregúntale a Lia, tu Asistente de IA de Primeros Auxilios, para que te aconseje.',
};

export default function LiaPage() {
  return (
    <div className="container mx-auto px-4 py-8 h-full flex flex-col">
      <Header title="Lia" subtitle="Tu Asistente de IA de Primeros Auxilios" />
      <div className="flex-grow flex flex-col -mx-4">
        <Chat />
      </div>
    </div>
  );
}
