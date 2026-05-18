'use server';
/**
 * @fileOverview A Genkit flow for generating personalized product recommendations for pets.
 *
 * - personalizedProductRecommendations - A function that handles the personalized product recommendation process.
 * - PersonalizedProductRecommendationsInput - The input type for the personalizedProductRecommendations function.
 * - PersonalizedProductRecommendationsOutput - The return type for the personalizedProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedProductRecommendationsInputSchema = z.object({
  browsingHistory: z
    .array(z.string())
    .optional()
    .describe('A list of product names or categories previously viewed by the user.'),
  petSpecies: z
    .string()
    .optional()
    .describe('The species of the pet (e.g., "dog", "cat").'),
  petAge: z
    .string()
    .optional()
    .describe('The age of the pet (e.g., "puppy", "adult", "senior").'),
  popularTrends: z
    .array(z.string())
    .optional()
    .describe('A list of popular product trends or categories.'),
});
export type PersonalizedProductRecommendationsInput = z.infer<
  typeof PersonalizedProductRecommendationsInputSchema
>;

const PersonalizedProductRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      productName: z.string().describe('The name of the recommended product.'),
      description: z
        .string()
        .describe('A brief description of the recommended product.'),
      reason: z
        .string()
        .describe('The reason for this recommendation, based on user input or trends.'),
    })
  ),
});
export type PersonalizedProductRecommendationsOutput = z.infer<
  typeof PersonalizedProductRecommendationsOutputSchema
>;

export async function personalizedProductRecommendations(
  input: PersonalizedProductRecommendationsInput
): Promise<PersonalizedProductRecommendationsOutput> {
  return personalizedProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProductRecommendationsPrompt',
  input: {schema: PersonalizedProductRecommendationsInputSchema},
  output: {schema: PersonalizedProductRecommendationsOutputSchema},
  prompt: `You are an expert pet product recommender for a premium mobile-first e-commerce store called PawSense. Your goal is to suggest innovative toys, gadgets, and accessories for dogs and cats.

Consider the user's browsing history, their pet's preferences, and popular trends to provide highly relevant and engaging product recommendations.

Do NOT recommend food, medicine, or general pet supplies. Focus exclusively on specialized, premium, and innovative items.

Input details:

{{#if browsingHistory}}Browsing History: {{#each browsingHistory}}- {{{this}}}\n{{/each}}{{/if}}
{{#if petSpecies}}Pet Species: {{{petSpecies}}}\n{{/if}}
{{#if petAge}}Pet Age: {{{petAge}}}\n{{/if}}
{{#if popularTrends}}Popular Trends: {{#each popularTrends}}- {{{this}}}\n{{/each}}{{/if}}

Generate 3-5 distinct product recommendations, each with a name, a concise description, and a clear reason for the recommendation based on the provided information.`,
});

const personalizedProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProductRecommendationsFlow',
    inputSchema: PersonalizedProductRecommendationsInputSchema,
    outputSchema: PersonalizedProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
