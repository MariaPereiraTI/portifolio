import { aboutHighlights } from '../data/about';
import HighlightCard from './HighlightCard';
import SectionHeading from './SectionHeading';
import BorderedColumn from './BorderedColumn';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="sobre" className="relative z-10 px-[6vw] pt-6 pb-[100px]">
      <BorderedColumn maxWidth={1000} className="px-8 md:px-10 py-9">
        <SectionHeading
          title="Sobre mim"
          subtitle="Minha formação e as conquistas que mais me orgulham até aqui."
        />
        <Reveal>
          <p className="text-[17px] leading-[1.75] text-ink/75 max-w-[720px]">
            Sou formada pelo CETI Liceu Parnaibano, onde desenvolvi habilidades práticas em manutenção de
            computadores, redes, desenvolvimento em <strong className="text-ink">Python</strong>, banco de dados e
            estruturas de dados — uma base sólida que carrego em cada projeto que construo.
          </p>
        </Reveal>
        {aboutHighlights.map((highlight, i) => (
          <HighlightCard
            key={highlight.title}
            highlight={highlight}
            index={`0${i + 1}`}
            featured={i === 0}
          />
        ))}
      </BorderedColumn>
    </section>
  );
}
