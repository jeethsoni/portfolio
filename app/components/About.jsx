"use client";

import React from "react";
import SpotlightCard from "./reactbits/cards/SpotlightCard";
import { LuHeartHandshake } from "react-icons/lu";
import { OrbitingCircles } from "./ui/OrbitingCircles";
import PythonOriginal from 'devicons-react/icons/PythonOriginal';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import JavaOriginalWordmark from 'devicons-react/icons/JavaOriginalWordmark';
import CplusplusOriginal from 'devicons-react/icons/CplusplusOriginal';
import CsharpOriginal from 'devicons-react/icons/CsharpOriginal';
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal';
import Html5Original from 'devicons-react/icons/Html5Original';
import Css3Original from 'devicons-react/icons/Css3Original';
import AzuresqldatabaseOriginal from 'devicons-react/icons/AzuresqldatabaseOriginal';
import NeonInfinity from "./ui/NeonInfinity";


export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/10 via-black/0 to-black/10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* desktop layout begins at md now */}
        <div className="grid w-full grid-cols-6 gap-4 md:auto-rows-[19rem]">
          {/* Card 1 — wide */}
          <SpotlightCard className="group col-span-6 md:col-span-4 flex flex-col items-start justify-start p-6">
            <div className="flex items-center gap-2 mb-4">
              <LuHeartHandshake size={26} className="text-gray-500 font-bold" />
              <h3 className="text-2xl text-purple-400 font-bold">Collaboration</h3>
            </div>

            <NeonInfinity
              messages={[
              "🤝 Clear handoffs",
              "🗓️ Weekly demos",
              "⚡ Async-first",
              "🔍 Open PR reviews",
              "🗺️ Shared roadmap"
              ]}
            />

            <p className="mt-6 text-white/80 font-serif text-md">
              I prioritize clear communication, trust, and shared wins with every project.
            </p>
          </SpotlightCard>





          {/* Card 2 — tall right */}
          <SpotlightCard className="col-span-6 md:col-span-2 md:row-span-2 max-md:h-[35rem]" />

          {/* Card 3 — tall left under Card 1 */}
          <SpotlightCard className="col-span-6 md:col-span-2 md:row-span-2 max-md:h-[35rem]" />

          {/* Card 4 */}
          <SpotlightCard className="col-span-6 md:col-span-2 max-md:h-[19rem] flex items-center justify-center">
            <div className="relative overflow-hidden h-[500px] w-[500px] flex items-center justify-center">
              <OrbitingCircles radius={50} iconSize={40} duration={20} speed={1.4}>

                <PythonOriginal size="30" />
                <JavascriptOriginal size="25" />
                <JavaOriginalWordmark size="40" />

              </OrbitingCircles>
              <OrbitingCircles radius={110} reverse>

                <CplusplusOriginal size="30" />
                <CsharpOriginal size="30" />
                <TypescriptOriginal size="30" />
                <Html5Original size="30" />
                <Css3Original size="30" />
                <AzuresqldatabaseOriginal size="30" />

              </OrbitingCircles>
            </div>
          </SpotlightCard>


          {/* Card 5 — wide bottom */}
          <SpotlightCard className="col-span-6 md:col-span-4 max-md:h-[21rem]" />
        </div>
      </div>
    </section>
  );
}
