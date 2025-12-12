import type { Project, Skill, NavItem, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, icon: 'react', category: 'frontend' },
  { name: 'TypeScript', level: 90, icon: 'typescript', category: 'frontend' },
  { name: 'Next.js', level: 85, icon: 'nextjs', category: 'frontend' },
  { name: 'TailwindCSS', level: 92, icon: 'tailwind', category: 'frontend' },
  { name: 'Vue.js', level: 75, icon: 'vue', category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 88, icon: 'nodejs', category: 'backend' },
  { name: 'Express', level: 85, icon: 'express', category: 'backend' },
  { name: 'Python', level: 80, icon: 'python', category: 'backend' },
  { name: 'PostgreSQL', level: 82, icon: 'postgresql', category: 'backend' },
  { name: 'MongoDB', level: 78, icon: 'mongodb', category: 'backend' },

  // Tools
  { name: 'Git', level: 90, icon: 'git', category: 'tools' },
  { name: 'Docker', level: 75, icon: 'docker', category: 'tools' },
  { name: 'AWS', level: 70, icon: 'aws', category: 'tools' },
  { name: 'Figma', level: 80, icon: 'figma', category: 'tools' },
];

export const projects: Project[] = [
  // Mobile Apps
  {
    id: 1,
    title: 'Fi-Khidmatik',
    description: 'Application mobile pour connecter les clients avec des artisans qualifiés au Maroc. Fonctionnalités: authentification, vérification email, recherche d\'artisans, réservations, et avis clients.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'React', 'MongoDB', 'TailwindCSS', 'EmailJS', 'JWT'],
    liveUrl: 'https://frontend-seven-gamma-60.vercel.app',
    githubUrl: 'https://github.com/abdellatif6abouhafs-elidrissi/fi-khdmitk-app',
    category: 'mobile',
  },
  // Web Apps
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    category: 'web',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/taskapp',
    category: 'web',
  },
  {
    id: 4,
    title: 'AI Chat Application',
    description: 'An intelligent chatbot powered by OpenAI GPT, featuring natural language processing and contextual conversations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/aichat',
    category: 'web',
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A comprehensive analytics dashboard for social media management with data visualization and automated reporting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/dashboard',
    category: 'web',
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'A mobile-first fitness application with workout tracking, progress charts, and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Charts.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/fitness',
    category: 'mobile',
  },
  {
    id: 7,
    title: 'Real Estate Platform',
    description: 'A property listing platform with advanced search filters, virtual tours, and mortgage calculator integration.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/realestate',
    category: 'web',
  },
];

export const aboutContent = {
  greeting: "Hello, I'm",
  name: "John Developer",
  title: "Full Stack Developer",
  description: `I'm a passionate full-stack developer with 5+ years of experience building
    modern web applications. I specialize in React, TypeScript, and Node.js,
    creating scalable solutions that deliver exceptional user experiences.`,
  highlights: [
    "5+ years of professional experience",
    "50+ projects completed",
    "Open source contributor",
    "Tech community speaker",
  ],
  resumeUrl: '/resume.pdf',
};
