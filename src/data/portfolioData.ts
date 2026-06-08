import type { TimelineEntry } from '@/components/Timeline';
import type { SkillCategory } from '@/components/TechStackVisualizer';

export const PERSON_DATA = {
  name: 'Travis Kovar',
  headline: 'Staff Software Engineer | AI & Enterprise Architecture',
  email: 'kovartravis@gmail.com',
  linkedin: '',
  github: 'github.com/purplek23',
  website: 'purplek23.github.io/travisk',
  summary: 'Staff Software Engineer with 9+ years of experience defining technical strategy, architecting high-scale enterprise platforms, and leading cross-functional teams. Proven track record of delivering production-grade AI agents, standardizing team-level AI-native developer workflows to establish organizational blueprints, and aligning engineering execution with business roadmaps.',
  availability: 'Available for Staff Engineering & Leadership Roles',
  aboutMe: "I'm a Staff Software Engineer who believes the next generation of software is built with intelligent, agentic systems. I've spent 9+ years architecting enterprise platforms and leading technical strategy — and the last 2 years going all-in on AI-native engineering and developer enablement.",
  contactText: "I'm currently open to Staff Software Engineer and technical leadership opportunities. If you're building something ambitious — especially in the AI space — I'd love to connect.",
  education: [
    { degree: 'B.S. Computer Science', institution: 'Texas State University', status: 'Completed' as 'Completed' | 'In Progress' },
  ],
};

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    id: 'rad-tech-lead',
    title: 'Staff Software Engineer / Tech Lead — RAD Team',
    company: 'ALSAC',
    companyType: 'Non-Profit · St. Jude Children\'s Research Hospital',
    duration: '1–2 yrs',
    dateRange: '2024 – Present',
    accentColor: '#3b82f6',
    icon: '',
    achievements: [
      'Steered the technical strategy and mentored a high-performing team of <strong>~8 engineers</strong> across rapid application delivery initiatives, establishing engineering standards for accelerated product cycles.',
      'Architected and deployed <strong>Leadpro Agent</strong> to production — establishing enterprise integration patterns for agentic AI (MCP orchestration, Kong API Gateway integration, OpenShift containerization) and successfully transitioning it to operations.',
      'Pioneered the team\'s transition to <strong>AI-native developer workflows</strong>, standardizing secure AI-assistant toolchains to establish a high-productivity model for the broader organization.',
      'Spearheaded the <strong>Technical Vision & Architecture Roadmap</strong> for an internal enterprise platform, aligning executive leadership, product owners, and engineering teams around a 3-year modernization strategy.'
    ],
    technologies: ['TypeScript', 'React', 'C# / .NET', 'AWS', 'OpenShift', 'Kubernetes', 'SQL Server', 'MCP'],
  },
  {
    id: 'em-senior-engineer',
    title: 'Senior Software Engineer — EM Team',
    company: 'ALSAC',
    companyType: 'Non-Profit · St. Jude Children\'s Research Hospital',
    duration: '1–2 yrs',
    dateRange: '2022 – 2024',
    accentColor: '#8b5cf6',
    icon: '',
    achievements: [
      'Designed the architecture and led development of a mission-critical <strong>Event Management Platform</strong> to replace a legacy system, improving usability, performance, and operational reliability.',
      'Orchestrated secure integration layers with external APIs to support automated management of <strong>thousands of high-impact events annually</strong>.',
      'Partnered directly with executive stakeholders and product leaders to define SLOs and ensure high-quality, on-schedule delivery.',
    ],
    technologies: ['TypeScript', 'React', 'C# / .NET', 'AWS', 'REST APIs', 'SQL Server'],
  },
  {
    id: 'nlp-contractor',
    title: 'Software Engineer (Contractor)',
    company: 'ALSAC',
    companyType: 'Non-Profit · St. Jude Children\'s Research Hospital',
    duration: '1–2 yrs',
    dateRange: '2020 – 2022',
    accentColor: '#06b6d4',
    icon: '',
    achievements: [
      'Architected an end-to-end, serverless <strong>NLP data ingestion & relationship mapping pipeline</strong> on AWS, leveraging <strong>Amazon Comprehend</strong> to enrich CRM profiles with 90% precision.',
      'Engineered high-accuracy data preparation and entity extraction models, achieving <strong>90% precision</strong> on relationship matching.',
      'Deployed scalable ETL and streaming data infrastructure on AWS, transitioning legacy processes into real-time processing.',
    ],
    technologies: ['Python', 'Amazon Comprehend', 'AWS', 'ETL / Data Pipelines', 'NLP / ML'],
  },
  {
    id: 'truckpro-engineer',
    title: 'Software Engineer',
    company: 'TruckPro',
    companyType: 'Commercial Auto Parts Distributor',
    duration: '2 yrs',
    dateRange: '2019 – 2021',
    accentColor: '#10b981',
    icon: '',
    achievements: [
      'Designed and built a secure, self-service customer onboarding portal using Angular and C# .NET, automating new customer registration and reducing manual setup times.',
      'Implemented clean, RESTful APIs and robust data validation schemas on the C# .NET backend, ensuring high-availability operations.',
      'Refactored legacy system logic into modular, testable service components, enhancing database query performance and query speeds.',
    ],
    technologies: ['Angular', 'C# / .NET', 'REST APIs', 'SQL Server'],
  },
  {
    id: 'servicemaster-engineer',
    title: 'Software Engineer',
    company: 'ServiceMaster',
    companyType: 'Residential & Commercial Services',
    duration: '2 yrs',
    dateRange: '2017 – 2019',
    accentColor: '#f59e0b',
    icon: '',
    achievements: [
      'Developed and optimized a high-converting digital sales funnel for home warranty contracts using Angular and Java.',
      'Integrated payment processing modules and third-party APIs to streamline automated contract issuance.',
      'Collaborated within an Agile team to implement reusable UI component libraries, improving overall frontend code consistency.',
    ],
    technologies: ['Angular', 'Java', 'Spring Boot', 'REST APIs', 'SQL'],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'leadership',
    label: 'Leadership',
    icon: '',
    accentColor: '#3b82f6',
    skills: [
      { name: 'Technical Strategy & Roadmaps', level: 95, yearsLabel: '4+ yrs' },
      { name: 'System Architecture & Design', level: 92, yearsLabel: '5+ yrs' },
      { name: 'Cross-Functional Strategy', level: 90, yearsLabel: '4+ yrs' },
      { name: 'Developer Enablement & Workflows', level: 90, yearsLabel: '3+ yrs' },
      { name: 'Mentorship & Engineering Culture', level: 95, yearsLabel: '4+ yrs' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: '',
    accentColor: '#8b5cf6',
    skills: [
      { name: 'Agentic AI & LLM Integration', level: 92, yearsLabel: '2+ yrs' },
      { name: 'MCP Server Architecture', level: 88, yearsLabel: '1+ yr' },
      { name: 'NLP & Entity Resolution', level: 80, yearsLabel: '2+ yrs' },
      { name: 'Model Optimization & Evaluation', level: 72, yearsLabel: '2+ yrs' },
      { name: 'AI Native Development Tooling', level: 90, yearsLabel: '2+ yrs' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '',
    accentColor: '#06b6d4',
    skills: [
      { name: 'TypeScript', level: 92, yearsLabel: '5+ yrs' },
      { name: 'React', level: 90, yearsLabel: '5+ yrs' },
      { name: 'Next.js', level: 85, yearsLabel: '3+ yrs' },
      { name: 'CSS / Tailwind', level: 85, yearsLabel: '5+ yrs' },
      { name: 'Web Performance', level: 78, yearsLabel: '3+ yrs' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Cloud',
    icon: '',
    accentColor: '#10b981',
    skills: [
      { name: 'C# / .NET', level: 85, yearsLabel: '5+ yrs' },
      { name: 'AWS Cloud Services', level: 85, yearsLabel: '5+ yrs' },
      { name: 'REST API Architecture', level: 88, yearsLabel: '6+ yrs' },
      { name: 'SQL Server', level: 80, yearsLabel: '5+ yrs' },
      { name: 'Kubernetes / OpenShift', level: 72, yearsLabel: '2+ yrs' },
    ],
  },
];

export const CORE_VALUES = [
  {
    id: 'ai-first',
    icon: '',
    title: 'AI-First Architect',
    description: 'I architect enterprise systems around agentic AI patterns, establishing standards for LLM integrations and orchestration.',
    color: '#8b5cf6',
  },
  {
    id: 'delivery',
    icon: '',
    title: 'Engineering Strategy',
    description: 'I translate complex business objectives into scalable architecture, establishing design patterns and review processes.',
    color: '#3b82f6',
  },
  {
    id: 'people',
    icon: '',
    title: 'Mentorship & Growth',
    description: 'Great software is built by aligned teams. I focus on mentoring senior talent and scaling developer workflows.',
    color: '#10b981',
  },
];
