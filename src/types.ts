export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutHighlight {
  tag: string;
  title: string;
  desc: string;
  stats?: AboutStat[];
  badge?: string;
}

export interface Project {
  tag: string;
  tagBg: string;
  title: string;
  desc: string;
  stack: string[];
  url: string;
  mockBg: string;
  emoji: string;
  image?: string;
  /** url points to a source repository instead of a live site */
  isRepo?: boolean;
}

export interface SkillGroup {
  icon: string;
  title: string;
  items: string[];
}

export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  desc: string;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  x: string;
}
