"use client";

import { useState, useRef, useEffect, useTransition } from 'react';
import { askLiaAction } from '@/lib/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
  id: number;
  sender: 'user' | 'assistant';
  text: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'assistant', text: "¡Hola! Soy tu asistente de primeros auxilios. ¿Cómo puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      const result = await askLiaAction({ query: input });
      const assistantMessage: Message = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: result.success ? result.response : result.error || "Lo siento, algo salió mal.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    });
  };

  return (
    <div className="flex-grow flex flex-col h-full bg-transparent">
      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-3',
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.sender === 'assistant' && (
                <Avatar className="w-10 h-10 border-2 border-primary/50">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    <Bot />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-md p-3 rounded-lg',
                  message.sender === 'user'
                    ? 'bg-accent text-accent-foreground rounded-br-none'
                    : 'bg-card border rounded-bl-none'
                )}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              </div>
              {message.sender === 'user' && (
                <Avatar className="w-10 h-10 border-2 border-secondary/50">
                  <AvatarFallback className="bg-secondary/20 text-secondary-foreground">
                    <User />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isPending && (
            <div className="flex items-start gap-3 justify-start">
               <Avatar className="w-10 h-10 border-2 border-primary/50">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    <Bot />
                  </AvatarFallback>
                </Avatar>
              <div className="bg-card border rounded-lg p-3 rounded-bl-none">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin"/>
                  <span>El asistente está pensando...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="p-4 bg-card/50 border-t">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pregunta sobre una situación de primeros auxilios..."
            className="flex-grow"
            disabled={isPending}
          />
          <Button type="submit" size="icon" disabled={!input.trim() || isPending}>
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
