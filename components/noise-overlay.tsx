import { useId } from "react";

export default function NoiseOverlay({
  opacity = 0.25,
  baseFrequency = 0.65,
}: {
  opacity?: number;
  baseFrequency?: number;
}) {
  const filterId = useId();

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <filter id={filterId}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency={baseFrequency}
          numOctaves={4}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect
        width="100%"
        height="100%"
        filter={`url(#${filterId})`}
        opacity={opacity}
      />
    </svg>
  );
}
