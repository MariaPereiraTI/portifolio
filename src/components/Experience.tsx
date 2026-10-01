import type { ExperienceEntry } from '../types';
import { experienceStatic } from '../data/experience';
import ExperienceItem from './ExperienceItem';
import SectionHeading from './SectionHeading';
import BorderedColumn from './BorderedColumn';
import { useContent } from '../i18n/content';

export default function Experience() {
  const t = useContent();
  const experience: ExperienceEntry[] = experienceStatic.map((item, i) => ({ ...item, ...t.experience.items[i] }));

  return (
    <section id="experiencia" className="relative z-10 px-[6vw] py-[100px]">
      <BorderedColumn maxWidth={1000} className="px-8 md:px-10 py-9">
        <SectionHeading title={t.experience.title} />
        <div className="flex flex-col">
          {experience.map((item, i) => (
            <ExperienceItem key={item.company} item={item} index={`0${i + 1}`} />
          ))}
          <div className="border-t border-forest/20" />
        </div>
      </BorderedColumn>
    </section>
  );
}
