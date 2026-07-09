import perfilImg from '../assets/perfil.png';

export default function Hero() {
  return (
    <section className="relative z-10 px-[6vw] pt-[90px] pb-[110px] max-w-[1400px] w-full mx-auto flex items-center justify-between gap-10 max-lg:flex-col max-lg:justify-center max-lg:text-center">
      
      <div className="flex-shrink-0 max-lg:mt-10">
        <div className="w-[260px] h-[260px] overflow-hidden rounded-[32px] border-4 border-ink shadow-[10px_10px_0_#7C3AED] bg-white">
          <img src={perfilImg} alt="Foto de Maria Clara Pereira" className="w-full h-full object-cover block" />
        </div>
      </div>
      <div className="flex-1">
        <div className="inline-flex items-center gap-2 bg-ink text-primary-pale px-[18px] py-2 rounded-full font-bold text-[13px] tracking-wide mb-7">
          Disponível para novos projetos
        </div>
        <h1 className="font-heading font-black text-[clamp(42px,7vw,84px)] leading-[1.02] mb-6 tracking-tight">
          Oi, eu sou
          <br />
          <span className="text-primary">Maria Clara Pereira.</span>
        </h1>
        <p className="text-[clamp(18px,2.4vw,24px)] font-medium leading-relaxed max-w-[640px] text-[#3A2E44] mb-10">
          Desenvolvedora <strong className="text-primary">Front-end</strong> e estudante de{' '}
          <strong className="text-primary">Análise de Dados</strong>. Transformo ideias em interfaces bonitas, e
          dados em decisões — com bastante cor no caminho.
        </p>
        <div className="flex gap-4 flex-wrap max-lg:justify-center">
          <a
            href="#projetos"
            className="bg-ink text-white px-8 py-4 rounded-full font-bold text-base no-underline border-2 border-ink inline-block hover:bg-primary hover:border-primary transition-colors"
          >
            Ver projetos ↓
          </a>
          <a
            href="#contato"
            className="bg-transparent text-ink px-8 py-4 rounded-full font-bold text-base no-underline border-2 border-ink inline-block hover:bg-ink hover:text-white transition-colors"
          >
            Falar comigo
          </a>
        </div>
      </div>
      
    </section>
  );
}
