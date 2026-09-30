/**
 * Shared interaction vocabulary, standardized from the Hero.
 *
 * Dark backgrounds (ink): interactive text/icons rest at `sage` (muted) and
 * brighten to `paper` (near-white) on hover/focus/active — the Hero's nav
 * links and icon buttons. Borders on dark backgrounds rest at `forest` and
 * lighten to `sage` on hover, matching the Hero's icon-button frame.
 */
export const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-olive';

export const darkHoverText = `text-sage hover:text-paper transition-colors duration-200 ${focusRing}`;

export const darkIconButton = `border border-forest text-sage hover:text-paper hover:border-sage hover:bg-night transition-colors duration-200 ${focusRing}`;
