import { useEffect, useRef, useState } from 'react';
import { FiCheck, FiChevronDown } from 'react-icons/fi';
import { focusRing } from '../lib/interaction';

const languages = [
  { code: 'PT', label: 'Português' },
  { code: 'EN', label: 'English' },
  { code: 'ES', label: 'Español' },
];

/**
 * Visual-only language switcher, styled to match the Hero's editorial grid
 * (sharp corners, forest/sage/paper interaction vocabulary). Selecting an
 * option only updates which one shows a checkmark — the page content isn't
 * translated yet.
 */
export default function LanguageSwitcher() {
  const [lang, setLang] = useState('PT');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Idioma selecionado: ${lang}`}
        className={`flex items-center gap-1.5 h-11 px-3 border border-forest text-sage text-xs font-bold tracking-[0.1em] no-underline hover:border-sage hover:text-paper transition-colors duration-200 ${focusRing}`}
      >
        {lang}
        <FiChevronDown
          aria-hidden="true"
          size={13}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Selecionar idioma"
          className="absolute right-0 top-[calc(100%+6px)] w-[168px] bg-ink border border-night z-50"
        >
          {languages.map((l) => {
            const isActive = lang === l.code;
            return (
              <li key={l.code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-sm no-underline border-b border-night last:border-b-0 transition-colors duration-200 ${
                    isActive ? 'text-paper' : 'text-sage hover:text-paper'
                  } ${focusRing}`}
                >
                  <span className="flex items-center gap-2">
                    <FiCheck
                      aria-hidden="true"
                      size={14}
                      className={`text-olive transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    />
                    {l.label}
                  </span>
                  <span className="text-[11px] text-sage/60 tabular-nums" aria-hidden="true">{l.code}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
