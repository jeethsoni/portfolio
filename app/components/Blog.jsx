// components/Blog.jsx
"use client";
import React from "react";
import { NotebookPen, Hammer, GraduationCap, Clock, Quote } from "lucide-react";
import { AuroraText } from "./ui/aurora-text";

function Pill({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function SkeletonCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="animate-pulse rounded-lg border border-white/10 bg-white/[0.02] p-4 sm:p-5">
      <div className="mb-3 flex items-center gap-2">
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs text-white/60">{subtitle}</div>
        </div>
      </div>
      <div className="relative mb-3 aspect-[16/9] w-full overflow-hidden rounded-lg bg-white/5">
        <div className="absolute inset-0 grid place-items-center text-white/30">
          <Clock className="h-5 w-5 animate-pulse" />
        </div>
      </div>
      <div className="space-y-2.5">
        <div className="h-3 w-2/3 rounded bg-white/10" />
        <div className="h-3 w-4/5 rounded bg-white/10" />
        <div className="h-3 w-1/2 rounded bg-white/10" />
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <section className="py-8">
      <div className="mb-8 text-center font-serif">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-white/90">
          My {" "}
          <AuroraText>Blog</AuroraText>
        </h2>
        <p className="mt-3 text-sm text-white/70 max-w-xl mx-auto">
          Sharing my thoughts on life, building products, and campus experiences.
        </p>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/5 bg-[#0f0b1f] shadow-[0_8px_30px_rgba(0,0,0,0.25)]  p-6 sm:p-8">
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <Pill icon={NotebookPen} label="Life essays" />
              <Pill icon={Hammer} label="Builder’s diary" />
              <Pill icon={GraduationCap} label="Campus stories" />
            </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>

          <figure className="mx-auto mt-8 max-w-2xl rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-2 flex items-center gap-2 text-white/70">
              <Quote className="h-4 w-4" />
              <figcaption className="text-xs uppercase tracking-wide">Note to self</figcaption>
            </div>
            <blockquote className="text-sm sm:text-base text-white/80">
              Build small, share early, improve in public.
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}
