import type { CSSProperties } from 'react';

/** A 9×9 crosshair marking a grid-line intersection. Fully positioned via `style`. */
export function PlusMark({ style }: { style: CSSProperties }) {
  return (
    <span aria-hidden="true" className="absolute w-[9px] h-[9px] pointer-events-none" style={style}>
      <span className="absolute left-0 top-1/2 w-full h-px -translate-y-1/2 bg-olive" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-olive" />
    </span>
  );
}

/** Column-edge marks sitting on a row's bottom border, present at every bordered horizontal line. */
export function EdgeMarks() {
  return (
    <>
      <PlusMark style={{ left: 0, bottom: '-5px', transform: 'translateX(-50%)' }} />
      <PlusMark style={{ left: '100%', bottom: '-5px', transform: 'translateX(-50%)' }} />
    </>
  );
}
