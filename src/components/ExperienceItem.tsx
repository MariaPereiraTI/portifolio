import type { ExperienceEntry } from '../types';

interface ExperienceItemProps {
  item: ExperienceEntry;
}

export default function ExperienceItem({ item }: ExperienceItemProps) {
  const { period, role, company, desc } = item;
  return (
    <div className="grid grid-cols-[140px_1fr] gap-6 py-7 border-t-2 border-ink max-md:grid-cols-1 max-md:gap-2">
      <div className="font-bold text-[15px] text-primary">{period}</div>
      <div>
        <h3 className="font-heading font-extrabold text-xl mb-1.5">{role}</h3>
        <p className="mb-2 text-[#3A2E44] text-[15px] font-semibold">{company}</p>
        <p className="text-[#3A2E44] text-[15px] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
