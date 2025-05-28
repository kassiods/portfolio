import type { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Plataforma de Estudos IA',
    description: 'Uma plataforma web interativa que utiliza IA para gerar quizzes e flashcards personalizados, auxiliando estudantes em sua preparação.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'education technology',
    githubUrl: 'https://github.com/seuusuario/plataforma-estudos-ia',
    tags: ['React', 'Node.js', 'IA', 'MongoDB'],
  },
  {
    id: '2',
    title: 'Analisador de Sentimentos',
    description: 'Ferramenta baseada em Python que analisa o sentimento de textos (tweets, reviews) usando Machine Learning, classificando-os como positivo, negativo ou neutro.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data analysis',
    githubUrl: 'https://github.com/seuusuario/analisador-sentimentos',
    tags: ['Python', 'Machine Learning', 'NLP', 'Flask'],
  },
  {
    id: '3',
    title: 'Portfolio Pessoal v1',
    description: 'Versão anterior do meu portfolio, desenvolvida para explorar conceitos de design web e componentização com JavaScript puro.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web design',
    githubUrl: 'https://github.com/seuusuario/portfolio-v1',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary animate-fadeInLoad">
          Meus Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-card border-primary/20 shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col overflow-hidden animate-fadeInLoad"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-accent">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80 mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={project.githubUrl} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <GithubIcon className="mr-2 h-4 w-4" /> Ver no GitHub
                    </Button>
                  </a>
                </Link>
                {/* Optional: Live demo link
                <Link href="#" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="ml-auto">
                    <Button variant="default" className="bg-primary hover:bg-primary/90">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" /> Ver Demo
                    </Button>
                  </a>
                </Link>
                */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
