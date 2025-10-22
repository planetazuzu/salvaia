"use client";

import { useState, useTransition } from 'react';
import { summarizeGuideAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Wand2, Loader2, AlertTriangle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function SummarizeButton({ guideText }: { guideText: string }) {
  const [isPending, startTransition] = useTransition();
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = () => {
    startTransition(async () => {
      setError(null);
      setSummary(null);
      const result = await summarizeGuideAction({ guideText });
      if (result.success) {
        setSummary(result.summary);
      } else {
        setError(result.error);
      }
    });
  };

  return (
    <>
      <Button onClick={handleSummarize} disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Resumiendo...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Resumir con IA
          </>
        )}
      </Button>

      <AlertDialog open={!!summary || !!error} onOpenChange={() => { setSummary(null); setError(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              {error ? <AlertTriangle className="text-destructive" /> : <Wand2 />}
              {error ? "Error" : "Resumen de IA"}
            </AlertDialogTitle>
            <AlertDialogDescription className={error ? "text-destructive" : ""}>
              <div className="whitespace-pre-wrap">{summary || error}</div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => { setSummary(null); setError(null); }}>Cerrar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
