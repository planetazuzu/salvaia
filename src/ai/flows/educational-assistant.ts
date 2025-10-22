'use server';

/**
 * @fileOverview This file defines a Genkit flow for the Educational Assistant to provide first aid advice.
 *
 * - educationalAssistant - A function that accepts a query and returns a response from the AI model.
 * - EducationalAssistantInput - The input type for the educationalAssistant function.
 * - EducationalAssistantOutput - The return type for the educationalAssistant function.
 */

import {z} from 'genkit';
import {ai} from '@/ai/genkit';

const EducationalAssistantInputSchema = z.object({
  query: z.string().describe('The user query about first aid.'),
});
export type EducationalAssistantInput = z.infer<typeof EducationalAssistantInputSchema>;

const EducationalAssistantOutputSchema = z.object({
  response: z.string().describe("The assistant's response to the user query."),
});
export type EducationalAssistantOutput = z.infer<typeof EducationalAssistantOutputSchema>;

export async function educationalAssistant(input: EducationalAssistantInput): Promise<EducationalAssistantOutput> {
  return educationalAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'educationalAssistantPrompt',
  input: {schema: EducationalAssistantInputSchema},
  output: {schema: EducationalAssistantOutputSchema},
  prompt: `You are a first aid assistant. A user is asking you for advice. 
  Provide a helpful and safe response. 
  If the situation sounds like an emergency, please advise the user to call their local emergency number immediately.
  Keep your responses concise and easy to understand.
  The user's query is in Spanish. Please respond in Spanish.

  Query: {{{query}}}
  `,
});


const educationalAssistantFlow = ai.defineFlow(
  {
    name: 'educationalAssistantFlow',
    inputSchema: EducationalAssistantInputSchema,
    outputSchema: EducationalAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
