import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { socialLinks } from '../data/socialLinks';
import Reveal from './Reveal';
import BorderedColumn from './BorderedColumn';
import { darkIconButton, focusRing } from '../lib/interaction';
import { headingCondensed } from '../lib/typography';
import { useContent } from '../i18n/content';

const ghostLink = `inline-flex items-center justify-center gap-2 px-7 py-4 font-medium text-sm no-underline ${darkIconButton}`;

export default function Contact() {
  const t = useContent();

  return (
    <section id="contato" className="relative z-10 px-[6vw] pt-6 pb-[90px]">
      <BorderedColumn maxWidth={1100} dark>
        <div className="bg-ink px-[6vw] py-20 text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-sage/70 mb-6 inline-block">
              {t.contact.eyebrow}
            </span>
            <h2
              className={`${headingCondensed} font-black uppercase text-[clamp(30px,5.4vw,58px)] leading-[0.95] text-paper mb-6 tracking-tight max-w-[720px] mx-auto`}
            >
              {t.contact.title}
            </h2>
            <p className="text-[17px] leading-[1.75] text-bone/65 max-w-[520px] mx-auto mb-12">
              {t.contact.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={`mailto:${socialLinks.email}`}
                className={`inline-flex items-center justify-center gap-2 px-7 py-4 font-medium text-sm no-underline bg-bone text-ink transition-colors hover:bg-sage ${focusRing}`}
              >
                <FiMail aria-hidden="true" />
                <span>{socialLinks.email}</span>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={ghostLink}>
                <FiLinkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={ghostLink}>
                <FiGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className={ghostLink}>
                <FiTwitter aria-hidden="true" />
                <span>X</span>
              </a>
            </div>
          </Reveal>
        </div>
      </BorderedColumn>
    </section>
  );
}
