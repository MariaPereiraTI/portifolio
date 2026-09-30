import type { SkillGroup } from '../types';
import Reveal from './Reveal';
import { darkHoverText } from '../lib/interaction';
import { headingCondensed } from '../lib/typography';

interface SkillGroupRowProps {
  group: SkillGroup;
  index: string;
}

export default function SkillGroupRow({ group, index }: SkillGroupRowProps) {
  const { title, items } = group;
  return (
    <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 items-start border-t border-night py-8">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-sage/60" aria-hidden="true">{index}</span>
          <h3 className={`${headingCondensed} font-black text-lg md:text-xl uppercase tracking-tight text-bone`}>{title}</h3>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          {items.map((item) => (
            <span key={item} className={`text-[15px] font-medium ${darkHoverText}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
