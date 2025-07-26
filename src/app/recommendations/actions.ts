'use server';

import { run } from 'genkit/flow';
import { productNamerFlow } from '@/ai/flows/productNamer';

export async function getRecommendations(productName: string): Promise<{
  success: boolean;
  data?: string[];
  error?: string;
}> {
  if (!productName.trim()) {
    return { success: true, data: [] };
  }
  try {
    const result = await run(productNamerFlow, productName);
    return { success: true, data: result };
  } catch (e: any) {
    console.error('Error running productNamerFlow:', e);
    return { success: false, error: 'An unexpected error occurred while generating names. Please try again later.' };
  }
}
