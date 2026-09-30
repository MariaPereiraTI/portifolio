/** Quiet geometric marks behind the hero/about area — no blobs, no color fills. */
export default function BackgroundGeometry() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[1400px] z-0 overflow-hidden">
      <div className="absolute top-[120px] right-[4vw] w-[420px] h-[420px] border border-olive/30 rotate-[8deg] max-lg:w-[260px] max-lg:h-[260px]" />
      <div className="absolute top-[60px] right-[calc(4vw+40px)] w-[10px] h-[10px] bg-olive max-lg:hidden" />
      <div className="absolute top-[900px] left-[2vw] w-[2px] h-[180px] bg-olive/25 max-lg:hidden" />
      <div className="absolute top-[760px] -left-10 w-[200px] h-[200px] border border-clay/25 rotate-[-6deg] max-lg:hidden" />
    </div>
  );
}
