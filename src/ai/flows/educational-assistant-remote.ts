'use server';

/**
 * @fileOverview This file defines a Genkit flow for the Educational Assistant (Lia) to provide first aid advice from a remote server.
 *
 * - educationalAssistantRemote - A function that accepts a query and returns Lia's response from the remote server.
 * - EducationalAssistantRemoteInput - The input type for the educationalAssistantRemote function.
 * - EducationalAssistantRemoteOutput - The return type for the educationalAssistantRemote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EducationalAssistantRemoteInputSchema = z.object({
  query: z.string().describe('The user query about first aid.'),
});
export type EducationalAssistantRemoteInput = z.infer<typeof EducationalAssistantRemoteInputSchema>;

const EducationalAssistantRemoteOutputSchema = z.object({
  response: z.string().describe('Lia\'s response to the user query from the remote server.'),
});
export type EducationalAssistantRemoteOutput = z.infer<typeof EducationalAssistantRemoteOutputSchema>;

export async function educationalAssistantRemote(input: EducationalAssistantRemoteInput): Promise<EducationalAssistantRemoteOutput> {
  return educationalAssistantRemoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'educationalAssistantRemotePrompt',
  input: {schema: EducationalAssistantRemoteInputSchema},
  output: {schema: EducationalAssistantRemoteOutputSchema},
  prompt: `You are Lia, a helpful AI assistant specializing in providing first aid advice. A user has asked the following question. Answer it using your knowledge and reasoning, and tailor the response to their specific situation. If you do not have enough information to answer the question, respond that you are unable to assist with that particular query.

Query: {{{query}}} `,
});

const educationalAssistantRemoteFlow = ai.defineFlow(
  {
    name: 'educationalAssistantRemoteFlow',
    inputSchema: EducationalAssistantRemoteInputSchema,
    outputSchema: EducationalAssistantRemoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
