import Header from '@/components/common/Header';
import Chat from '@/components/lia/Chat';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lia Assistant',
  description: 'Ask Lia, your AI First Aid Assistant, for advice.',
};

export default function LiaPage() {
  return (
    <div className="container mx-auto px-4 py-8 h-full flex flex-col">
      <Header title="Lia" subtitle="Your AI First Aid Assistant" />
      <div className="flex-grow flex flex-col -mx-4">
        <Chat />
      </div>
    </div>
  );
}
