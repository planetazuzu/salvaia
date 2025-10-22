'use server';

/**
 * @fileOverview A flow to generate first aid tips and news items using an AI model.
 *
 * - generateFirstAidTip - A function that generates a first aid tip or news item.
 * - GenerateFirstAidTipInput - The input type for the generateFirstAidTip function.
 * - GenerateFirstAidTipOutput - The return type for the generateFirstAidTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFirstAidTipInputSchema = z.object({
  topic: z.string().describe('The topic for the first aid tip or news item.'),
});
export type GenerateFirstAidTipInput = z.infer<typeof GenerateFirstAidTipInputSchema>;

const GenerateFirstAidTipOutputSchema = z.object({
  title: z.string().describe('The title of the first aid tip or news item.'),
  content: z.string().describe('The content of the first aid tip or news item.'),
});
export type GenerateFirstAidTipOutput = z.infer<typeof GenerateFirstAidTipOutputSchema>;

export async function generateFirstAidTip(input: GenerateFirstAidTipInput): Promise<GenerateFirstAidTipOutput> {
  return generateFirstAidTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFirstAidTipPrompt',
  input: {schema: GenerateFirstAidTipInputSchema},
  output: {schema: GenerateFirstAidTipOutputSchema},
  prompt: `You are an expert in first aid and emergency preparedness. Your task is to generate a concise and informative first aid tip or news item based on the provided topic.

You should act as an editor summarizing the latest guidelines from reputable health organizations like the World Health Organization (WHO) or the Red Cross.

Topic: {{{topic}}}

Please provide a title and content for the tip. The content should be easily understandable by a general audience.
`,
});

const generateFirstAidTipFlow = ai.defineFlow(
  {
    name: 'generateFirstAidTipFlow',
    inputSchema: GenerateFirstAidTipInputSchema,
    outputSchema: GenerateFirstAidTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
