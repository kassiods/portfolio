import type { Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CodeXmlIcon,
  PaletteIcon,
  BracesIcon,
  AtomIcon,
  ServerCogIcon,
  ToyBrickIcon, // For Python
  DatabaseZapIcon,
  GitForkIcon,
  BrainCogIcon, // For AI/ML as an example
  PuzzleIcon, // Changed from SmartphoneIcon for Next.js
} from 'lucide-react';

const skillsData: Skill[] = [
  { name: 'HTML', icon: CodeXmlIcon, color: "text-orange-500" },
  { name: 'CSS', icon: PaletteIcon, color: "text-blue-500" },
  { name: 'JavaScript', icon: BracesIcon, color: "text-yellow-400" },
  { name: 'React', icon: AtomIcon, color: "text-sky-400" },
  { name: 'Node.js', icon: ServerCogIcon, color: "text-green-500" },
  { name: 'Python', icon: ToyBrickIcon, color: "text-blue-400" },
  { name: 'MySQL', icon: DatabaseZapIcon, color: "text-amber-600" },
  { name: 'MongoDB', icon: DatabaseZapIcon, color: "text-green-600" },
  { name: 'Git', icon: GitForkIcon, color: "text-red-500" },
  { name: 'Inteligência Artificial', icon: BrainCogIcon, color: "text-purple-400" },
  { name: 'Next.js', icon: PuzzleIcon, color: "text-gray-400" }, // Changed from Desenvolvimento Mobile
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary animate-fadeInLoad">
          Minhas Habilidades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="bg-card border-primary/20 shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-6 animate-fadeInLoad"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <skill.icon className={`w-12 h-12 mb-3 ${skill.color || 'text-accent'}`} />
              <p className="text-sm md:text-base font-medium text-center text-foreground/90">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
