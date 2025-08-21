
'use client';

import { generateProjectStatement } from '@/ai/flows/project-statement-generator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Github,
  Link as LinkIcon,
  Sparkles,
  Loader2,
  ServerCrash,
  Lightbulb,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { type ProjectStatementInput } from '@/ai/flows/project-statement-generator';

type Project = {
  title: string;
  year: string;
  description: string;
  repo: string;
  demo?: string;
  tech: string[];
};

type ProjectCardProps = {
  project: Project;
  userSkills: string[];
};

async function generateStatementAction(
  prevState: any,
  formData: FormData
): Promise<{ statement?: string; error?: string }> {
  const projectData: ProjectStatementInput = {
    projectName: formData.get('projectName') as string,
    projectDescription: formData.get('projectDescription') as string,
    projectTechStack: formData.get('projectTechStack') as string,
    userSkills: JSON.parse(formData.get('userSkills') as string),
  };

  try {
    const result = await generateProjectStatement(projectData);
    return { statement: result.statement };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate statement. Please try again.' };
  }
}

function GenerateButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="outline" size="sm" disabled={pending} className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-background">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate AI Statement
        </>
      )}
    </Button>
  );
}

export function ProjectCard({ project, userSkills }: ProjectCardProps) {
  const [state, formAction] = useActionState(generateStatementAction, {});

  return (
    <Card className="flex h-full flex-col bg-card/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
            <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">{project.year}</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Badge key={index} variant="secondary" className="font-code bg-muted text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex gap-2">
          <Button asChild size="sm">
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          {project.demo && (
            <Button variant="secondary" asChild size="sm">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
        <div className="w-full">
          <form action={formAction} className="w-full">
            <input type="hidden" name="projectName" value={project.title} />
            <input type="hidden" name="projectDescription" value={project.description} />
            <input type="hidden" name="projectTechStack" value={project.tech.join(', ')} />
            <input type="hidden" name="userSkills" value={JSON.stringify(userSkills)} />
            <GenerateButton />
          </form>
          {state.statement && (
            <Alert className="mt-4 border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
              <Lightbulb className="h-4 w-4 text-cyan-400" />
              <AlertTitle>AI-Generated Insight</AlertTitle>
              <AlertDescription className="text-cyan-400/80">{state.statement}</AlertDescription>
            </Alert>
          )}
          {state.error && (
            <Alert variant="destructive" className="mt-4">
              <ServerCrash className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
