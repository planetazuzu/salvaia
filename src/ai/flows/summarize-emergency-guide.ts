'use server';
/**
 * @fileOverview An AI agent that summarizes emergency guides into key points.
 *
 * - summarizeEmergencyGuide - A function that summarizes the emergency guide.
 * - SummarizeEmergencyGuideInput - The input type for the summarizeEmergencyGuide function.
 * - SummarizeEmergencyGuideOutput - The return type for the summarizeEmergencyGuide function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeEmergencyGuideInputSchema = z.object({
  guideText: z.string().describe('The text content of the emergency guide to summarize.'),
});
export type SummarizeEmergencyGuideInput = z.infer<typeof SummarizeEmergencyGuideInputSchema>;

const SummarizeEmergencyGuideOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the emergency guide in English.'),
});
export type SummarizeEmergencyGuideOutput = z.infer<typeof SummarizeEmergencyGuideOutputSchema>;

export async function summarizeEmergencyGuide(input: SummarizeEmergencyGuideInput): Promise<SummarizeEmergencyGuideOutput> {
  return summarizeEmergencyGuideFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeEmergencyGuidePrompt',
  input: {schema: SummarizeEmergencyGuideInputSchema},
  output: {schema: SummarizeEmergencyGuideOutputSchema},
  prompt: `Summarize the following emergency guide into key points, in English:

  {{{guideText}}}
  `,
});

const summarizeEmergencyGuideFlow = ai.defineFlow(
  {
    name: 'summarizeEmergencyGuideFlow',
    inputSchema: SummarizeEmergencyGuideInputSchema,
    outputSchema: SummarizeEmergencyGuideOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
