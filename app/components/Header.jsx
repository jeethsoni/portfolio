"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import arcs from "@/data/arcs.json";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";

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

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 py-12 md:py-20 mt-16">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] items-start">
          
          {/* LEFT: Text */}
          <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl items-center">
              Hi<span className="ml-2 inline-block origin-[70%_70%] animate-wave align-middle">👋</span>, I'm {""} 
              <span className="text-emerald-600">
                Jeet Soni
                </span>
            </h1>

            <h2 className="sm:text-lg max-w-xl">
                <FlipWords className={"text-2xl font-serif"}
                  words={["Full Stack Developer", "Backend Developer", "Creator"]}
                />
            </h2>

            <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#resume"
                className="rounded-2xl px-5 py-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 transition shadow"
              >
                Resume
              </a>
            </div>
          </div>

          {/* RIGHT: Profile + Globe */}
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/profile_pic.png"
              width={300}
              height={300}
              alt="profile picture"
              className="rounded-2xl border-4 border-white/30 shadow-[0_0_25px_rgba(96,165,250,0.6)] transition-transform duration-300 hover:scale-105"
            />
            <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px]">
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
    </header>
  );
}
