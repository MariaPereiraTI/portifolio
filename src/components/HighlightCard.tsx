import type { AboutHighlight } from '../types';
import Reveal from './Reveal';
import { label, headingCondensed } from '../lib/typography';

interface HighlightCardProps {
  highlight: AboutHighlight;
  index: string;
  featured?: boolean;
}

export default function HighlightCard({ highlight, index, featured }: HighlightCardProps) {
  const { tag, title, desc, stats, badge } = highlight;

  return (
    <Reveal>
      <div className="grid grid-cols-[44px_1fr] md:grid-cols-[72px_1fr] gap-5 md:gap-8 border-t border-forest/20 py-9">
        <div className="font-black text-forest/35 text-2xl md:text-3xl leading-none pt-1" aria-hidden="true">
          {index}
        </div>
        <div>
          <div className={`inline-block text-[11px] text-forest border border-forest/40 px-3 py-1.5 mb-4 ${label}`}>
            {tag}
          </div>
          <h3
            className={`${headingCondensed} font-extrabold mb-3 text-ink leading-tight ${
              featured ? 'text-[24px] md:text-[30px]' : 'text-[20px] md:text-[22px]'
            }`}
          >
            {title}
          </h3>
          <p className="text-[15px] leading-[1.75] text-ink/70 max-w-[640px] mb-6">{desc}</p>

          {stats && stats.length > 0 && (
            <div className="flex flex-wrap gap-x-10 gap-y-5 mb-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-black text-2xl text-forest leading-none mb-1.5">{stat.value}</div>
                  <div className={`text-[12.5px] text-ink/60 max-w-[140px] ${label}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {badge && (
            <div className="inline-block bg-ink text-bone font-semibold text-[12.5px] px-4 py-2.5">{badge}</div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
