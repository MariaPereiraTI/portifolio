const ORGANIC_RADIUS = '42% 58% 65% 35% / 45% 40% 60% 55%';

export default function BackgroundBlobs() {
  return (
    <>
      <div
        className="absolute -top-20 -right-24 w-[340px] h-[340px] bg-gradient-to-br from-primary-light to-primary opacity-90 z-0 animate-blob motion-safe:animate-float1"
        style={{ borderRadius: ORGANIC_RADIUS }}
      />
      <div
        className="absolute top-[620px] -left-28 w-[280px] h-[280px] bg-gradient-to-br from-primary-pale to-primary opacity-85 z-0 animate-blob-reverse motion-safe:animate-float2"
        style={{ borderRadius: ORGANIC_RADIUS }}
      />
      <div
        className="absolute top-[1500px] -right-16 w-[220px] h-[220px] bg-gradient-to-br from-primary-dark to-primary-light opacity-80 z-0 animate-blob-slow motion-safe:animate-float3"
        style={{ borderRadius: ORGANIC_RADIUS }}
      />
    </>
  );
}
