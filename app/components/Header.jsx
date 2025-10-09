"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";
import { FlipWords } from "./ui/flip-words";
import { AuroraText } from "./ui/aurora-text";
import React from "react";

const GlobeWorld = dynamic(() => import("./ui/Globe").then((m) => m.World), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-xl bg-white/5" />,
});

export default function Header() {
  const heroRef = React.useRef(null);
  const [showGlobe, setShowGlobe] = React.useState(false);
  const [arcs, setArcs] = React.useState(null);

  React.useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGlobe(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!showGlobe) return;
    let cancelled = false;
    import("@/data/arcs.json").then((m) => {
      if (!cancelled) setArcs(m.default);
    });
    return () => {
      cancelled = true;
    };
  }, [showGlobe]);

  return (
    <header ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 inset-x-0 z-[100]">
        <Navbar />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-10">
        <div className="grid grid-cols-6 gap-4 xl:gap-12 items-start">
          {/* PROFILE IMAGE */}
          <div className="col-span-6 order-1 lg:order-none lg:col-span-2 lg:col-start-5 lg:row-start-1 flex justify-center lg:justify-start">
            <Image
              src="/profile_pic.png"
              width={350}
              height={350}
              alt="profile picture"
              className="w-64 md:w-64 xl:w-[350px] h-auto rounded-2xl border-4 border-white/30 shadow-[0_0_25px_rgba(96,165,250,0.6)] transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 8rem, (max-width: 768px) 11rem, (max-width: 1279px) 16rem, 350px"
              priority
            />
          </div>

          {/* INTRO */}
          <div className="col-span-6 order-2 lg:order-none lg:col-span-4 lg:col-start-1 lg:row-start-1 flex flex-col text-center lg:text-left items-center lg:items-start">
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl mt-6">
              Hi <span className="ml-2 inline-block origin-[70%_70%] animate-wave align-middle">👋</span>, I'm{" "}
              <AuroraText speed={2}>Jeet Soni</AuroraText>
            </h1>

            <h2 className="sm:text-lg max-w-xl leading-tight">
              <FlipWords
                className="text-3xl font-flip font-normal [&_span]:text-emerald-500"
                words={[
                  "Full Stack Developer",
                  "Innovator",
                  "AI/ML Practitioner",
                  "Tech Enthusiast",
                ]}
                duration={2000}
              />
            </h2>

            <p className="mt-2 text-md text-white/80 max-w-[600px] leading-relaxed md:text-lg">
              Software developer proficient in Python, JavaScript, and SQL, 
              with hands-on experience in Express.js, FastAPI, PostgreSQL, and MongoDB. 
              Skilled in building scalable REST APIs, optimizing data systems, and leveraging AWS cloud services to deliver impactful, 
              real-world solutions that bridge performance and reliability.
            </p>

            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              {/* Resume button */}
              <a
                href="api/resume"
                download
                className="group relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white 
                          border border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-cyan-600/10 
                          hover:from-cyan-400/20 hover:to-cyan-500/20 
                          hover:border-cyan-300/60 shadow-lg shadow-cyan-500/10 
                          backdrop-blur-md transition-all duration-300"
              >
                <span className="group-hover:text-cyan-300 transition-colors">Resume</span>
                <GoDownload className="text-cyan-300 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>

              {/* View Work button */}
              <a
                href="#work"
                className="group relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white 
                          border border-emerald-400/40 bg-gradient-to-b from-emerald-500/10 to-emerald-600/10 
                          hover:from-emerald-400/20 hover:to-emerald-500/20 
                          hover:border-emerald-300/60 shadow-lg shadow-emerald-500/10 
                          backdrop-blur-md transition-all duration-300"
              >
                <span className="group-hover:text-emerald-300 transition-colors">View my work</span>
                <IoMdArrowForward className="text-emerald-300 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* GLOBE */}
          <div className="col-span-6 order-3 lg:order-none lg:col-span-2 lg:col-start-5 lg:row-start-2 flex justify-center lg:justify-start">
            <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] cursor-grab">
              {showGlobe && arcs && (
                <GlobeWorld
                  globeConfig={{ globeColor: "#1e3a8a", atmosphereColor: "#60A5FA", showAtmosphere: true }}
                  data={arcs}
                />
              )}
            </div>
          </div>

          <div className="col-span-6 order-4 lg:order-none lg:col-span-4 lg:col-start-1 lg:row-start-2 space-y-3 mx-auto text-center lg:mt-14 lg:text-left lg:items-start items-center flex flex-col">
            <p className="text-lg sm:text-2xl leading-relaxed font-bold text-cyan-500 drop-shadow-[0_0_4px_rgba(34,197,94,0.5)] font-bebas">
              The next wave of innovation shouldn’t leave anyone behind.
            </p>
            <p className="text-md sm:text-lg leading-relaxed text-white/80">
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
