import type { Project } from '../types';
import Reveal from './Reveal';
import { focusRing } from '../lib/interaction';
import { label, headingCondensed } from '../lib/typography';
import { useContent } from '../i18n/content';

interface ProjectCardProps {
  project: Project;
  index: string;
  variant?: 'featured' | 'secondary';
}

export default function ProjectCard({ project, index, variant = 'secondary' }: ProjectCardProps) {
  const t = useContent();
  const { tag, tagBg, title, desc, stack, url, mockBg, emoji, image } = project;
  const isFeatured = variant === 'featured';

  return (
    <Reveal>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group no-underline text-inherit grid gap-8 items-center border-t border-forest/20 pt-9 pb-1 max-md:grid-cols-1 ${focusRing} ${
          isFeatured ? 'md:grid-cols-[1fr_1.15fr] md:gap-14' : 'md:grid-cols-[240px_1fr] md:gap-10'
        }`}
      >
        <div className={isFeatured ? 'md:order-2' : ''}>
          <div
            className="relative overflow-hidden border border-ink/10 flex flex-col aspect-[4/3]"
            style={{ background: mockBg }}
          >
            <div className="flex gap-1.5 px-3 py-2.5 bg-black/20" aria-hidden="true">
              <span className="w-2 h-2 bg-bone/70" />
              <span className="w-2 h-2 bg-bone/70" />
              <span className="w-2 h-2 bg-bone/70" />
            </div>
            <div className="flex-1 overflow-hidden flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.05]"
                />
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center text-center p-5 ${
                    isFeatured ? 'text-6xl' : 'text-4xl'
                  }`}
                >
                  {emoji}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={isFeatured ? 'md:order-1' : ''}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-olive" aria-hidden="true">{index}</span>
            <span className={`inline-flex items-center gap-2 text-[11px] text-forest border border-forest/40 px-3 py-1 ${label}`}>
              <span className="w-2 h-2 inline-block" style={{ background: tagBg }} aria-hidden="true" />
              {tag}
            </span>
          </div>
          <h3
            className={`${headingCondensed} font-black mb-3 text-ink leading-tight ${
              isFeatured ? 'text-[26px] md:text-[34px]' : 'text-[19px] md:text-[21px]'
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-ink/70 leading-[1.75] mb-5 ${
              isFeatured ? 'text-[15.5px] max-w-[440px]' : 'text-[14px] max-w-[400px]'
            }`}
          >
            {desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {stack.map((s) => (
              <span key={s} className="text-[11.5px] font-semibold border border-ink/20 px-2.5 py-1">
                {s}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 font-bold text-[14px] text-forest transition-[gap,color] group-hover:gap-2.5 group-hover:text-ink">
            {t.projects.viewLive} <span aria-hidden="true">↗</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}
