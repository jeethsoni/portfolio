// NeonInfinity.jsx (fixed responsive chip placement)
"use client";
import React, { useEffect, useRef, useState } from "react";

const Chip = ({ children }) => (
  <div
    className="rounded-xl border border-white/10 bg-black/50 text-white shadow-md backdrop-blur-sm text-center"
    style={{
      padding: "8px 12px",
      fontSize: "clamp(11px, 1vw, 15px)",
      lineHeight: 1.1,
      whiteSpace: "nowrap",
      maxWidth: "42vw",
    }}
  >
    {children}
  </div>
);

export default function NeonInfinity({
  height = "h-40 md:h-56 lg:h-64",
  colorA = "#60A5FA",
  colorB = "#38BDF8",
  coreWidth = 8,
  glowWidth = 26,
  glowBlur = 16,
  messages = [
    "🤝 Clear handoffs",
    "🗓️ Weekly demos",
    "⚡ Async-first",
    "🔍 Open PR reviews",
    "🗺️ Shared roadmap",
  ],
}) {
  const viewBox = "0 0 1000 700";
  const d =
    "M80,350 C80,-50 300,-50 500,350 C700,750 920,750 920,350 C920,-50 700,-50 500,350 C300,750 80,750 80,350 Z";

  const wrapperRef = useRef(null);
  const [tier, setTier] = useState(null); // null until mounted

  // Robust width-based tier detection
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const setByWidth = (w) => {
      if (w < 520) setTier("mobile");
      else if (w < 900) setTier("tablet");
      else setTier("desktop");
    };

    // initial
    setByWidth(el.getBoundingClientRect().width || window.innerWidth);

    // Observe element size
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect?.width ?? el.clientWidth;
        setByWidth(w);
      }
    });
    ro.observe(el);

    // Window resize fallback (some browsers throttle RO weirdly)
    const onWinResize = () => setByWidth(el.getBoundingClientRect().width || window.innerWidth);
    window.addEventListener("resize", onWinResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onWinResize);
    };
  }, []);

  // Balanced positions per tier (percent of the card box)
  const slotsByTier = {
    mobile: [
   { top: "18%", left: "10%" },  // left top
   { bottom: "-10%", left: "10%" }, // left bottom
   { top: "50%", left: "50%" }, // center (crossover)
   { top: "18%", right: "-20%" }, // right top
   { bottom: "-10%", right: "-20%" },
    ],
    tablet: [
    { top: "18%", left: "10%" }, // left top
    { bottom: "-10%", left: "10%" }, // left bottom
    { top: "50%", left: "50%" }, // center (crossover)
    { top: "18%", right: "-10%" }, // right top
    { bottom: "-10%", right: "-10%" },
    ],
    desktop: [
    { top: "18%", left: "10%" },  // left top
    { bottom: "-10%", left: "10%" }, // left bottom
    { top: "50%", left: "50%" }, // center (crossover)
    { top: "18%", right: "-10%" }, // right top
    { bottom: "-10%", right: "-10%" }, // right bottom
    ],
  };

  const slots = slotsByTier[tier ?? "desktop"]; // safe default while mounting

  return (
    <div ref={wrapperRef} className={`relative w-full ${height}`}>
      {/* Infinity shape */}
      <svg viewBox={viewBox} className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="inf-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorA} />
            <stop offset="100%" stopColor={colorB} />
          </linearGradient>
          <filter id="inf-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation={glowBlur} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path d={d} fill="none" stroke="url(#inf-grad)" strokeWidth={glowWidth} strokeLinecap="round" filter="url(#inf-glow)" opacity="0.9" />
        <path d={d} fill="none" stroke="url(#inf-grad)" strokeWidth={coreWidth} strokeLinecap="round" />
      </svg>

      {/* Fixed, responsive chips */}
      <div className="absolute inset-0 pointer-events-none">
        {messages.slice(0, 5).map((msg, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={slots[i]}
          >
            <Chip>{msg}</Chip>
          </div>
        ))}
      </div>
    </div>
  );
}
