"use client";
import { useEffect, useState, useMemo } from "react";

export default function useScrollSpy(
  sectionIds,
  { rootMargin = "-40% 0px -55% 0px" } = {}
) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] ?? null);
  const ids = useMemo(() => (sectionIds || []).filter(Boolean), [sectionIds]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
