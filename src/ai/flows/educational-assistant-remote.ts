'use server';

/**
 * @fileOverview Este archivo define un flujo de Genkit para que el Asistente Educativo proporcione consejos de primeros auxilios
 * llamando a un endpoint de IA local.
 *
 * - educationalAssistant - Una función que acepta una consulta y la reenvía a un modelo de IA local.
 * - EducationalAssistantInput - El tipo de entrada para la función educationalAssistant.
 * - EducationalAssistantOutput - El tipo de retorno para la función educationalAssistant.
 */

import {z} from 'genkit';
import {ai} from '@/ai/genkit';
import fetch from 'node-fetch';

const EducationalAssistantInputSchema = z.object({
  query: z.string().describe('La consulta del usuario sobre primeros auxilios.'),
});
export type EducationalAssistantInput = z.infer<typeof EducationalAssistantInputSchema>;

const EducationalAssistantOutputSchema = z.object({
  response: z.string().describe("La respuesta del asistente a la consulta del usuario."),
});
export type EducationalAssistantOutput = z.infer<typeof EducationalAssistantOutputSchema>;

export async function educationalAssistant(input: EducationalAssistantInput): Promise<EducationalAssistantOutput> {
  return educationalAssistantRemoteFlow(input);
}


const educationalAssistantRemoteFlow = ai.defineFlow(
  {
    name: 'educationalAssistantRemoteFlow',
    inputSchema: EducationalAssistantInputSchema,
    outputSchema: EducationalAssistantOutputSchema,
  },
  async (input) => {
    //
    // IMPORTANTE: Reemplaza esta URL con el endpoint de tu servidor de IA local.
    // El ejemplo usa el endpoint de Ollama, pero puedes adaptarlo a tu configuración.
    //
    const localAiEndpoint = 'http://localhost:11434/api/chat';

    const systemPrompt = `You are a first aid assistant. A user is asking you for advice. 
Provide a helpful and safe response. 
If the situation sounds like an emergency, please advise the user to call their local emergency number immediately.
Keep your responses concise and easy to understand.
The user's query is in Spanish. Please respond in Spanish.
`;

    const body = {
      model: "llama3", // Reemplaza con el nombre de tu modelo local si es necesario
      stream: false,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: input.query },
      ],
    };

    try {
      const response = await fetch(localAiEndpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error desde el endpoint de IA local: ${response.status} ${errorText}`);
      }

      const data: any = await response.json();
      
      // La estructura de la respuesta puede variar según tu servidor de IA.
      // Ajústalo según sea necesario. Este ejemplo es para Ollama.
      const messageContent = data.message?.content || "No se pudo obtener una respuesta.";

      return { response: messageContent };

    } catch (error: any) {
      console.error("Error al contactar el modelo de IA local:", error);
      throw new Error(`No se pudo conectar al servidor de IA local: ${error.message}`);
    }
  }
);
