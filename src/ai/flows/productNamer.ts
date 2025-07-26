import { defineFlow } from '@genkit-ai/flow';
import { z } from 'zod';
import { ai } from '../genkit';

const productNamerPrompt = `You are an expert at naming street food items.
Given a product name, generate 5 alternative, creative, and trending names for it.
Return the response as a JSON array of strings.

Example input: Samosa
Example output: ["Samosa Pockets", "Spicy Potato Triangles", "Golden Parcels", "Samosa Bites", "Crispy Veggie Triangles"]
`;

export const productNamerFlow = defineFlow(
  {
    name: 'productNamerFlow',
    inputSchema: z.string(),
    outputSchema: z.array(z.string()),
    description: 'Suggests creative names for a street food item.',
  },
  async (productName) => {
    // In a real app, you might have more complex logic,
    // like checking trends or successful vendor menus.
    if (!productName) {
      return [];
    }

    const llmResponse = await ai.generate({
      prompt: `${productNamerPrompt}\nInput: ${productName}`,
      model: 'googleai/gemini-2.0-flash',
      config: {
        temperature: 0.8,
      },
      output: {
        format: 'json',
        schema: z.array(z.string()),
      },
    });

    return llmResponse.output() ?? [];
  }
);
