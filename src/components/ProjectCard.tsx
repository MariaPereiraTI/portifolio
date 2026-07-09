import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { tag, tagBg, title, desc, stack, url, mockBg, emoji, image } = project;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline text-inherit grid grid-cols-[1.1fr_1fr] gap-10 items-center bg-white border-[2.5px] border-ink rounded-[28px] p-9 mb-8 shadow-[8px_8px_0_#1C1024] max-md:grid-cols-1"
    >
      <div>
        <div
          className="inline-block text-ink font-bold text-xs px-3.5 py-1.5 rounded-full mb-4"
          style={{ background: tagBg }}
        >
          {tag}
        </div>
        <h3 className="font-heading font-extrabold text-[26px] mb-3">{title}</h3>
        <p className="text-[15.5px] leading-relaxed text-[#3A2E44] mb-5">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {stack.map((s) => (
            <span key={s} className="text-[12.5px] font-semibold bg-[#FAF7FF] border-[1.5px] border-ink px-3 py-1 rounded-full">
              {s}
            </span>
          ))}
        </div>
        <span className="font-bold text-[15px] text-primary">Ver ao vivo ↗</span>
      </div>
      <div
        className="rounded-2xl overflow-hidden border-2 border-ink flex flex-col aspect-[4/3]"
        style={{ background: mockBg }}
      >
        <div className="flex gap-1.5 px-3.5 py-2.5 bg-black/15">
          <span className="w-2.5 h-2.5 rounded-full bg-white" />
          <span className="w-2.5 h-2.5 rounded-full bg-white" />
          <span className="w-2.5 h-2.5 rounded-full bg-white" />
        </div>
        <div className="flex-1 overflow-hidden flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover object-top block" />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-heading font-black text-4xl text-white/90 text-center p-5">
              {emoji}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
