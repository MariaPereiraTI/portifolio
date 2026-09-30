import Reveal from './Reveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 md:mb-16">
      <h2
        className={`heading-condensed font-black uppercase tracking-tight leading-[0.95] text-[clamp(28px,4.2vw,48px)] m-0 mb-4 ${
          light ? 'text-bone' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      <div className={`h-px w-[100px] mb-5 ${light ? 'bg-sage' : 'bg-forest'}`} />
      {subtitle && (
        <p className={`text-[16px] leading-[1.75] max-w-[540px] ${light ? 'text-sage/90' : 'text-ink/65'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
