import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Career GPS',
    description: 'A data-driven web application that helps users evaluate and simulate career transitions by analyzing their current skills against target roles. It provides actionable insights such as match percentage, skill gaps, difficulty level, and a personalized learning roadmap.',
    tags: ['AI', 'React', 'Web Dev'],
    liveUrl: 'https://career-gps-alpha.vercel.app/',
    githubUrl: 'https://github.com/Augustya19/Career-GPS',
    techStack: ['React', 'TensorFlow.js', 'Tailwind CSS', 'REST APIs'],
    impact: 'Reduced monitoring latency by 40% and improved model debugging speed.',
    image: '/gps.png',
  },
  {
    id: '2',
    title: 'Shush',
    description: 'SHUSH is a web application dedicated to raising awareness and promoting knowledge around women’s health and hygiene - with a strong emphasis on menstrual health education. The platform presents easy-to-understand, accessible content in an inclusive and mobile-responsive design.',
    tags: ['Full Stack', 'Frontend', 'Education'],
    liveUrl: 'https://shush-health.vercel.app/',
    githubUrl: 'https://github.com/Augustya19/SHUSH',
    techStack: ['HTML/CSS', 'Express.js', 'Node.js', 'MySQL', 'Gemini API'],
    impact: 'Successfully filtered 99.9% of harmful content without compromising privacy.',
    image: '/shush.png'
  },
  {
    id: '4',
    title: 'ELI5',
    description: 'Explain Like I’m 5 is a concept-explanation project designed to break down complex ideas into simple, intuitive explanations using everyday language and real-life analogies.',
    tags: ['Frontend', 'Design System', 'Framer Motion'],
    liveUrl: 'https://explain-like-im-5-ten.vercel.app/',
    githubUrl: 'https://github.com/Augustya19/Explain-Like-Im-5',
    techStack: ['React', 'TypeScript', 'Framer Motion', 'TailwindCSS', 'Gemini API', 'Node.js/Express.js'],
    impact: 'Used by 500+ developers to build immersive digital experiences.',
    image: '/elif.png'
  },
  
  {
    id: '3',
    title: 'Life Quest',
    description: 'LifeQuest is a gamified productivity app that transforms real-life goals into RPG-style quests. Users earn XP, unlock skill trees, and level up their character by completing habits and milestones.',
    tags: ['Web Dev', 'Design System', 'Framer Motion'],
    liveUrl: 'https://life-quest-habit.vercel.app/',
    githubUrl: 'https://github.com/Augustya19/Life-Quest',
    techStack: ['React', 'Node.js/Express.js', 'Framer Motion', 'TailwindCSS'],
    impact: 'Used by 500+ developers to build immersive digital experiences.',
    image: '/life quest.png'
  },
  
];

export const SKILLS: Skill[] = [
  {
    name: 'React / Next.js',
    category: 'Frontend',
    level: 98,
    details: 'Advanced state management, performance optimization, and server components.',
    relatedProjects: ['Career GPS', 'Shush', 'ELI5', 'Life Quest']
  },
  {
    name: 'HTML5/CSS3',
    category: 'Frontend',
    level: 88,
    details: 'Relational modeling and vector search for AI applications.',
    relatedProjects: ['Shush']
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 95,
    details: 'Strict typing, utility types, and scalable architecture patterns.',
    relatedProjects: ['Career GPS', 'Shush', 'ELI5', 'Life Quest']
  },
  {
    name: 'Node.js / Python',
    category: 'Backend / Data',
    level: 90,
    details: 'Scalable API design, microservices, and data processing pipelines.',
    relatedProjects: ['Shush', 'ELI5', 'CAreer GPS']
  },
  {
    name: 'Data Analysis/ Handling',
    category: 'AI / ML',
    level: 95,
    details: 'Expertise in prompt engineering, fine-tuning, and RAG architectures.',
    relatedProjects: ['Shush', 'ELI5']
  },


  {
    name: 'MySQL/ MongoDB',
    category: 'Backend / Data',
    level: 88,
    details: 'Relational modeling and vector search for AI applications.',
    relatedProjects: ['Shush', 'ELI5', 'LifeQuest']
  }


];

export const PORTFOLIO_CONTEXT = `
You are the AI assistant for Aug, a Software Engineer, Frontend Specialist, and AI Engineer.
Aug is passionate about building futuristic, immersive digital products.

Key Projects:
1. NeuralVision Dashboard: Real-time AI monitoring with predictive analytics. Built with React, Three.js, and TensorFlow.js.
2. Quantum Chat: Encrypted messaging with AI moderation. Built with Next.js and Socket.io.
3. Aether UI Kit: Futuristic glassmorphic component library. Built with Framer Motion.

Skills:
- AI/ML: LLMs, Computer Vision, RAG, Prompt Engineering.
- Frontend: React, Next.js, TypeScript, Framer Motion, Tailwind CSS.
- Backend: Node.js, Python, FastAPI, PostgreSQL, Vector Databases.

Experience:
Aug focuses on the intersection of AI and high-end Frontend engineering, creating interfaces that feel like tools from the future.
`;
