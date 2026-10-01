import type { ExperienceEntry } from '../types';

export type ExperienceStatic = Omit<ExperienceEntry, 'period' | 'role' | 'desc'>;

/** Non-text fields only — period/role/desc are translated, see i18n/content.ts. */
export const experienceStatic: ExperienceStatic[] = [{ company: 'ParaDevs' }, { company: 'Grupo Toureiro' }];
