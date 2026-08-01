import type { AboutHighlight } from '../types';

interface HighlightCardProps {
  highlight: AboutHighlight;
}

export default function HighlightCard({ highlight }: HighlightCardProps) {
  const { tag, title, desc, stats, badge } = highlight;

  return (
    <div className="bg-white border-[2.5px] border-ink rounded-[28px] p-9 mb-8 shadow-[8px_8px_0_#1C1024]">
      <div className="inline-block text-ink font-bold text-xs px-3.5 py-1.5 rounded-full mb-4 bg-primary-pale">
        {tag}
      </div>
      <h3 className="font-heading font-extrabold text-[24px] mb-3">{title}</h3>
      <p className="text-[15.5px] leading-relaxed text-[#3A2E44] mb-6">{desc}</p>

      {stats && stats.length > 0 && (
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading font-black text-2xl text-primary leading-none mb-1">{stat.value}</div>
              <div className="text-[13px] text-[#3A2E44] font-semibold max-w-[130px]">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {badge && (
        <div className="inline-block bg-ink text-white font-bold text-[13px] px-4 py-2.5 rounded-full">{badge}</div>
      )}
    </div>
  );
}
