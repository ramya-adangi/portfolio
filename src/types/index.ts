export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Machine Learning & Analytics' | 'Full-Stack & Web Systems';
  timeline: string;
  status: 'Completed' | 'Production Ready';
  summary: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  responsibilities: string[];
  features: string[];
  architecture: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  role: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    levelDescription: string;
    badge?: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  category: string;
  period: string;
  location: string;
  type: 'Internship';
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreType: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  detail?: string;
  badge?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  description: string;
  badgeText: string;
}
