"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateTipAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Wand2, Loader2, Lightbulb, Newspaper, ShieldAlert } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import type { Tip } from '@/lib/data/tips';

const formSchema = z.object({
  topic: z.string().min(3, "Topic must be at least 3 characters long."),
  guidelines: z.string().min(10, "Guidelines must be at least 10 characters long."),
});

type GenerateTipProps = {
  initialTips: Tip[];
};

const categoryIcons: Record<string, JSX.Element> = {
  'Tip': <Lightbulb className="w-4 h-4" />,
  'News': <Newspaper className="w-4 h-4" />,
  'Myth Buster': <ShieldAlert className="w-4 h-4" />,
};

export default function GenerateTip({ initialTips }: GenerateTipProps) {
  const [tips, setTips] = useState<Tip[]>(initialTips);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      guidelines: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      const result = await generateTipAction(values);
      if (result.success && result.tip) {
        const newTip: Tip = {
          id: Date.now().toString(),
          title: result.tip.title,
          content: result.tip.content,
          category: 'Tip',
        };
        setTips(prev => [newTip, ...prev]);
        toast({
          title: "New Tip Generated!",
          description: `Successfully created a tip about "${result.tip.title}".`,
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
            Generate a New Tip with AI
          </CardTitle>
          <CardDescription>
            Provide a topic and some guidelines or new information, and our AI will create a new tip for the community.
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
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Treating Bee Stings" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="guidelines"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guidelines / Key Information</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., New study shows scraping is not better than pulling out the stinger." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Tip
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Separator className="my-8" />
      
      <div className="space-y-6">
        {tips.map((tip) => (
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
