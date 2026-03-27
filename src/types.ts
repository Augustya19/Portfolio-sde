export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  impact: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'AI / ML' | 'Frontend' | 'Backend / Data';
  level: number; // 0-100
  details: string;
  relatedProjects: string[];
}
