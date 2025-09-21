import { cn } from "@/lib/utils";

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        // removed p-2; keep CSS vars (you can override --gap per instance)
        "group flex overflow-hidden [--duration:40s] [--gap:0.25rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array(repeat).fill(0).map((_, i) => (
        <div
          key={i}
          className={cn(
            // make items close together and vertically centered
            "flex shrink-0 items-center justify-start [gap:var(--gap)]",
            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
