import type { ReactElement } from 'react';

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologyUsed: string[];
  imageUrl: string;
}

export interface ProjectCategory {
  platform: string;
  icon: ReactElement;
  projects: Project[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  tasks: string[];
  achievements: string[];
}

export interface Service {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Tool {
  // Fix: Changed React.ReactElement to ReactElement to match the existing import.
  icon: ReactElement;
  name: string;
  category: string;
  description: string;
}
