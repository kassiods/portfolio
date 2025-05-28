import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  githubUrl: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  color?: string; // Optional color for the icon or background
}
