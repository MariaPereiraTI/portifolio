import type { ExperienceEntry } from '../types';
import Reveal from './Reveal';
import { label, headingCondensed } from '../lib/typography';

interface ExperienceItemProps {
  item: ExperienceEntry;
  index: string;
}

export default function ExperienceItem({ item, index }: ExperienceItemProps) {
  const { period, role, company, desc } = item;
  return (
    <Reveal>
      <div className="grid grid-cols-[92px_1fr] md:grid-cols-[160px_1fr] gap-6 md:gap-10 border-t border-forest/20 py-9">
        <div className="flex flex-col gap-2.5">
          <span className="w-2.5 h-2.5 bg-forest inline-block" aria-hidden="true" />
          <div className="font-black text-forest text-[15px] md:text-lg leading-tight">{period}</div>
          <span className="text-[11px] text-ink/35 font-bold" aria-hidden="true">{index}</span>
        </div>
        <div>
          <h3 className={`${headingCondensed} font-extrabold text-xl md:text-2xl mb-1.5 text-ink leading-tight`}>{role}</h3>
          <p className={`mb-3 text-ink/65 text-[13.5px] ${label}`}>{company}</p>
          <p className="text-ink/70 text-[15px] leading-[1.75] max-w-[620px]">{desc}</p>
        </div>
      </div>
    </Reveal>
  );
}
