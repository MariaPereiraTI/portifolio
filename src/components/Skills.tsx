import { skillGroups } from '../data/skills';
import SkillGroupCard from './SkillGroupCard';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-[6vw] pt-10 pb-[100px] bg-ink">
      <div className="max-w-[1100px] mx-auto text-white">
        <SectionHeading
          number="02"
          title="Stack & Skills"
          subtitle="Ferramentas que uso no dia a dia para construir interfaces e explorar dados."
          light
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {skillGroups.map((group) => (
            <SkillGroupCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
