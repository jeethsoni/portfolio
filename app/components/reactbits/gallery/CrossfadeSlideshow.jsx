"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function CrossfadeSlideshow({
  slides,
  intervalMs = 2000,
  fadeMs = 600,
  pauseOnHover = true,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const keys = useMemo(() => slides.map((_, i) => `slide-${i}`), [slides]);

  useEffect(() => {
    if (!slides.length || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs, paused]);

  const curr = slides[index];

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {/* Taller aspect on small screens → more headroom for faces */}
      <div className="relative w-full rounded-2xl border border-white/10 bg-white/5 aspect-[4/5] sm:aspect-[16/9] lg:h-[300px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={keys[index]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeMs / 1000 }}
          >
            <Image
              src={curr.src}
              alt={curr.alt ?? curr.caption ?? "gallery"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 800px"
              className={
                curr.fit === "contain"
                  ? "object-contain rounded-2xl"
                  : "object-cover rounded-2xl"
              }
              style={{
                objectPosition: curr.objectPos || "center",
              }}
              priority={index === 0}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {curr.caption && (
        <div className="mt-3 text-center">
          <motion.p
            key={`cap-${keys[index]}`}
            className="text-md sm:text-lg text-white/85"
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {curr.caption}
          </motion.p>
        </div>
      )}

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2">
        {slides.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={`dot-${i}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${active ? "w-5 bg-white" : "bg-white/40 hover:bg-white/70"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
