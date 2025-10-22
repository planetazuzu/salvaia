'use server';

import { educationalAssistant, EducationalAssistantInput } from '@/ai/flows/educational-assistant-remote';
import { summarizeEmergencyGuide, SummarizeEmergencyGuideInput } from '@/ai/flows/summarize-emergency-guide';
import { generateFirstAidTip, GenerateFirstAidTipInput } from '@/ai/flows/generate-first-aid-tips';
import { textToSpeech, TextToSpeechInput } from '@/ai/flows/text-to-speech';

export async function askLiaAction(input: EducationalAssistantInput) {
  try {
    const output = await educationalAssistant(input);
    return { success: true, response: output.response };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Ocurrió un error al contactar al asistente. Por favor, inténtalo de nuevo.' };
  }
}

export async function summarizeGuideAction(input: SummarizeEmergencyGuideInput) {
  try {
    const output = await summarizeEmergencyGuide(input);
    return { success: true, summary: output.summary };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Ocurrió un error al resumir la guía.' };
  }
}

export async function generateTipAction(input: GenerateFirstAidTipInput) {
  try {
    const output = await generateFirstAidTip(input);
    return { success: true, tip: output };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Ocurrió un error al generar el consejo.' };
  }
}

export async function textToSpeechAction(input: TextToSpeechInput) {
  try {
    const output = await textToSpeech(input);
    return { success: true, audio: output.audioDataUri };
  } catch (error) {
    console.error('Error in textToSpeechAction:', error);
    return { success: false, error: 'Ocurrió un error al generar el audio.' };
  }
}
