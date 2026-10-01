import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import perfilImg from '../assets/perfil.png';
import { focusRing, darkIconButton } from '../lib/interaction';
import { PlusMark, EdgeMarks } from './GridMark';
import LanguageSwitcher from './LanguageSwitcher';
import { useContent } from '../i18n/content';

const bioLink = `text-paper font-semibold no-underline border-b border-olive hover:text-sage hover:border-sage transition-colors duration-200 ${focusRing}`;

export default function Hero() {
  const t = useContent();
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#sobre', label: t.nav.about, id: 'sobre' },
    { href: '#projetos', label: t.nav.projects, id: 'projetos' },
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#experiencia', label: t.nav.experience, id: 'experiencia' },
  ];

  const iconLinks = [
    { Icon: FiGithub, label: 'GitHub', href: 'https://github.com/MariaPereiraTI', external: true },
    {
      Icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/maria-clara-pereira-santos/',
      external: true,
    },
    { Icon: FiTwitter, label: 'X', href: 'https://x.com/ZeninnDev', external: true },
    { Icon: FiMail, label: t.hero.emailLabel, href: 'mailto:mariclarapereira.ti@gmail.com', external: false },
  ];

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const contatoButton = (
    <a
      href="#contato"
      className={`group inline-flex items-center h-11 bg-forest text-paper pl-4 pr-1 text-sm font-medium no-underline hover:bg-night transition-colors duration-200 ${focusRing}`}
    >
      {t.nav.contact}
      <span className="ml-3 w-[34px] h-[34px] flex items-center justify-center bg-ink text-bone transition-transform duration-200 group-hover:translate-y-0.5">
        <span aria-hidden="true">↓</span>
      </span>
    </a>
  );

  return (
    <header id="inicio" className="relative z-10 bg-ink font-heading min-h-dvh flex flex-col">
      {/* Linha 1 — Navbar */}
      <div className="relative w-full border-b border-night shrink-0">
        <div className="relative mx-4 md:mx-auto md:w-[90%] md:max-w-[880px] h-16">
          {/* Desktop/tablet: logo centrado, links à esquerda, contato à direita */}
          <nav
            aria-label={t.nav.mainNav}
            className="hidden md:grid grid-cols-[1fr_64px_1fr] h-full"
          >
            <div className="flex items-center gap-7 pl-6 h-full">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative h-full flex items-center text-[14px] no-underline transition-colors duration-200 ${
                      isActive ? 'text-paper' : 'text-sage hover:text-paper'
                    } ${focusRing}`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-sage"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <a
              href="#inicio"
              aria-label={t.nav.home}
              className={`flex items-center justify-center h-full border-x border-night text-[13px] text-sage no-underline hover:bg-night transition-colors duration-200 ${focusRing}`}
            >
              {'</>'}
            </a>

            <div className="flex items-center justify-end gap-3 pr-3 h-full">
              <LanguageSwitcher />
              {contatoButton}
            </div>
          </nav>

          {/* Mobile: logo à esquerda, menu + contato à direita */}
          <div className="md:hidden grid grid-cols-[60px_1fr_auto] h-full items-center">
            <a
              href="#inicio"
              aria-label={t.nav.home}
              className={`flex items-center justify-center h-full border-r border-night text-[13px] text-sage no-underline ${focusRing}`}
            >
              {'</>'}
            </a>
            <div />
            <div className="flex items-center gap-2 pr-2">
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="hero-mobile-menu"
                aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
                className={`flex items-center gap-2 h-11 px-3 min-w-[44px] text-[12px] uppercase tracking-[0.14em] text-sage ${focusRing}`}
              >
                <span aria-hidden="true" className="flex flex-col gap-[4px] w-4">
                  <span className="h-px w-full bg-sage" />
                  <span className="h-px w-2/3 bg-sage" />
                </span>
                Menu
              </button>
              <LanguageSwitcher />
              {contatoButton}
            </div>
          </div>

          <EdgeMarks />
          <PlusMark style={{ left: 'calc(50% - 32px)', bottom: '-5px', transform: 'translateX(-50%)' }} />
          <PlusMark style={{ left: 'calc(50% + 32px)', bottom: '-5px', transform: 'translateX(-50%)' }} />
        </div>

        <div
          id="hero-mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            menuOpen ? 'max-h-[260px]' : 'max-h-0'
          }`}
        >
          <div className="mx-4 flex flex-col border-t border-night">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`min-h-[44px] flex items-center text-[13px] uppercase tracking-[0.14em] no-underline border-b border-night/70 ${
                    isActive ? 'text-paper' : 'text-sage'
                  } ${focusRing}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Linha 2 — Perfil */}
      <div className="relative w-full border-b border-night shrink-0">
        <div className="relative mx-4 md:mx-auto md:w-[90%] md:max-w-[880px]">
          {/* Desktop/tablet */}
          <div className="hidden md:grid grid-cols-[172px_1fr_236px] divide-x divide-night min-h-[212px]">
            <div className="flex items-center justify-center">
              <div className="relative w-[116px] h-[116px]">
                <img
                  src={perfilImg}
                  alt="Foto de Maria Clara Pereira"
                  className="w-full h-full rounded-full object-cover border-2 border-forest"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-1 -bottom-0.5 w-[34px] h-[34px] rounded-full bg-ink border-[1.5px] border-olive flex items-center justify-center text-[10px] text-sage"
                >
                  {'</>'}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center px-7 py-[30px]">
              <h1 className="heading-condensed text-[52px] leading-[0.95] font-bold text-paper m-0">
                Maria Clara Pereira
              </h1>
              <p className="text-[13px] text-sage/75 mt-2 mb-0">@ZeninnDev</p>
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-bone tabular-nums mt-3 mb-0">
                {t.hero.role}
              </p>
              <div className="flex gap-2 mt-5">
                {iconLinks.map(({ Icon, label, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={`w-11 h-11 flex items-center justify-center ${darkIconButton}`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-[22px] px-6 py-[34px]">
              <div>
                <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-sage/70 tabular-nums">
                  {t.hero.education}
                </div>
                <div className="text-[13px] text-bone mt-1.5">{t.hero.educationValue}</div>
              </div>
              <div>
                <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-sage/70 tabular-nums">
                  {t.hero.status}
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span
                    aria-hidden="true"
                    className="w-[7px] h-[7px] bg-sage shrink-0 animate-status-pulse"
                  />
                  <span className="text-[13px] text-bone">{t.hero.statusValue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <div className="grid grid-cols-[112px_1fr] min-h-[140px]">
              <div className="flex items-center justify-center border-r border-night">
                <div className="relative w-[84px] h-[84px]">
                  <img
                    src={perfilImg}
                    alt="Foto de Maria Clara Pereira"
                    className="w-full h-full rounded-full object-cover border-2 border-forest"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-1 -bottom-0.5 w-[28px] h-[28px] rounded-full bg-ink border-[1.5px] border-olive flex items-center justify-center text-[9px] text-sage"
                  >
                    {'</>'}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-5 py-5">
                <h1 className="heading-condensed text-[38px] leading-[0.95] font-bold text-paper m-0">
                  Maria Clara Pereira
                </h1>
                <p className="text-[12px] text-sage/75 mt-2 mb-0">@ZeninnDev</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-bone tabular-nums mt-2 mb-0">
                  {t.hero.role.split(' · ')[0]}
                  <br />
                  {t.hero.role.split(' · ')[1]}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 border-t border-night divide-x divide-night h-[52px]">
              {iconLinks.map(({ Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={`flex items-center justify-center text-sage hover:text-paper transition-colors duration-200 ${focusRing}`}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 divide-x divide-night border-t border-night">
              <div className="px-4 py-4">
                <div className="text-[9px] font-medium uppercase tracking-[0.14em] text-sage/70 tabular-nums">
                  {t.hero.education}
                </div>
                <div className="text-[11px] text-bone mt-1">{t.hero.educationValue}</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-[9px] font-medium uppercase tracking-[0.14em] text-sage/70 tabular-nums">
                  {t.hero.status}
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span
                    aria-hidden="true"
                    className="w-[7px] h-[7px] bg-sage shrink-0 animate-status-pulse"
                  />
                  <span className="text-[11px] text-bone">{t.hero.statusValue}</span>
                </div>
              </div>
            </div>
          </div>

          <EdgeMarks />
          <div className="hidden md:contents">
            <PlusMark style={{ left: 172, bottom: '-5px', transform: 'translateX(-50%)' }} />
            <PlusMark style={{ right: 236, bottom: '-5px', transform: 'translateX(50%)' }} />
          </div>
          <div className="md:hidden contents">
            <PlusMark style={{ left: 112, bottom: '-5px', transform: 'translateX(-50%)' }} />
          </div>
        </div>
      </div>

      {/* Linha 3 — Bio */}
      <div className="relative w-full border-b border-night shrink-0">
        <div className="relative mx-4 md:mx-auto md:w-[90%] md:max-w-[880px] px-7 pt-7 pb-7.5 max-md:px-0">
          <p className="text-[15px] md:text-[17px] leading-[1.75] text-sage max-w-[620px] m-0">
            {t.hero.bioBefore}
            <a href="https://paradevs.io/software-house" className={bioLink}>ParaDevs</a>
            {t.hero.bioAfter}
          </p>

          <div className="flex gap-6 mt-5">
            <a
              href="#projetos"
              className={`min-h-[44px] flex items-center text-[12px] font-medium uppercase tracking-[0.14em] tabular-nums text-sage no-underline hover:text-paper hover:tracking-[0.2em] transition-all duration-300 ${focusRing}`}
            >
              {t.hero.viewProjects} <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#contato"
              className={`min-h-[44px] flex items-center text-[12px] font-medium uppercase tracking-[0.14em] tabular-nums text-sage no-underline hover:text-paper hover:tracking-[0.2em] transition-all duration-300 ${focusRing}`}
            >
              {t.hero.getInTouch} <span aria-hidden="true">→</span>
            </a>
          </div>

          <EdgeMarks />
        </div>
      </div>

      {/* Linha 4 — Faixa hachurada */}
      <div
        className="relative w-full h-[44px] md:h-[52px] shrink-0"
        style={{
          background: '#101510',
          backgroundImage:
            'repeating-linear-gradient(135deg, #1D2B22 0px, #1D2B22 1px, transparent 1px, transparent 9px)',
        }}
      >
        <div className="relative mx-4 md:mx-auto md:w-[90%] md:max-w-[880px] h-full border-x border-night flex items-center justify-center">
          <span
            aria-hidden="true"
            lang="ja"
            className="text-[12px] tracking-[0.3em] text-sage bg-ink border border-forest px-[14px] py-[6px]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            ソフトウェアエンジニア
          </span>
          <EdgeMarks />
        </div>
      </div>

      {/* Linha 5 — Respiro (cresce para preencher o resto da viewport) */}
      <div className="relative w-full flex-1 min-h-7 md:min-h-10">
        <div className="mx-4 md:mx-auto md:w-[90%] md:max-w-[880px] h-full border-x border-night" />
      </div>
    </header>
  );
}
