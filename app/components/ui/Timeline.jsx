"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion" // use "framer-motion" if not on v11

export const Timeline = ({ data = [], children }) => {
  // Normalize to a single items array, preferring explicit data prop.
  const items = useMemo(() => {
    if (Array.isArray(data) && data.length) return data;

    // Derive items from <Timeline.Item .../> children
    const derived = React.Children.toArray(children)
      .map((child) => {
        if (!React.isValidElement(child)) return null;
        const { title, date, description, content } = child.props || {};
        const node =
          content ?? (
            <div className="space-y-2">
              {date && (
                <p className="text-xs md:text-sm text-neutral-400">{date}</p>
              )}
              {description && (
                <p className="text-neutral-700 dark:text-neutral-200">
                  {description}
                </p>
              )}
            </div>
          );
        return { title, content: node };
      })
      .filter(Boolean);
    return derived;
  }, [data, children]);

  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Keep height in sync with content size (robust on resize/content changes)
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const update = () => setHeight(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const hasItems = items && items.length > 0;

  return (
    <div
      className="w-full bg-transparent font-sans"
      ref={containerRef}
    >
      {/* no built-in header — your Work() header stays in control */}
      <div ref={ref} className="relative mx-auto pb-20">
        {!hasItems ? (
          <div className="px-2 text-neutral-500 dark:text-neutral-400">
            No timeline items yet.
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              {/* Left sticky title & dot */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-2xl md:pl-20 md:text-3xl font-bold 
                              bg-clip-text text-transparent 
                              bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-200
                              drop-shadow-[0_0_10px_rgba(56,189,248,0.25)]" >
                  {item?.title ?? ""}
                </h3>
              </div>

              {/* Right content */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden text-2xl md:pl-20 md:text-3xl font-bold
             bg-clip-text text-transparent
             bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-200
             drop-shadow-[0_0_10px_rgba(56,189,248,0.25)]
             [-webkit-text-fill-color:transparent]">
                  {item?.title ?? ""}
                </h3>
                {item?.content ?? null}
              </div>
            </div>
          ))
        )}

        {/* Vertical line + animated progress */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 overflow-hidden w-[2px]
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
                     from-transparent from-[0%]
                     via-neutral-200 dark:via-neutral-700
                     to-transparent to-[99%]
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t
                       from-purple-500 via-blue-500 to-transparent
                       from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// Allow <Timeline.Item .../> usage; it renders nothing itself.
Timeline.Item = () => null;

export default Timeline;
