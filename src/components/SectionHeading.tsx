interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ number, title, subtitle, light }: SectionHeadingProps) {
  return (
    <>
      <div className="flex items-baseline gap-3.5 mb-3">
        <span className={`font-heading font-extrabold text-[15px] ${light ? 'text-primary-pale' : 'text-primary'}`}>
          {number}
        </span>
        <h2 className={`font-heading font-black text-[clamp(32px,4.5vw,48px)] m-0 ${light ? 'text-white' : 'text-ink'}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-[17px] mb-12 max-w-[560px] ${light ? 'text-[#D9CFE6]' : 'text-[#3A2E44]'}`}>{subtitle}</p>
      )}
    </>
  );
}
