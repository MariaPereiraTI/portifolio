import type { ReactNode } from 'react';
import { PlusMark } from './GridMark';

interface BorderedColumnProps {
  children: ReactNode;
  maxWidth: number;
  dark?: boolean;
  className?: string;
}

/**
 * The Hero's bordered-column motif (vertical side borders + corner crosshairs),
 * reused as the content frame for every section so the whole page reads as one
 * continuous technical grid, not just the Hero.
 */
export default function BorderedColumn({ children, maxWidth, dark, className = '' }: BorderedColumnProps) {
  const border = dark ? 'border-night' : 'border-forest/20';
  return (
    <div className={`relative mx-auto border-x ${border} ${className}`} style={{ maxWidth }}>
      <PlusMark style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }} />
      <PlusMark style={{ left: '100%', top: 0, transform: 'translate(-50%, -50%)' }} />
      <PlusMark style={{ left: 0, top: '100%', transform: 'translate(-50%, -50%)' }} />
      <PlusMark style={{ left: '100%', top: '100%', transform: 'translate(-50%, -50%)' }} />
      {children}
    </div>
  );
}
