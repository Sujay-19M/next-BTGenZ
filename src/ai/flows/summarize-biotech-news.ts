'use server';
/**
 * @fileOverview An AI agent that summarizes biotech news articles.
 *
 * - summarizeBiotechNews - A function that summarizes biotech news articles.
 * - SummarizeBiotechNewsInput - The input type for the summarizeBiotechNews function.
 * - SummarizeBiotechNewsOutput - The return type for the summarizeBiotechNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBiotechNewsInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the biotech news article to summarize.'),
});
export type SummarizeBiotechNewsInput = z.infer<typeof SummarizeBiotechNewsInputSchema>;

const SummarizeBiotechNewsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the biotech news article.'),
});
export type SummarizeBiotechNewsOutput = z.infer<typeof SummarizeBiotechNewsOutputSchema>;

export async function summarizeBiotechNews(
  input: SummarizeBiotechNewsInput
): Promise<SummarizeBiotechNewsOutput> {
  return summarizeBiotechNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBiotechNewsPrompt',
  input: {schema: SummarizeBiotechNewsInputSchema},
  output: {schema: SummarizeBiotechNewsOutputSchema},
  prompt: `You are an AI expert in summarizing biotech news articles.  Your goal is to provide a concise and informative summary of the article.

Article Content: {{{articleContent}}}`,
});

const summarizeBiotechNewsFlow = ai.defineFlow(
  {
    name: 'summarizeBiotechNewsFlow',
    inputSchema: SummarizeBiotechNewsInputSchema,
    outputSchema: SummarizeBiotechNewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
