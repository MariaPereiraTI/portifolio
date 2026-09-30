import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { socialLinks } from '../data/socialLinks';
import { focusRing } from '../lib/interaction';
import { label } from '../lib/typography';

export default function Footer() {
  return (
    <footer className="max-w-[1100px] mx-auto mb-12 flex items-center justify-between flex-wrap gap-4 px-[6vw] pt-7 border-t border-forest/20">
      <div className={`text-xs text-ink/65 ${label}`}>&copy; 2026 Maria Clara Pereira</div>
      <div className="flex items-center gap-5 text-ink/50">
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`hover:text-forest transition-colors ${focusRing}`}>
          <FiLinkedin size={16} />
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`hover:text-forest transition-colors ${focusRing}`}>
          <FiGithub size={16} />
        </a>
        <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X" className={`hover:text-forest transition-colors ${focusRing}`}>
          <FiTwitter size={16} />
        </a>
      </div>
    </footer>
  );
}
