import { aboutHighlights } from '../data/about';
import HighlightCard from './HighlightCard';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="sobre" className="relative z-10 px-[6vw] pt-10 pb-[100px]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          number="01"
          title="Sobre mim"
          subtitle="Minha formação e as conquistas que mais me orgulham até aqui."
        />
        <p className="text-[17px] leading-relaxed text-[#3A2E44] max-w-[720px] mb-10">
          Sou formada pelo CETI Liceu Parnaibano, onde desenvolvi habilidades práticas em manutenção de
          computadores, redes, desenvolvimento em <strong className="text-ink">Python</strong>, banco de dados e
          estruturas de dados — uma base sólida que carrego em cada projeto que construo.
        </p>
        {aboutHighlights.map((highlight) => (
          <HighlightCard key={highlight.title} highlight={highlight} />
        ))}
      </div>
    </section>
  );
}
