'use server';
/**
 * @fileOverview An AI-powered product namer.
 *
 * - getProductRecommendations - A function that suggests creative names for a street food item.
 */
import {z} from 'zod';
import {ai} from '../genkit';

const NamerInputSchema = z.object({
  productName: z.string(),
});

const NamerOutputSchema = z.object({
  recommendations: z.array(z.string()),
});

const productNamerPrompt = ai.definePrompt({
  name: 'productNamerPrompt',
  input: {
    schema: NamerInputSchema,
  },
  output: {
    schema: NamerOutputSchema,
  },
  prompt: `You are an expert at naming street food items.
Given a product name, generate 5 alternative, creative, and trending names for it.
Return the response as a JSON object with a key "recommendations" that contains an array of strings.

Example input: Samosa
Example output: { "recommendations": ["Samosa Pockets", "Spicy Potato Triangles", "Golden Parcels", "Samosa Bites", "Crispy Veggie Triangles"] }

Input: {{{productName}}}
`,
});

const productNamerFlow = ai.defineFlow(
  {
    name: 'productNamerFlow',
    inputSchema: NamerInputSchema,
    outputSchema: NamerOutputSchema,
    description: 'Suggests creative names for a street food item.',
  },
  async (input) => {
    // In a real app, you might have more complex logic,
    // like checking trends or successful vendor menus.
    if (!input.productName) {
      return {recommendations: []};
    }

    const llmResponse = await productNamerPrompt(input);
    return llmResponse.output() ?? {recommendations: []};
  }
);

export async function getProductRecommendations(
  productName: string
): Promise<string[]> {
  const result = await productNamerFlow({productName});
  return result.recommendations;
}
