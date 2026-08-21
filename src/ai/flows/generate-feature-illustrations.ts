'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate illustrations or icons for feature sections of a website.
 *
 * It exports:
 * - `generateFeatureIllustrations`: An async function that takes a description of the feature and returns a data URI
 *   for an AI-generated image representing that feature.
 * - `GenerateFeatureIllustrationsInput`: The input type for the `generateFeatureIllustrations` function.
 * - `GenerateFeatureIllustrationsOutput`: The output type for the `generateFeatureIllustrations` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFeatureIllustrationsInputSchema = z.object({
  featureDescription: z
    .string()
    .describe('A description of the feature to be illustrated.'),
});
export type GenerateFeatureIllustrationsInput = z.infer<
  typeof GenerateFeatureIllustrationsInputSchema
>;

const GenerateFeatureIllustrationsOutputSchema = z.object({
  illustrationDataUri: z
    .string()
    .describe(
      'A data URI containing the AI-generated illustration, that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // prettier-ignore
    ),
});
export type GenerateFeatureIllustrationsOutput = z.infer<
  typeof GenerateFeatureIllustrationsOutputSchema
>;

export async function generateFeatureIllustrations(
  input: GenerateFeatureIllustrationsInput
): Promise<GenerateFeatureIllustrationsOutput> {
  return generateFeatureIllustrationsFlow(input);
}

const generateFeatureIllustrationsPrompt = ai.definePrompt({
  name: 'generateFeatureIllustrationsPrompt',
  input: {schema: GenerateFeatureIllustrationsInputSchema},
  output: {schema: GenerateFeatureIllustrationsOutputSchema},
  prompt: `You are an AI that generates illustrations for website feature sections.

  Based on the description of the feature provided, generate an appropriate image.
  Return the image as a data URI.

  Feature Description: {{{featureDescription}}}
  `,
});

const generateFeatureIllustrationsFlow = ai.defineFlow(
  {
    name: 'generateFeatureIllustrationsFlow',
    inputSchema: GenerateFeatureIllustrationsInputSchema,
    outputSchema: GenerateFeatureIllustrationsOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.featureDescription,
    });

    if (!media || !media.url) {
      throw new Error('No illustration was generated.');
    }

    return {illustrationDataUri: media.url};
  }
);
