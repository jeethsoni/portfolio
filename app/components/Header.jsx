"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar"
import arcs from "@/data/arcs.json";



const Galaxy = dynamic(() => import("./reactbits/backgrounds/Galaxy/Galaxy"), {
  ssr: false,              // prevents WebGL from running on the server
});

const GlobeWorld = dynamic(() => import("./ui/Globe").then(m => m.World), { ssr: false });


export default function Header() {
  return (
    <header className="relative h-[100vh] overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Galaxy transparent={false} density={2.0} glowIntensity={0.5}/>
      </div>

      <div className="absolute right-0 top-50 z-40 w-[300px] h-[300px] md:w-[400px] md:h-[400px] pointer-events-auto"
      >
        <GlobeWorld
          globeConfig={{
            globeColor: "#1e3a8a",
            atmosphereColor: "#60A5FA",
            showAtmosphere: true,
          }}
          data={arcs}
        />
      </div>

      <div className="absolute top-0 inset-x-0 z-20">
        <Navbar />
      </div>

      <div className="absolute -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
        <h1>
          Hi, I'm Jeet Soni
        </h1>
      </div>

    </header>
  );
}