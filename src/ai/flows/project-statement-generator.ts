'use server';

/**
 * @fileOverview Generates a concise and engaging personal statement about a selected project,
 * explaining its relevance and potential impact on future endeavors.
 *
 * - generateProjectStatement - A function that generates the personal statement.
 * - ProjectStatementInput - The input type for the generateProjectStatement function.
 * - ProjectStatementOutput - The return type for the generateProjectStatement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectStatementInputSchema = z.object({
  projectName: z.string().describe('The name of the project to generate a statement for.'),
  projectDescription: z.string().describe('A detailed description of the project.'),
  projectTechStack: z.string().describe('The technologies used in the project.'),
  userSkills: z.array(z.string()).describe('The skills of the user.'),
});
export type ProjectStatementInput = z.infer<typeof ProjectStatementInputSchema>;

const ProjectStatementOutputSchema = z.object({
  statement: z.string().describe('A concise and engaging personal statement about the project.'),
});
export type ProjectStatementOutput = z.infer<typeof ProjectStatementOutputSchema>;

export async function generateProjectStatement(input: ProjectStatementInput): Promise<ProjectStatementOutput> {
  return generateProjectStatementFlow(input);
}

const projectStatementPrompt = ai.definePrompt({
  name: 'projectStatementPrompt',
  input: {schema: ProjectStatementInputSchema},
  output: {schema: ProjectStatementOutputSchema},
  prompt: `You are a personal branding expert helping a software engineer create a compelling statement about their project.

  Given the project's name, description, tech stack, and the user's skills, generate a concise and engaging personal statement that highlights the project's relevance and potential impact on future endeavors.

  Project Name: {{{projectName}}}
  Project Description: {{{projectDescription}}}
  Project Tech Stack: {{{projectTechStack}}}
  User Skills:
  {{#if userSkills}}
    {{#each userSkills}}
      - {{{this}}}
    {{/each}}
  {{else}}
    No skills listed.
  {{/if}}

  Statement:`,
});

const generateProjectStatementFlow = ai.defineFlow(
  {
    name: 'generateProjectStatementFlow',
    inputSchema: ProjectStatementInputSchema,
    outputSchema: ProjectStatementOutputSchema,
  },
  async input => {
    const {output} = await projectStatementPrompt(input);
    return output!;
  }
);
