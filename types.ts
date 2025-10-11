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
}

export interface ProjectCategory {
  platform: string;
  // Fix: Use ReactElement type for component icons to resolve "Cannot find namespace 'JSX'" error.
  icon: ReactElement;
  projects: Project[];
}
