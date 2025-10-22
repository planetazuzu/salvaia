import Header from '@/components/common/Header';
import { tips as initialTips } from '@/lib/data/tips';
import GenerateTip from '@/components/tips/GenerateTip';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consejos y Noticias',
  description: 'Mantente actualizado con los últimos consejos y noticias de primeros auxilios.',
};

export default function TipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="Consejos y Noticias" subtitle="Mantente actualizado y preparado" />

      <GenerateTip initialTips={initialTips} />

    </div>
  );
}
