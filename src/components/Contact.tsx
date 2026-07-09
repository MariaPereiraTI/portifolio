import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { socialLinks } from '../data/socialLinks';

const pillBase = 'inline-flex items-center justify-center gap-2 px-[34px] py-4 rounded-full font-bold text-base no-underline transition-colors';

export default function Contact() {
  return (
    <section id="contato" className="relative z-10 px-[6vw] pt-10 pb-[100px]">
      <div className="max-w-[1100px] mx-auto bg-gradient-to-br from-primary-dark to-primary-light border-[2.5px] border-ink rounded-[32px] shadow-[8px_8px_0_#1C1024] px-[6vw] py-16 text-center">
        <h2 className="font-heading font-black text-[clamp(32px,5vw,56px)] text-white mb-5 tracking-tight">
          Vamos criar algo juntos?
        </h2>
        <p className="text-lg text-white/90 max-w-[520px] mx-auto mb-9">
          Estou aberta a oportunidades, freelas e boas conversas sobre front-end e dados.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href={`mailto:${socialLinks.email}`} className={`${pillBase} bg-ink text-white hover:bg-primary`}>
            <FiMail />
            <span>{socialLinks.email}</span>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={`${pillBase} bg-white text-ink hover:bg-primary-pale`}>
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={`${pillBase} bg-white text-ink hover:bg-primary-pale`}>
            <FiGithub />
            <span>GitHub</span>
          </a>
          <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className={`${pillBase} bg-white text-ink hover:bg-primary-pale`}>
            <FiTwitter />
            <span>X</span>
          </a>
        </div>
      </div>
    </section>
  );
}
