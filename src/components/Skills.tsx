import type { SkillGroup } from '../types';
import { skillGroupsStatic } from '../data/skills';
import SkillGroupRow from './SkillGroupRow';
import SectionHeading from './SectionHeading';
import BorderedColumn from './BorderedColumn';
import { useContent } from '../i18n/content';

export default function Skills() {
  const t = useContent();
  const skillGroups: SkillGroup[] = skillGroupsStatic.map((item, i) => ({ ...item, ...t.skills.groups[i] }));

  return (
    <section id="skills" className="relative z-10 px-[6vw] pt-16 pb-[100px] bg-ink">
      <BorderedColumn maxWidth={1000} dark className="px-8 md:px-10 py-9">
        <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} light />
        <div className="flex flex-col">
          {skillGroups.map((group, i) => (
            <SkillGroupRow key={i} group={group} index={`0${i + 1}`} />
          ))}
          <div className="border-t border-night" />
        </div>
      </BorderedColumn>
    </section>
  );
}
