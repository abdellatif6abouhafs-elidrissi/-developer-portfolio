// TypeScript interfaces for the portfolio

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'all';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
