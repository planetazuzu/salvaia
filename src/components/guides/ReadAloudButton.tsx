"use client";

import { useState, useTransition, useRef, useEffect } from 'react';
import { textToSpeechAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Volume2, Loader2, AlertTriangle, Square, Play } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function ReadAloudButton({ guideText }: { guideText: string }) {
  const [isPending, startTransition] = useTransition();
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const handlePlay = () => {
    if (audioSrc) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
    } else {
      startTransition(async () => {
        const result = await textToSpeechAction({ text: guideText });
        if (result.success) {
          setAudioSrc(result.audio);
        } else {
          toast({
            variant: "destructive",
            title: "Error de Audio",
            description: result.error,
          });
        }
      });
    }
  };

  useEffect(() => {
    if (audioSrc && audioRef.current) {
      audioRef.current.play();
    }
  }, [audioSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setAudioSrc(null); // Reset to allow re-generation
    };

    if (audio) {
      audio.addEventListener('play', handlePlaying);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('play', handlePlaying);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
      }
    };
  }, [audioRef.current]);

  return (
    <>
      <Button onClick={handlePlay} disabled={isPending} variant="outline">
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generando...
          </>
        ) : isPlaying ? (
          <>
            <Square className="mr-2 h-4 w-4" />
            Detener
          </>
        ) : (
          <>
            <Volume2 className="mr-2 h-4 w-4" />
            Leer en voz alta
          </>
        )}
      </Button>
      {audioSrc && <audio ref={audioRef} src={audioSrc} />}
    </>
  );
}
