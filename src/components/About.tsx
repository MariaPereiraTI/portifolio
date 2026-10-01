import HighlightCard from './HighlightCard';
import SectionHeading from './SectionHeading';
import BorderedColumn from './BorderedColumn';
import Reveal from './Reveal';
import { useContent } from '../i18n/content';

export default function About() {
  const t = useContent();

  return (
    <section id="sobre" className="relative z-10 px-[6vw] pt-6 pb-[100px]">
      <BorderedColumn maxWidth={1000} className="px-8 md:px-10 py-9">
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />
        <Reveal>
          <p className="text-[17px] leading-[1.75] text-ink/75 max-w-[720px]">
            {t.about.introBefore}
            <strong className="text-ink">Python</strong>
            {t.about.introAfter}
          </p>
        </Reveal>
        {t.about.highlights.map((highlight, i) => (
          <HighlightCard
            key={i}
            highlight={highlight}
            index={`0${i + 1}`}
            featured={i === 0}
          />
        ))}
      </BorderedColumn>
    </section>
  );
}
