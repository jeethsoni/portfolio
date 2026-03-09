"use client";

import React from "react";
import SpotlightCard from "./reactbits/cards/SpotlightCard";
import { LuHeartHandshake } from "react-icons/lu";
import CrossfadeSlideshow from "./reactbits/gallery/CrossfadeSlideshow";

// devicons
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import JavaOriginalWordmark from "devicons-react/icons/JavaOriginalWordmark";
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal";
import CsharpOriginal from "devicons-react/icons/CsharpOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import Html5Original from "devicons-react/icons/Html5Original";
import Css3Original from "devicons-react/icons/Css3Original";
import NodejsOriginalWordmark from "devicons-react/icons/NodejsOriginalWordmark";
import AmazonwebservicesOriginalWordmark from "devicons-react/icons/AmazonwebservicesOriginalWordmark";
import ArduinoOriginal from "devicons-react/icons/ArduinoOriginal";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import FastapiOriginal from "devicons-react/icons/FastapiOriginal";
import FlaskOriginal from "devicons-react/icons/FlaskOriginal";
import GitOriginal from "devicons-react/icons/GitOriginal";
import MongodbOriginal from "devicons-react/icons/MongodbOriginal";
import MysqlOriginalWordmark from "devicons-react/icons/MysqlOriginalWordmark";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import PytestOriginal from "devicons-react/icons/PytestOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import RedisOriginal from "devicons-react/icons/RedisOriginal";
import SpringOriginal from "devicons-react/icons/SpringOriginal";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import GolandOriginal from "devicons-react/icons/GolandOriginal";
import { Zod, ExpressJsLight, GitHubLight } from "developer-icons";
import { Smartphone } from "lucide-react";

const STACK = [
  { icon: <PythonOriginal size={24} />, label: "Python" },
  { icon: <JavascriptOriginal size={24} />, label: "JavaScript" },
  { icon: <TypescriptOriginal size={24} />, label: "TypeScript" },
  { icon: <JavaOriginalWordmark size={28} />, label: "Java" },
  { icon: <GolandOriginal size={24} />, label: "Go" },
  { icon: <CplusplusOriginal size={24} />, label: "C++" },
  { icon: <CsharpOriginal size={24} />, label: "C#" },
  { icon: <Html5Original size={24} />, label: "HTML5" },
  { icon: <Css3Original size={24} />, label: "CSS3" },
  { icon: <NodejsOriginalWordmark size={28} />, label: "Node.js" },
  { icon: <ExpressJsLight size={24} />, label: "Express" },
  { icon: <ReactOriginal size={24} />, label: "React" },
  { icon: <NextjsOriginal size={24} />, label: "Next.js" },
  { icon: <FastapiOriginal size={24} />, label: "FastAPI" },
  { icon: <FlaskOriginal size={24} />, label: "Flask" },
  { icon: <SpringOriginal size={24} />, label: "Spring Boot" },
  { icon: <TailwindcssOriginal size={24} />, label: "Tailwind" },
  { icon: <MongodbOriginal size={24} />, label: "MongoDB" },
  { icon: <MysqlOriginalWordmark size={28} />, label: "MySQL" },
  { icon: <PostgresqlOriginal size={24} />, label: "PostgreSQL" },
  { icon: <RedisOriginal size={24} />, label: "Redis" },
  { icon: <AmazonwebservicesOriginalWordmark size={28} />, label: "AWS" },
  { icon: <DockerOriginal size={24} />, label: "Docker" },
  { icon: <GitOriginal size={24} />, label: "Git" },
  { icon: <GitHubLight size={24} />, label: "GitHub" },
  { icon: <PytestOriginal size={24} />, label: "Pytest" },
  { icon: <Zod size={24} />, label: "Zod" },
  { icon: <ArduinoOriginal size={24} />, label: "Arduino" },
];

const CORE_LANGUAGES = [
  { icon: <PythonOriginal size={34} />, label: "Python" },
  { icon: <JavascriptOriginal size={34} />, label: "JavaScript" },
  { icon: <TypescriptOriginal size={34} />, label: "TypeScript" },
  { icon: <JavaOriginalWordmark size={40} />, label: "Java" },
  { icon: <GolandOriginal size={34} />, label: "Go" },
  { icon: <CplusplusOriginal size={34} />, label: "C++" },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/10 via-black/0 to-black/10" />

      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-6 gap-4 md:auto-rows-[19rem]">
          {/* CARD 1 */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
              col-span-6 md:col-span-4
              p-4 sm:p-5 md:p-6
              max-md:min-h-[21rem]
            "
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LuHeartHandshake size={26} className="text-gray-400" />
                <h3 className="text-xl sm:text-2xl text-purple-400 font-bold">
                  About Me
                </h3>
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                I enjoy building software that is practical, scalable, and easy to use.
                My favorite work lives at the intersection of clean backend systems,
                thoughtful product design, and solving real-world problems.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/85">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  🤝 Clear communication and collaboration
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  ⚡ Fast iteration and shipping
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  🧪 Clean, testable code
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  🗺️ Building with long-term scalability in mind
                </div>
              </div>
            </div>

            <p className="mt-6 text-white/60 text-sm sm:text-base italic">
              I care about building things that work well, feel polished, and actually help people.
            </p>
          </SpotlightCard>

          {/* CARD 2 */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col overflow-hidden rounded-xl
              col-span-6 md:col-span-2 md:row-span-2
              p-4 sm:p-5 md:p-6
              max-md:min-h-[35rem]
            "
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold text-pink-400 text-center tracking-wide">
                Tech I Work With
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {STACK.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90"
                  >
                    <span className="shrink-0">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <h4 className="text-base sm:text-lg uppercase text-amber-300 mb-2 font-semibold">
                  🚀 Currently Exploring
                </h4>
                <ul className="mt-2 flex flex-col w-fit gap-2 justify-center mx-auto">
                  <li className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300">
                    🤖 AI Agents
                  </li>
                  <li className="flex items-center gap-2 rounded-lg bg-fuchsia-500/10 px-3 py-1.5 text-sm text-fuchsia-300">
                    🧠 Machine Learning
                  </li>
                  <li className="flex items-center gap-2 rounded-lg bg-sky-500/10 px-3 py-1.5 text-sm text-sky-300">
                    ☁️ Cloud
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-6 rounded-full border border-gray-700 bg-gray-600 p-2 text-center">
                <p className="text-sm text-white/80 flex flex-row flex-wrap justify-center gap-1">
                  <span className="flex items-center">☕ Coffee-driven Commits</span>
                  <span className="text-white/40">•</span>
                  <span className="flex items-center">🌙 Late-night Debugging</span>
                  <span className="text-white/40">•</span>
                  <span className="flex items-center">🎧 Code + Lo-Fi</span>
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* CARD 3 */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
              col-span-6 md:col-span-2 md:row-span-2
              p-4 sm:p-5 md:p-6
              max-md:min-h-[35rem]
            "
          >
            <div className="mb-4 text-center">
              <h3 className="md:text-2xl text-xl font-bold text-emerald-500 drop-shadow-sm">
                Beyond Code
              </h3>
              <p className="mt-1 text-base sm:text-md text-gray-400 italic">
                Chasing growth on & off the keyboard
              </p>
            </div>

            <div className="relative mt-4 rounded-xl overflow-hidden shadow-xl font-bebas">
              <CrossfadeSlideshow
                intervalMs={2500}
                fadeMs={600}
                pauseOnHover
                slides={[
                  { src: "/acadia.png", caption: "Exploring National Parks 🏞️" },
                  { src: "/tennis.png", caption: "Tennis Rallies 🎾" },
                  { src: "/guitar.png", caption: "Strumming guitar 🎸", objectPos: "center 40%" },
                  { src: "/ball.png", caption: "Basketball runs 🏀" },
                  { src: "/gym.png", caption: "Getting Big 💪", objectPos: "center 1%" },
                  { src: "/annapolis.png", caption: "Hiking 🚶‍♂️" },
                ]}
              />
            </div>

            <div className="mt-6 text-center space-y-2">
              <p className="text-sm sm:text-base text-amber-400 italic">
                Balance fuels better code.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-white/80">
                <span className="px-2 py-1 rounded-full border border-white/10 bg-white/10">
                  🌍 Traveler
                </span>
                <span className="px-2 py-1 rounded-full border border-white/10 bg-white/10">
                  🏀 Sports Junkie
                </span>
                <span className="px-2 py-1 rounded-full border border-white/10 bg-white/10">
                  🎶 Music Lover
                </span>
              </div>
            </div>
          </SpotlightCard>

          {/* CARD 4 */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-center overflow-hidden rounded-xl
              col-span-6 md:col-span-2
              p-4 sm:p-5 md:p-6
              max-md:min-h-[19rem]
            "
          >
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">
                Core Languages
              </h3>

              <div className="grid grid-cols-3 gap-4 place-items-center">
                {CORE_LANGUAGES.map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 text-white/90">
                    {item.icon}
                    <span className="text-xs">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* CARD 5 */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
              col-span-6 md:col-span-4
              p-4 sm:p-5 md:p-6
              max-md:min-h-[21rem]
            "
          >
            <div className="mb-4 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-orange-400 tracking-wide">
                The Next Chapter Awaits
              </h3>
            </div>

            <div className="opacity-40 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center text-center rounded-2xl bg-white/5 p-6 w-full max-w-sm text-white/70">
                <Smartphone size={34} className="text-white mb-2" />
                <p className="text-base md:text-lg font-semibold text-white">
                  Stay tuned
                </p>
                <p className="text-sm text-white/60">
                  A new app is in the works
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50">
                Early Stages
              </p>
              <div className="mt-2 w-40 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500 animate-pulse w-1/3 rounded-full" />
              </div>
            </div>

            <p className="mt-4 text-center text-sm sm:text-base italic text-fuchsia-400">
              Built with passion. Shared when ready.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}