"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar"


const Galaxy = dynamic(() => import("./reactbits/backgrounds/Galaxy/Galaxy"), {
  ssr: false,              // prevents WebGL from running on the server
});

export default function Header() {
  return (
    <header className="relative h-[100vh] overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Galaxy transparent={false} density={2.0} glowIntensity={0.5}/>
      </div>

      <div className="absolute top-0 inset-x-0 z-20">
        <Navbar />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m Jeet</h1>
      </div>
    </header>
  );
}