export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  cgpa: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Certification {
  name: string;
  description: string;
  link?: string;
}

export interface Responsibility {
  title: string;
  event: string;
  organization: string;
  period: string;
  description: string;
}

export interface Skills {
  [category: string]: string[];
}

export interface CandidateProfile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
  certifications: Certification[];
  responsibilities: Responsibility[];
  achievements: string[];
  interests: string[];
}