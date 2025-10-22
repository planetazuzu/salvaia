"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateTipAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Wand2, Loader2, Lightbulb, Newspaper, ShieldAlert } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import type { StorableTip } from '@/lib/db';
import { db } from '@/lib/db';

const formSchema = z.object({
  topic: z.string().min(3, "El tema debe tener al menos 3 caracteres."),
});

type GenerateTipProps = {
  initialTips: StorableTip[];
};

const categoryIcons: Record<string, JSX.Element> = {
  'Consejo': <Lightbulb className="w-4 h-4" />,
  'Noticia': <Newspaper className="w-4 h-4" />,
  'Mito': <ShieldAlert className="w-4 h-4" />,
};

export default function GenerateTip({ initialTips }: GenerateTipProps) {
  // The local state `tips` is now only for optimistic updates.
  // The source of truth is the live query from the parent component.
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      const result = await generateTipAction(values);
      if (result.success && result.tip) {
        // For now, new tips are categorized as 'Consejo'. Could be improved later.
        const newTip: StorableTip = {
          id: Date.now().toString(),
          title: result.tip.title,
          content: result.tip.content,
          category: 'Consejo', 
        };
        // Add to Dexie DB, and useLiveQuery will update the UI.
        await db.tips.add(newTip);

        toast({
          title: "¡Nuevo consejo generado!",
          description: `Se ha creado con éxito un consejo sobre "${result.tip.title}".`,
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      }
    });
  };

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 />
            Generar un Nuevo Consejo con IA
          </CardTitle>
          <CardDescription>
            Introduce un tema y la IA generará un consejo o noticia relevante, basándose en información de fuentes de salud confiables como la OMS.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tema</FormLabel>
                    <FormControl>
                      <Input placeholder="p.ej., Nuevas guías de RCP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generar Contenido
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Separator className="my-8" />
      
      <div className="space-y-6">
        {initialTips.slice().reverse().map((tip) => (
          <Card key={tip.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{tip.content}</CardDescription>
            </CardContent>
            <CardFooter>
              <Badge variant="outline" className="flex items-center gap-2">
                {categoryIcons[tip.category] || <Lightbulb className="w-4 h-4" />}
                {tip.category}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
