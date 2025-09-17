"use client";

import dynamic from "next/dynamic";

// Load Galaxy only on the client
const Galaxy = dynamic(
  () => import("./reactbits/backgrounds/Galaxy/Galaxy"),
  { ssr: false }
);

export default function GalaxyBackground({
  density = 0.9,
  glowIntensity = 0.5,
  transparent = false,
  className = "",
}) {
  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none fixed ${className}`}>
      <Galaxy
        density={density}
        glowIntensity={glowIntensity}
        transparent={transparent}
      />
    </div>
  );
}
