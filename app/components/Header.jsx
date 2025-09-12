"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import arcs from "@/data/arcs.json";
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import { FlipWords } from "./ui/flip-words";
import { IoMdArrowForward } from "react-icons/io";
import { AuroraText } from "./ui/aurora-text";


const Galaxy = dynamic(() => import("./reactbits/backgrounds/Galaxy/Galaxy"), { ssr: false });
const GlobeWorld = dynamic(() => import("./ui/Globe").then((m) => m.World), { ssr: false });

export default function Header() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Galaxy transparent={false} density={1.0} glowIntensity={0.5} />
      </div>

      {/* Navbar */}
      <div className="absolute top-0 inset-x-0 z-[100]">
        <Navbar />
      </div>

      {/* Introduction */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 py-12 md:py-20 mt-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] lg:gap-12 lg:auto-rows-min lg:items-start">
          <div className="contents lg:contents">
            <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1 flex flex-col text-center md:text-left items-center md:items-start">
              <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl sm:items-center">
                Hi<span className="ml-2 inline-block origin-[70%_70%] animate-wave align-middle">👋</span>, I'm{" "}
                <AuroraText speed={2}>Jeet Soni</AuroraText>
              </h1>

              <h2 className="sm:text-lg max-w-xl leading-tight">
                <FlipWords
                  className={"text-3xl font-flip font-normal [&_span]:text-emerald-500"}
                  words={["Full Stack Developer", "Backend Developer", "Innovator", "AI/ML Practitioner", "Tech Enthusiast"]}
                  duration={2000}
                />
              </h2>

              <p className="mt-2 text-md text-white/80 max-w-[600px] leading-relaxed md:text-lg">
                A passionate developer with expertise in Express.js, FastAPI, PostgreSQL, and MongoDB. Skilled at building scalable REST APIs,
                optimizing data systems, and leveraging cloud technologies like AWS to deliver impactful, real-world solutions.
              </p>

              <div className="pt-4 flex justify-center md:justify-start gap-4">
                <a
                  href="#resume"
                  className="px-4 py-2 rounded-lg border-2 text-white border-gray-50 backdrop-blur-md font-bold hover:bg-white/20 transition shadow flex items-center gap-2"
                >
                  Resume
                  <GoDownload className="inline-block" />
                </a>

                <a
                  href="#mywork"
                  className="px-4 py-2 border-2 text-white border-gray-50 rounded-lg backdrop-blur-md font-bold hover:bg-white/20 transition shadow flex items-center gap-2"
                >
                  View my work
                  <IoMdArrowForward className="inline-block" />
                </a>
              </div>
            </div>

            {/* GLOBE INFO */}
            <div className="order-4 lg:order-none lg:col-start-1 lg:row-start-2 space-y-3 max-w-[700px] text-left lg:mt-18">
              <p className="text-white/90 text-sm sm:text-xl leading-relaxed">
                ✨ The next wave of innovation shouldn’t leave anyone behind.
              </p>
              <p>
                <span className="sm:text-md text-white">My work aims to bridge the digital divide, bringing practical, low-cost tech to communities where access is limited and opportunities are scarce.</span>

              </p>

              <p className="text-white/80 text-sm italic text">
                “Helping people who are struggling with tech by making day-to-day life easier.”
              </p>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 text-xs sm:text-sm">
                <div className="rounded-xl border border-white/10 bg-white px-3 py-2">🩺 <b>Health</b> · SMS triage & reminders</div>
                <div className="rounded-xl border border-white/10 bg-white px-3 py-2">📚 <b>Education</b> · offline microlearning</div>
                <div className="rounded-xl border border-white/10 bg-white px-3 py-2">💼 <b>Income</b> · tools for small sellers</div>
                <div className="rounded-xl border border-white/10 bg-white px-3 py-2">🧼 <b>Sanitation</b> · ForHer assistant</div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">🌍 2.7B people still offline</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">📶 Low-bandwidth first</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">🗣 Local languages</span>
              </div>
            </div>
          </div>

          {/* profile picture and globe component */}
          <div className="contents lg:contents">
            <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 flex justify-center lg:justify-start">
              <Image
                src="/profile_pic.png"
                width={350}
                height={350}
                alt="profile picture"
                className="rounded-2xl border-4 border-white/30 shadow-[0_0_25px_rgba(96,165,250,0.6)] transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 flex justify-center lg:justify-start">
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
          </div>

        </div>
      </div>
    </header>
  );
}
