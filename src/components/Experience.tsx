import { experience } from '../data/experience';
import ExperienceItem from './ExperienceItem';
import SectionHeading from './SectionHeading';
import BorderedColumn from './BorderedColumn';

export default function Experience() {
  return (
    <section id="experiencia" className="relative z-10 px-[6vw] py-[100px]">
      <BorderedColumn maxWidth={1000} className="px-8 md:px-10 py-9">
        <SectionHeading title="Experiência" />
        <div className="flex flex-col">
          {experience.map((item, i) => (
            <ExperienceItem key={item.role} item={item} index={`0${i + 1}`} />
          ))}
          <div className="border-t border-forest/20" />
        </div>
      </BorderedColumn>
    </section>
  );
}
