
import type { LucideIcon } from 'lucide-react';
// import type { StaticImageData } from 'next/image'; // Temporarily removed

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Reverted to string only
  imageHint?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  color?: string; // Optional color for the icon or background
}
