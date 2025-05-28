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
    title: 'UGym',
    description: 'UGym: Uma solução inteligente para o monitoramento de academias, otimizando a gestão de alunos e treinadores pessoais através de uma plataforma inovadora.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'education technology',
    githubUrl: 'https://github.com/ifpi-picos/projeto-integrador-ugym',
    liveDemoUrl: 'https://ugym-react.vercel.app',
    tags: ['React', 'Node.js', 'IA', 'Supabase'],
  },
  {
    id: '3',
    title: 'Landing Page UGym',
    description: 'Uma landing page moderna e responsiva para o projeto UGym, focada em apresentar os benefícios e funcionalidades da plataforma de forma atraente e intuitiva.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'landing page fitness',
    githubUrl: 'https://github.com/ifpi-picos/projeto-integrador-ugym', // Assuming it's part of the same repo or can be updated later
    // liveDemoUrl: 'https://ugym-landingpage.vercel.app', // Example, can be added if available
    tags: ['Next.js', 'Tailwind CSS', 'React', 'UX/UI Design'],
  },
  {
    id: '2',
    title: 'Explorando Novas Ideias',
    description: 'Estou constantemente desenvolvendo novos projetos e aprimorando minhas habilidades. Para acompanhar meus trabalhos mais recentes e outras contribuições, visite meu perfil no GitHub!',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'coding gears',
    githubUrl: 'https://github.com/kassiods', 
    tags: ['Desenvolvimento Contínuo', 'Novidades', 'GitHub'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary animate-fadeInLoad">
          Meus Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Adjusted grid to lg:grid-cols-2 */}
          {projectsData.map((project, index) => (
            <Card
              key={project.id}
              className="bg-card border-primary/20 shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col overflow-hidden animate-fadeInLoad group" // Added 'group' class
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
              <CardFooter className="flex gap-4">
                <Link href={project.githubUrl} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <GithubIcon className="mr-2 h-4 w-4" /> {project.id === '2' ? 'Ver Meu GitHub' : 'Ver no GitHub'}
                    </Button>
                  </a>
                </Link>
                {project.liveDemoUrl && (
                  <Link href={project.liveDemoUrl} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <Button variant="default" className="bg-primary hover:bg-primary/90">
                        <ExternalLinkIcon className="mr-2 h-4 w-4" /> Ver Demo
                      </Button>
                    </a>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
