"use client";

import React from "react";
import SpotlightCard from "./reactbits/cards/SpotlightCard";
import { LuHeartHandshake } from "react-icons/lu";
import { OrbitingCircles } from "./ui/OrbitingCircles";
import NeonInfinity from "./ui/NeonInfinity";
import Marquee from "./ui/Marquee";
import CrossfadeSlideshow from "./reactbits/gallery/CrossfadeSlideshow";
// devicons…
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import JavaOriginalWordmark from "devicons-react/icons/JavaOriginalWordmark";
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal";
import CsharpOriginal from "devicons-react/icons/CsharpOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import Html5Original from "devicons-react/icons/Html5Original";
import Css3Original from "devicons-react/icons/Css3Original";
import AzuresqldatabaseOriginal from "devicons-react/icons/AzuresqldatabaseOriginal";

import NodejsOriginalWordmark from "devicons-react/icons/NodejsOriginalWordmark";
import AmazonwebservicesOriginalWordmark from "devicons-react/icons/AmazonwebservicesOriginalWordmark";
import ArduinoOriginal from "devicons-react/icons/ArduinoOriginal";
import BootstrapOriginal from "devicons-react/icons/BootstrapOriginal";
import BulmaPlain from "devicons-react/icons/BulmaPlain";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import DynamodbOriginal from "devicons-react/icons/DynamodbOriginal";
import FastapiOriginal from "devicons-react/icons/FastapiOriginal";
import FlaskOriginal from "devicons-react/icons/FlaskOriginal";
import GitOriginal from "devicons-react/icons/GitOriginal";
import InsomniaOriginal from "devicons-react/icons/InsomniaOriginal";
import JiraOriginal from "devicons-react/icons/JiraOriginal";
import MongodbOriginal from "devicons-react/icons/MongodbOriginal";
import MysqlOriginalWordmark from "devicons-react/icons/MysqlOriginalWordmark";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import NpmOriginal from "devicons-react/icons/NpmOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import PostmanOriginal from "devicons-react/icons/PostmanOriginal";
import PytestOriginal from "devicons-react/icons/PytestOriginal";
import RaspberrypiOriginal from "devicons-react/icons/RaspberrypiOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import RedisOriginal from "devicons-react/icons/RedisOriginal";
import SpringOriginal from "devicons-react/icons/SpringOriginal";
import SwaggerOriginal from "devicons-react/icons/SwaggerOriginal";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import VscodeOriginal from "devicons-react/icons/VscodeOriginal";
import { Zod, ExpressJsLight, GitHubLight } from "developer-icons";
import { Center } from "@react-three/drei";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/10 via-black/0 to-black/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* grid unchanged */}
        <div className="grid w-full grid-cols-6 gap-4 md:auto-rows-[19rem]">

          {/* CARD 1 — wide (col-span-6 md:col-span-4) */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
              col-span-6 md:col-span-4
              p-4 sm:p-5 md:p-6
              max-md:min-h-[21rem]
            "
          >
            <div className="flex items-center gap-2 mb-4">
              <LuHeartHandshake size={26} className="text-gray-500 font-bold" />
              <h3 className="text-xl sm:text-2xl text-purple-400 font-bold">Collaboration</h3>
            </div>

            <NeonInfinity
              messages={[
                "🤝 Clear handoffs",
                "🗓️ Weekly demos",
                "⚡ Async-first",
                "🔍 Open PR reviews",
                "🗺️ Shared roadmap",
              ]}
            />

            <p className="mt-6 text-white/80 font-serif text-sm sm:text-base">
              I prioritize clear communication, trust, and shared wins with every project.
            </p>
          </SpotlightCard>

          {/* CARD 2 */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
              col-span-6 md:col-span-2 md:row-span-2
              p-4 sm:p-5 md:p-6
              max-md:min-h-[35rem]
            "
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-400 text-center tracking-wide">
                The Stack That Powers My Journey
              </h3>

              {/* marquees */}
              <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 mt-6 sm:mt-8">
                {/* Row 1 */}
                <div className="-mx-4 sm:-mx-5 md:-mx-6">
                  <Marquee className="w-full [--duration:40s] [--gap:0.5rem]">
                    {[
                      { icon: <NodejsOriginalWordmark size={20} className="inline-block mr-1" />, label: "Node.js" },
                      { icon: <BootstrapOriginal size={20} className="inline-block mr-1" />, label: "Bootstrap" },
                      { icon: <BulmaPlain size={20} className="inline-block mr-1" />, label: "Bulma" },
                      { icon: <FastapiOriginal size={20} className="inline-block mr-1" />, label: "FastAPI" },
                      { icon: <FlaskOriginal size={20} className="inline-block mr-1" />, label: "Flask" },
                      { icon: <NextjsOriginal size={20} className="inline-block mr-1" />, label: "Next.js" },
                      { icon: <ReactOriginal size={20} className="inline-block mr-1" />, label: "React" },
                      { icon: <SpringOriginal size={20} className="inline-block mr-1" />, label: "Spring Boot" },
                      { icon: <TailwindcssOriginal size={20} className="inline-block mr-1" />, label: "Tailwind CSS" },
                      { icon: <ExpressJsLight size={20} className="inline-block mr-1" />, label: "Express.js" },
                    ].map((item, i) => (
                      <span
                        key={`r1-${i}`}
                        className="flex items-center gap-1 rounded-full border border-white/5 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/90 whitespace-nowrap"
                      >
                        {item.icon}
                        {item.label}
                      </span>
                    ))}
                  </Marquee>
                </div>

                {/* Row 2 */}
                <div className="-mx-4 sm:-mx-5 md:-mx-6">
                  <Marquee className="w-full [--duration:48s] [--gap:0.5rem]" reverse>
                    {[
                      { icon: <AmazonwebservicesOriginalWordmark size={20} className="inline-block mr-1" />, label: "AWS" },
                      { icon: <DockerOriginal size={20} className="inline-block mr-1" />, label: "Docker" },
                      { icon: <SwaggerOriginal size={20} className="inline-block mr-1" />, label: "Swagger" },
                      { icon: <GitOriginal size={20} className="inline-block mr-1" />, label: "Git" },
                      { icon: <GitHubLight size={20} className="inline-block mr-1" />, label: "GitHub" },
                      { icon: <InsomniaOriginal size={20} className="inline-block mr-1" />, label: "Insomnia" },
                      { icon: <NpmOriginal size={20} className="inline-block mr-1" />, label: "npm" },
                      { icon: <PostmanOriginal size={20} className="inline-block mr-1" />, label: "Postman" },
                      { icon: <VscodeOriginal size={20} className="inline-block mr-1" />, label: "VS Code" },
                    ].map((item, i) => (
                      <span
                        key={`r2-${i}`}
                        className="flex items-center gap-1 rounded-full border border-white/5 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/90 whitespace-nowrap"
                      >
                        {item.icon}
                        {item.label}
                      </span>
                    ))}
                  </Marquee>
                </div>

                {/* Row 3 */}
                <div className="-mx-4 sm:-mx-5 md:-mx-6">
                  <Marquee className="w-full [--duration:54s] [--gap:0.5rem]">
                    {[
                      { icon: <DynamodbOriginal size={18} className="inline-block mr-1" />, label: "DynamoDB" },
                      { icon: <MongodbOriginal size={20} className="inline-block mr-1" />, label: "MongoDB" },
                      { icon: <MysqlOriginalWordmark size={20} className="inline-block mr-1" />, label: "MySQL" },
                      { icon: <PostgresqlOriginal size={20} className="inline-block mr-1" />, label: "PostgreSQL" },
                      { icon: <RedisOriginal size={20} className="inline-block mr-1" />, label: "Redis" },
                      { icon: <JiraOriginal size={20} className="inline-block mr-1" />, label: "Jira" },
                      { icon: <RaspberrypiOriginal size={20} className="inline-block mr-1" />, label: "Raspberry Pi" },
                      { icon: <ArduinoOriginal size={20} className="inline-block mr-1" />, label: "Arduino" },
                      { icon: <PytestOriginal size={20} className="inline-block mr-1" />, label: "Pytest" },
                      { icon: <Zod size={20} className="inline-block mr-1" />, label: "Zod" },
                    ].map((item, i) => (
                      <span
                        key={`r3-${i}`}
                        className="flex items-center gap-1 rounded-full border border-white/5 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/90 whitespace-nowrap"
                      >
                        {item.icon}
                        {item.label}
                      </span>
                    ))}
                  </Marquee>
                </div>
              </div>

              {/* Currently exploring */}
              <div className="mt-14 text-center">
                <h4 className="text-base sm:text-lg uppercase text-amber-300 mb-2 font-bold">
                  🚀 Currently Exploring
                </h4>
                <ul className="mt-2 sm:mt-3 flex flex-col w-fit gap-2 justify-center mx-auto">
                  <li className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300">🤖 AI Agents</li>
                  <li className="flex items-center gap-2 rounded-lg bg-fuchsia-500/10 px-3 py-1.5 text-sm text-fuchsia-300">🧠 Machine Learning</li>
                  <li className="flex items-center gap-2 rounded-lg bg-sky-500/10 px-3 py-1.5 text-sm text-sky-300">☁️ Cloud</li>
                </ul>
              </div>

              {/* Habits strip */}
              <div className="mt-14 rounded-full border border-gray-700 bg-gray-600 p-2 text-center md:mt-8">
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

          {/* CARD 3  */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
              col-span-6 md:col-span-2 md:row-span-2
              p-4 sm:p-5 md:p-6
              max-md:min-h-[35rem]
            "
          >
            {/* Title */}
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold text-emerald-500 drop-shadow-sm">
                Beyond Code
              </h3>
              <p className="mt-1 text-base sm:text-md text-gray-400 italic">
                Chasing growth on & off the keyboard
              </p>
            </div>

            {/* Slideshow */}
            <div className="relative mt-4 rounded-xl overflow-hidden shadow-lg font-bebas">
              <CrossfadeSlideshow
                intervalMs={2500}
                fadeMs={600}
                pauseOnHover
                slides={[
                  { src: "/acadia.png", caption: "Exploring National Parks 🏞️" },
                  { src: "/tennis.png", caption: "Tennis Rallies 🎾" },
                  { src: "/guitar.png", caption: "Strumming guitar 🎸", objectPos: "center 40%" },
                  { src: "/ball.png", caption: "Basketball runs 🏀" },
                  { src: "/gym.png", caption: "Workout Sesh 💪", objectPos: "center 1%" },
                  { src: "/annapolis.png", caption: "Exploring hidden gems 🌍" },
                ]}
              />
            </div>

            {/* Tagline */}
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

            

          {/* CARD 4 — orbiting icons (spans unchanged) */}
          <SpotlightCard
            className="
              group relative flex size-full items-center justify-center overflow-hidden rounded-xl
              col-span-6 md:col-span-2
              p-4 sm:p-5 md:p-6
              max-md:min-h-[19rem]
            "
          >

            {/* make the canvas scale without breaking card */}
            <div className="relative overflow-hidden flex items-center justify-center
                            h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] md:h-[400px] md:w-[400px]">
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

          {/* CARD 5 — wide bottom (spans unchanged) */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
              col-span-6 md:col-span-4
              p-4 sm:p-5 md:p-6
              max-md:min-h-[21rem]
            "
          >
          
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
