import type { TimelineEntry } from '@/components/Timeline';
import type { SkillCategory } from '@/components/TechStackVisualizer';

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    id: 'rad-tech-lead',
    title: 'Tech Lead — RAD Team',
    company: 'ALSAC',
    companyType: 'Non-Profit · St. Jude Children\'s Research Hospital',
    duration: '1–2 yrs',
    dateRange: '2024 – Present',
    accentColor: '#3b82f6',
    icon: '🚀',
    achievements: [
      'Led a team of <strong>~8 engineers</strong> across fast-paced delivery initiatives on the Rapid Application Delivery team.',
      'Architected and delivered <strong>Leadpro Agent</strong> to production — navigating the unique operational challenges of deploying custom AI agents (MCP orchestration, Kong integration), before successfully handing it off for long-term maintenance.',
      'Driving an org-wide initiative to standardize <strong>AI-native development workflows</strong> across all engineering teams (rollout ongoing).',
      'Spearheaded a <strong>Technical Vision initiative</strong> for an internal platform, aligning Product Owners and engineers around a shared, strategic roadmap.',
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
    icon: '🗓️',
    achievements: [
      'Led development of a new <strong>Event Management Portal</strong> that fully replaced an aging legacy system, praised by the business for its ease of use and modern design.',
      'The portal integrates with third-party event platforms and now powers the management of <strong>thousands of events per year</strong>.',
      'Received direct executive-level recognition for delivering an intuitive, high-quality product on schedule.',
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
    icon: '🤖',
    achievements: [
      'Built an end-to-end <strong>NLP data pipeline</strong> ingesting newspaper articles, extracting named entities and relationships via <strong>Amazon Comprehend</strong>, and matching them to the organization\'s CRM.',
      'Managed all data preparation, cleaning, and model training — achieving <strong>90% accuracy</strong> on name and relationship extraction.',
      'Delivered the full ETL infrastructure on AWS, from ingestion through entity resolution.',
    ],
    technologies: ['Python', 'Amazon Comprehend', 'AWS', 'ETL / Data Pipelines', 'NLP / ML'],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'leadership',
    label: 'Leadership',
    icon: '👥',
    accentColor: '#3b82f6',
    skills: [
      { name: 'Team Leadership & Mentoring', level: 95, yearsLabel: '4+ yrs' },
      { name: 'Technical Vision & Roadmapping', level: 90, yearsLabel: '3+ yrs' },
      { name: 'Stakeholder Communication', level: 88, yearsLabel: '4+ yrs' },
      { name: 'Agile / Scrum Facilitation', level: 85, yearsLabel: '5+ yrs' },
      { name: 'Architecture Reviews', level: 82, yearsLabel: '3+ yrs' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: '🤖',
    accentColor: '#8b5cf6',
    skills: [
      { name: 'Agentic AI & LLM Workflows', level: 92, yearsLabel: '2+ yrs' },
      { name: 'MCP Server Design', level: 88, yearsLabel: '1+ yr' },
      { name: 'Amazon Comprehend / NLP', level: 80, yearsLabel: '2+ yrs' },
      { name: 'Model Training & Fine-tuning', level: 72, yearsLabel: '2+ yrs' },
      { name: 'AI Native Development', level: 90, yearsLabel: '2+ yrs' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
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
    icon: '⚙️',
    accentColor: '#10b981',
    skills: [
      { name: 'C# / .NET', level: 85, yearsLabel: '5+ yrs' },
      { name: 'AWS', level: 82, yearsLabel: '5+ yrs' },
      { name: 'REST API Design', level: 88, yearsLabel: '6+ yrs' },
      { name: 'SQL Server', level: 80, yearsLabel: '5+ yrs' },
      { name: 'OpenShift / Kubernetes', level: 72, yearsLabel: '2+ yrs' },
    ],
  },
];

export const CORE_VALUES = [
  {
    id: 'ai-first',
    icon: '🤖',
    title: 'AI-First Mindset',
    description: 'I don\'t just use AI as a tool — I architect systems around it and lead teams to build natively with it.',
    color: '#8b5cf6',
  },
  {
    id: 'delivery',
    icon: '🚀',
    title: 'Delivery Focused',
    description: 'From RAD team sprints to multi-year platform migrations, I optimize for shipping high-quality software quickly.',
    color: '#3b82f6',
  },
  {
    id: 'people',
    icon: '👥',
    title: 'People First',
    description: 'Great software is built by empowered engineers. I invest in mentoring, culture, and clear technical vision.',
    color: '#10b981',
  },
];
