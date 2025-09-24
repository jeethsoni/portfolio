"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import arcs from "@/data/arcs.json";
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";
import { FlipWords } from "./ui/flip-words";
import { AuroraText } from "./ui/aurora-text";

const GlobeWorld = dynamic(() => import("./ui/Globe").then((m) => m.World), { ssr: false });

export default function Header() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 inset-x-0 z-[100]">
        <Navbar />
      </div>

      {/* Centered frame (same rails as About) */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-10">
        {/* 6-col grid; equal rails; responsive ordering */}
        <div className="grid grid-cols-6 gap-4 xl:gap-12 items-start">
          {/* PROFILE IMAGE — mobile #1; desktop right column row 1 */}
          <div className="col-span-6 order-1 lg:order-none lg:col-span-2 lg:col-start-5 lg:row-start-1 flex justify-center lg:justify-start">
            <Image
              src="/profile_pic.png"
              width={350}
              height={350}
              sizes="(max-width: 640px) 8rem, (max-width: 768px) 11rem, (max-width: 1279px) 16rem, 350px"
              alt="profile picture"
              className="w-64 md:w-64 xl:w-[350px] rounded-2xl border-4 border-white/30 shadow-[0_0_25px_rgba(96,165,250,0.6)] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* INTRO (text/buttons) — mobile #2; desktop left column row 1 */}
          <div className="col-span-6 order-2 lg:order-none lg:col-span-4 lg:col-start-1 lg:row-start-1 flex flex-col text-center lg:text-left items-center lg:items-start">
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl mt-6">
              Hi
              <span className="ml-2 inline-block origin-[70%_70%] animate-wave align-middle">👋</span>, I'm{" "}
              <AuroraText speed={2}>Jeet Soni</AuroraText>
            </h1>

            <h2 className="sm:text-lg max-w-xl leading-tight">
              <FlipWords
                className="text-3xl font-flip font-normal [&_span]:text-emerald-500"
                words={[
                  "Full Stack Developer",
                  "Backend Developer",
                  "Innovator",
                  "AI/ML Practitioner",
                  "Tech Enthusiast",
                ]}
                duration={2000}
              />
            </h2>

            <p className="mt-2 text-md text-white/80 max-w-[600px] leading-relaxed md:text-lg">
              A passionate developer with expertise in Express.js, FastAPI, PostgreSQL, and MongoDB. Skilled at
              building scalable REST APIs, optimizing data systems, and leveraging cloud technologies like AWS to
              deliver impactful, real-world solutions.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start gap-4">
              <a
                href="#resume"
                className="px-4 py-2 rounded-lg border text-white border-cyan-500 backdrop-blur-md hover:bg-white/20 transition shadow flex items-center gap-2"
              >
                Resume
                <GoDownload className="inline-block" />
              </a>

              <a
                href="#mywork"
                className="px-4 py-2 border text-white border-cyan-500 rounded-lg backdrop-blur-md hover:bg-white/20 transition shadow flex items-center gap-2"
              >
                View my work
                <IoMdArrowForward className="inline-block" />
              </a>
            </div>
          </div>

          {/* GLOBE — mobile #3; desktop right column row 2 */}
          <div className="col-span-6 order-3 lg:order-none lg:col-span-2 lg:col-start-5 lg:row-start-2 flex justify-center lg:justify-start">
            <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] cursor-grab">
              <GlobeWorld
                globeConfig={{
                  globeColor: "#1e3a8a",
                  atmosphereColor: "#60A5FA",
                  showAtmosphere: true,
                }}
                data={arcs}
              />
            </div>
          </div>

          {/* GLOBE INFO (paragraphs/chips) — mobile #4; desktop left column row 2 */}
          <div className="col-span-6 order-4 lg:order-none lg:col-span-4 lg:col-start-1 lg:row-start-2 space-y-3 mx-auto text-center lg:mt-14 lg:text-left lg:items-start items-center flex flex-col">
            <p className="text-lg sm:text-2xl leading-relaxed font-bold text-green-600 drop-shadow-[0_0_4px_rgba(34,197,94,0.5)] font-bebas">
              The next wave of innovation shouldn’t leave anyone behind.
            </p>
            <p className="text-md sm:text-lg leading-relaxed text-stone-300">
              My work aims to bridge the digital divide, bringing practical, low-cost tech to communities where
              access is limited and opportunities are scarce.
            </p>
            <p className="lg:text-lg text-sm italic text-cyan-500">
              “Helping people who are struggling with tech by making day-to-day life easier.”
            </p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 text-xs sm:text-sm">
              <div className="rounded-xl border border-blue-600/30 bg-slate-800/60 px-3 py-2">
                🩺 <b className="text-emerald-400 text-lg">Health</b>
                <br />
                <span className="text-amber-400"> Half the world lacks essential care</span>
              </div>
              <div className="rounded-xl border border-blue-600/30 bg-slate-800/60 px-3 py-2">
                📚 <b className="text-emerald-400 text-lg">Education</b>
                <br />
                <span className="text-amber-400"> 244M children out of school</span>
              </div>
              <div className="rounded-xl border border-blue-600/30 bg-slate-800/60 px-3 py-2">
                💼 <b className="text-emerald-400 text-lg">Income</b>
                <br />
                <span className="text-amber-400"> 1 in 10 workers in poverty</span>
              </div>
              <div className="rounded-xl border border-blue-600/30 bg-slate-800/60 px-3 py-2">
                🧼 <b className="text-emerald-400 text-lg">Sanitation</b>
                <br />
                <span className="text-amber-400"> 3.5B lack safe toilets</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-white/60 md:text-left text-center justify-center lg:justify-start">
              <span className="rounded-full border border-white/10 bg-white/10 text-white/90 px-2 py-1 font-medium">
                🌍 2.7B people still offline
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 text-white/90 px-2 py-1 font-medium">
                📶 Low-bandwidth first
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 text-white/90 px-2 py-1 font-medium">
                🗣 Local languages
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
