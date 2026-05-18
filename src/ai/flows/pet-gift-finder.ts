'use server';
/**
 * @fileOverview A gift recommendation AI agent for pet products.
 *
 * - petGiftFinder - A function that handles the pet gift recommendation process.
 * - PetGiftFinderInput - The input type for the petGiftFinder function.
 * - PetGiftFinderOutput - The return type for the petGiftFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PetGiftFinderInputSchema = z.object({
  petDescription: z
    .string()
    .describe(
      'A detailed description of the recipient\'s pet, e.g., "playful cat", "large active dog who loves the outdoors", "senior small dog who needs comfort".'
    ),
});
export type PetGiftFinderInput = z.infer<typeof PetGiftFinderInputSchema>;

const ProductSuggestionSchema = z.object({
  name: z.string().describe('The name of the suggested product.'),
  description:
    z.string().describe('A brief, engaging description of the product.'),
  category:
    z.enum([
      'Juguetes interactivos',
      'Gadgets para mascotas',
      'Paseo y aventura',
      'Descanso',
      'Hidratación y alimentación inteligente',
      'Rascadores y entretenimiento',
      'Accesorios para dueños',
      'Ofertas destacadas',
    ])
    .describe('The primary category of the product, from the predefined list.'),
  reason:
    z.string()
      .describe(
        'A short explanation of why this product is a good fit for the described pet.'
      ),
  estimatedPriceRange:
    z.string()
      .describe('An estimated price range for the product, e.g., "$29.99 - $49.99".'),
  imageUrl:
    z.string()
      .url()
      .describe('A placeholder URL for an image of the product.'),
});

const PetGiftFinderOutputSchema = z
  .array(ProductSuggestionSchema)
  .describe(
    'An array of tailored product suggestions for the described pet. Generate 3-5 unique and relevant product suggestions.'
  );
export type PetGiftFinderOutput = z.infer<typeof PetGiftFinderOutputSchema>;

export async function petGiftFinder(
  input: PetGiftFinderInput
): Promise<PetGiftFinderOutput> {
  return petGiftFinderFlow(input);
}

const petGiftFinderPrompt = ai.definePrompt({
  name: 'petGiftFinderPrompt',
  input: {schema: PetGiftFinderInputSchema},
  output: {schema: PetGiftFinderOutputSchema},
  prompt: `You are an expert gift recommender for PawSense, a premium mobile-first e-commerce store specializing in innovative toys, gadgets, and special accessories for dogs and cats.
Your goal is to suggest 3-5 unique, relevant, and exciting products that align with the PawSense brand: modern, entertaining, reliable, techy, but warm.
Focus exclusively on smart toys, gadgets, and unique accessories. DO NOT recommend generic pet products, food, medicine, or veterinary products.

The categories available are:
- Juguetes interactivos
- Gadgets para mascotas
- Paseo y aventura
- Descanso
- Hidratación y alimentación inteligente
- Rascadores y entretenimiento
- Accesorios para dueños
- Ofertas destacadas

The customer has described the recipient's pet as: "{{{petDescription}}}".

Based on this description, recommend products from the available categories. For each product, provide:
- A clear 'name'.
- A brief, engaging 'description' that highlights its benefits.
- Its 'category' from the list above.
- A 'reason' why it's a good fit for the described pet.
- An 'estimatedPriceRange' (e.g., "$29.99 - $49.99") reflecting premium but accessible pricing.
- An 'imageUrl' (use a placeholder URL like "https://placehold.co/400x400?text=Product+Image" for now).

Generate your response as a JSON array of product objects, adhering strictly to the provided schema.`,
});

const petGiftFinderFlow = ai.defineFlow(
  {
    name: 'petGiftFinderFlow',
    inputSchema: PetGiftFinderInputSchema,
    outputSchema: PetGiftFinderOutputSchema,
  },
  async input => {
    const {output} = await petGiftFinderPrompt(input);
    return output!;
  }
);
