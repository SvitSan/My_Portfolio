export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  images?: string[];
  link: string;
  sourceLink?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface Workshop {
  title: string;
  presenter: string;
  description: string[];
}

export interface Hobby {
  title: string;
  text: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  logo?: string;
}
