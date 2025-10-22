'use server';

/**
 * @fileOverview This file defines a Genkit flow for the Educational Assistant to provide first aid advice from a remote server.
 *
 * - educationalAssistantRemote - A function that accepts a query and returns the response from the remote server.
 * - EducationalAssistantRemoteInput - The input type for the educationalAssistantRemote function.
 * - EducationalAssistantRemoteOutput - The return type for the educationalAssistantRemote function.
 */

import {z} from 'genkit';
import {ai} from '@/ai/genkit';
import fetch from 'node-fetch';

const EducationalAssistantRemoteInputSchema = z.object({
  query: z.string().describe('The user query about first aid.'),
});
export type EducationalAssistantRemoteInput = z.infer<typeof EducationalAssistantRemoteInputSchema>;

const EducationalAssistantRemoteOutputSchema = z.object({
  response: z.string().describe("The assistant's response to the user query from the remote server."),
});
export type EducationalAssistantRemoteOutput = z.infer<typeof EducationalAssistantRemoteOutputSchema>;

export async function educationalAssistantRemote(input: EducationalAssistantRemoteInput): Promise<EducationalAssistantRemoteOutput> {
  return educationalAssistantRemoteFlow(input);
}


const educationalAssistantRemoteFlow = ai.defineFlow(
  {
    name: 'educationalAssistantRemoteFlow',
    inputSchema: EducationalAssistantRemoteInputSchema,
    outputSchema: EducationalAssistantRemoteOutputSchema,
  },
  async input => {
    // =================================================================================
    // TODO: Replace with the actual URL of your remotely trained AI model endpoint.
    // =================================================================================
    const remoteApiUrl = 'https://example.com/your-ai-endpoint';
    
    try {
      const response = await fetch(remoteApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input.query }),
      });

      if (!response.ok) {
        throw new Error(`Remote API request failed with status ${response.status}`);
      }

      const data: EducationalAssistantRemoteOutput = await response.json();
      
      // Ensure the response from the remote server matches the expected schema.
      const parsed = EducationalAssistantRemoteOutputSchema.parse(data);
      return parsed;

    } catch (error) {
      console.error('Error calling remote AI assistant:', error);
      // Provide a fallback response in case of an error.
      return {
        response: "Lo siento, no pude conectarme con el asistente remoto en este momento. Por favor, inténtalo de nuevo más tarde."
      };
    }
  }
);
