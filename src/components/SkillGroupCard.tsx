import type { SkillGroup } from '../types';

interface SkillGroupCardProps {
  group: SkillGroup;
}

export default function SkillGroupCard({ group }: SkillGroupCardProps) {
  const { icon, title, items } = group;
  return (
    <div className="bg-[#2A1B38] rounded-[20px] p-7">
      <div className="text-[26px] mb-2.5">{icon}</div>
      <h3 className="font-heading font-extrabold text-lg mb-3.5 text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-[13px] font-semibold bg-white/[0.08] text-[#F1E9FA] px-3.5 py-1.5 rounded-full border border-white/15"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
