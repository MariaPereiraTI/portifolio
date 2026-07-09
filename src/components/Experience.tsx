import { experience } from '../data/experience';
import ExperienceItem from './ExperienceItem';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experiencia" className="relative z-10 px-[6vw] py-[100px]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading number="03" title="Experiência" />
        <div className="flex flex-col">
          {experience.map((item) => (
            <ExperienceItem key={item.role} item={item} />
          ))}
          <div className="border-t-2 border-ink" />
        </div>
      </div>
    </section>
  );
}
