"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Timeline = ({ data = [], children }) => {
  const items = useMemo(() => {
    if (Array.isArray(data) && data.length) return data;

    const derived = React.Children.toArray(children)
      .map((child) => {
        if (!React.isValidElement(child)) return null;
        const { title, date, description, content } = child.props || {};
        const node = content ?? (
          <div className="space-y-2">
            {date && <p className="text-xs md:text-sm text-neutral-400">{date}</p>}
            {description && (
              <p className="text-neutral-700 dark:text-neutral-200">{description}</p>
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
    <div className="w-full bg-transparent font-sans" ref={containerRef}>
      <div ref={ref} className="relative mx-auto">
        {!hasItems ? (
          <div className="px-2 text-neutral-500 dark:text-neutral-400">
            No timeline items yet.
          </div>
        ) : (
          items.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 md:pt-10 md:gap-10">
              <div className="sticky top-40 z-40 flex max-w-xs self-start md:w-full md:max-w-sm flex-col items-center md:flex-row">
                <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black">
                  <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
                </div>

                <div className="hidden md:block md:pl-20">{item?.title ?? ""}</div>
              </div>

              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <div className="md:hidden mb-4">{item?.title ?? ""}</div>
                {item?.content ?? null}
              </div>
            </div>
          ))
        )}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
                     from-transparent from-[0%]
                     via-neutral-200 dark:via-neutral-700
                     to-transparent to-[99%]
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t
                       from-purple-500 via-blue-500 to-transparent
                       from-[0%] via-[10%]"
          />
        </div>
      </div>
    </div>
  );
};

Timeline.Item = () => null;

export default Timeline;
