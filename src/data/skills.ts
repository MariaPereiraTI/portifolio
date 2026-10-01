import type { SkillGroup } from '../types';

export type SkillGroupStatic = Omit<SkillGroup, 'title'>;

/** Non-text fields only — title is translated, see i18n/content.ts. */
export const skillGroupsStatic: SkillGroupStatic[] = [
  { icon: '🎨', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'] },
  { icon: '📊', items: ['Python', 'SQL', 'Pandas', 'Excel', 'Power BI'] },
  { icon: '🛠️', items: ['Git', 'Figma', 'VS Code', 'Vercel'] },
];
