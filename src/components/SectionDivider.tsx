import { PlusMark } from './GridMark';

/** The Hero's grid-line + plus-mark motif, reused as a hairline seam between sections. No fill, no height of its own — it sits flush on the boundary, same as a row border inside the Hero. */
export default function SectionDivider() {
  return (
    <div aria-hidden="true" className="relative z-10 w-full mx-auto max-w-[1100px] px-[6vw]">
      <div className="relative h-px w-full bg-olive/40">
        <PlusMark style={{ left: 0, top: '50%', transform: 'translate(-50%, -50%)' }} />
        <PlusMark style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
        <PlusMark style={{ left: '100%', top: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>
    </div>
  );
}
