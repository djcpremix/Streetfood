'use server';
/**
 * @fileOverview A chatbot flow for StreetVendorConnect.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ChatbotInputSchema = z.object({
  message: z.string().describe('The user\'s message to the chatbot.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response to the user.'),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  prompt: `You are a friendly and helpful assistant for StreetVendorConnect, a B2B platform that connects street food vendors with raw material distributors and delivery partners.

Your role is to guide users and answer their questions about the platform. When providing a link, always use Markdown format, like [link text](/path).

Here are the key pages and what they are for:
- /distributors: Page to find and browse raw material distributors.
- /seller/apply: The application form for businesses who want to sell their raw materials on the platform.
- /delivery/apply: The application form for individuals who want to become delivery partners.
- /faq: Frequently Asked Questions page.
- /contact: Contact page for support.

Based on the user's message, provide a helpful response. If they ask how to do something, guide them to the correct page using a Markdown link. Be concise and friendly.
Keep your responses short, ideally 1-2 sentences.

User Message: {{{message}}}
`,
});

export async function chatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  const {output} = await prompt(input);
  return output!;
}
