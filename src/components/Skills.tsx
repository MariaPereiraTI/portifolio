import { skillGroups } from '../data/skills';
import SkillGroupRow from './SkillGroupRow';
import SectionHeading from './SectionHeading';
import BorderedColumn from './BorderedColumn';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-[6vw] pt-16 pb-[100px] bg-ink">
      <BorderedColumn maxWidth={1000} dark className="px-8 md:px-10 py-9">
        <SectionHeading
          title="Stack & Skills"
          subtitle="Ferramentas que uso no dia a dia para construir interfaces e explorar dados."
          light
        />
        <div className="flex flex-col">
          {skillGroups.map((group, i) => (
            <SkillGroupRow key={group.title} group={group} index={`0${i + 1}`} />
          ))}
          <div className="border-t border-night" />
        </div>
      </BorderedColumn>
    </section>
  );
}
