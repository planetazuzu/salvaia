import Header from '@/components/common/Header';
import { tips as initialTips } from '@/lib/data/tips';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import GenerateTip from '@/components/tips/GenerateTip';
import { Lightbulb, Newspaper, ShieldAlert } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tips & News',
  description: 'Stay updated with the latest first aid tips and news.',
};

const categoryIcons = {
  'Tip': <Lightbulb className="w-4 h-4" />,
  'News': <Newspaper className="w-4 h-4" />,
  'Myth Buster': <ShieldAlert className="w-4 h-4" />,
};

const categoryColors = {
  'Tip': 'bg-blue-100 text-blue-800 border-blue-200',
  'News': 'bg-purple-100 text-purple-800 border-purple-200',
  'Myth Buster': 'bg-red-100 text-red-800 border-red-200',
};


export default function TipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="Tips & News" subtitle="Stay updated and prepared" />

      <GenerateTip initialTips={initialTips} />

    </div>
  );
}
