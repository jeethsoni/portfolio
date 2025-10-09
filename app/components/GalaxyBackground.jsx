"use client";

import dynamic from "next/dynamic";

const Galaxy = dynamic(
  () => import("./reactbits/backgrounds/Galaxy"),
  { ssr: false }
);

export default function GalaxyBackground({
  density = 0.5,
  glowIntensity = 0.5,
  transparent = false,
  className = "",
}) {
  return (
    <div className={`inset-0 -z-10 pointer-events-none fixed ${className}`}>
      <Galaxy
        density={0.5} glowIntensity={0.1} transparent={false} speed={0} mouseInteraction={false} mouseRepulsion={false} twinkleIntensity={0} starSpeed={0} 
      />
    </div>
  );
}
