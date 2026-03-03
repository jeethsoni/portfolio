"use client";

import React from "react";
import { LuHeartHandshake } from "react-icons/lu";
import { AuroraText } from "./ui/aurora-text";


const STACK = [
  "Node.js",
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "AWS",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Tailwind",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <AuroraText className="text-4xl md:text-5xl font-extrabold tracking-tight">About</AuroraText>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            I build clean, reliable apps and love collaborating with teams that move fast
            and communicate clearly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Collaboration */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2">
              <LuHeartHandshake size={22} className="text-white/70" />
              <h3 className="text-xl font-semibold">Collaboration</h3>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Clear handoffs</li>
              <li>• Fast feedback loops</li>
              <li>• Simple, readable code</li>
              <li>• PRs with context</li>
            </ul>

            <p className="mt-4 text-sm text-white/60">
              I’m big on shared goals, honest timelines, and shipping steadily.
            </p>
          </div>

          {/* Card 2: Stack */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h3 className="text-xl font-semibold">My Stack</h3>
            <p className="mt-2 text-sm text-white/60">
              Tools I reach for the most (and keep improving in).
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {STACK.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-lg bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300">
                🤖 Exploring: AI Agents
              </span>
              <span className="rounded-lg bg-fuchsia-500/10 px-3 py-1.5 text-sm text-fuchsia-300">
                🧠 Exploring: ML
              </span>
              <span className="rounded-lg bg-sky-500/10 px-3 py-1.5 text-sm text-sky-300">
                ☁️ Exploring: Cloud
              </span>
            </div>
          </div>

          {/* Card 3: Beyond Code */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:col-span-3">
            <h3 className="text-xl font-semibold">Beyond Code</h3>
            <p className="mt-2 text-sm text-white/70">
              When I’m not building, I’m usually lifting, playing tennis/basketball,
              traveling, or messing around with music.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                🏀 Sports
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                🎾 Tennis
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                💪 Gym
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                🌍 Travel
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                🎸 Music
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}