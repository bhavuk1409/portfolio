// src/components/project-card.tsx
'use client';

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
import { Github, Link as LinkIcon } from 'lucide-react';

type Project = {
  title: string;
  year: string;
  description: string;
  repo: string;
  demo?: string;
  tech?: string[]; // optional
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col bg-card/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
          <Badge variant="outline" className="border-primary/50 text-primary">
            {project.year}
          </Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        {project.tech && project.tech.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="font-code bg-muted text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="flex-col items-start gap-4">
        <div className="flex gap-2">
          {project.repo && (
            <Button asChild size="sm">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          )}

          {project.demo && (
            <Button variant="secondary" asChild size="sm">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
