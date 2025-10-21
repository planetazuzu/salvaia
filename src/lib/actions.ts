'use server';

import { educationalAssistantRemote, EducationalAssistantRemoteInput } from '@/ai/flows/educational-assistant-remote';
import { summarizeEmergencyGuide, SummarizeEmergencyGuideInput } from '@/ai/flows/summarize-emergency-guide';
import { generateFirstAidTip, GenerateFirstAidTipInput } from '@/ai/flows/generate-first-aid-tips';

export async function askLiaAction(input: EducationalAssistantRemoteInput) {
  try {
    const output = await educationalAssistantRemote(input);
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
    return { success: false, error: 'An error occurred while summarizing the guide.' };
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
