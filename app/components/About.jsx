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
import { Copy } from "lucide-react";
import { AzuresqldatabaseOriginal } from "devicons-react";
import { Zod, ExpressJsLight, GitHubLight, C, MicrosoftSQLServer } from "developer-icons";
import { Smartphone } from "lucide-react";

function ContactCard() {
  const email = "it.jsoni22@gmail.com";
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <div className="flex justify-center items-center gap-2 mb-4">
        <LuHeartHandshake size={26} className="text-gray-400" />
        <h3 className="text-xl md:text-2xl font-bold text-brand">
          Let’s Work Together
        </h3>
      </div>

      <p className="text-sm text-white/80 mb-6 max-w-xs">
        Interested in collaborating on a project or building something cool?
        Feel free to reach out.
      </p>

      <button
        onClick={copyEmail}
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-lg
          bg-white/5
          border border-white/10
          hover:bg-white/10
          transition
          text-sm
        "
      >
        <Copy className="w-4 h-4" />
        {email}
      </button>

      <p className="mt-3 text-xs text-emerald-400 h-4">
        {copied ? "Copied to clipboard!" : ""}
      </p>
    </div>
  );
}

function TechStackTabs() {
  const [active, setActive] = React.useState("languages");

  const STACK = {
    languages: [
      { icon: <PythonOriginal size={24} />, label: "Python" },
      { icon: <JavascriptOriginal size={24} />, label: "JavaScript" },
      { icon: <TypescriptOriginal size={24} />, label: "TypeScript" },
      { icon: <JavaOriginalWordmark size={28} />, label: "Java" },
      { icon: <GolandOriginal size={24} />, label: "Go" },
      { icon: <CplusplusOriginal size={24} />, label: "C++" },
      { icon: <CsharpOriginal size={24} />, label: "C#" },
      { icon: <Html5Original size={24} />, label: "HTML" },
      { icon: <Css3Original size={24} />, label: "CSS" },
      { icon: <C size={24} />, label: "C" },
      { icon: <AzuresqldatabaseOriginal size={24} />, label: "SQL" },

    ],

    frameworks: [
      { icon: <ReactOriginal size={24} />, label: "React" },
      { icon: <NodejsOriginalWordmark size={24} />, label: "Node.js" },
      { icon: <NextjsOriginal size={24} />, label: "Next.js" },
      { icon: <ExpressJsLight size={24} />, label: "Express" },
      { icon: <FastapiOriginal size={24} />, label: "FastAPI" },
      { icon: <FlaskOriginal size={24} />, label: "Flask" },
      { icon: <SpringOriginal size={24} />, label: "Spring Boot" },
      { icon: <TailwindcssOriginal size={24} />, label: "Tailwind" },
    ],

    databases: [
      { icon: <MongodbOriginal size={24} />, label: "MongoDB" },
      { icon: <MysqlOriginalWordmark size={28} />, label: "MySQL" },
      { icon: <PostgresqlOriginal size={24} />, label: "PostgreSQL" },
      { icon: <RedisOriginal size={24} />, label: "Redis" },
    ],

    tools: [
      { icon: <GitOriginal size={24} />, label: "Git" },
      { icon: <AmazonwebservicesOriginalWordmark size={28} />, label: "AWS" },
      { icon: <GitHubLight size={24} />, label: "GitHub" },
      { icon: <DockerOriginal size={24} />, label: "Docker" },
      { icon: <PytestOriginal size={24} />, label: "Pytest" },
      { icon: <Zod size={24} />, label: "Zod" },
      { icon: <ArduinoOriginal size={24} />, label: "Arduino" },


    ],
  };

  const tabs = [
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools" },
  ];

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xl md:text-2xl font-bold text-emerald-500 text-center">
        Tech I Work With
      </h3>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-3 py-1 text-xs rounded-full border transition ${active === tab.id
              ? "bg-emerald-500 text-white border-emerald-400"
              : "border-white/20 text-white/70 hover:bg-white/10"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stack grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {STACK[active].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 text-white">
      <div className="absolute inset-0 -z-10" />

      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-6 lg:auto-rows-[19rem]">         {/* CARD 1 */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
              col-span-1 lg:col-span-4
              p-4 sm:p-5 md:p-6
              min-h-84 lg:min-h-0
            "
          >
            <div>

              <h3 className="text-xl sm:text-2xl text-brand font-bold text-center mb-2">
                Who Am I?
              </h3>

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
          </SpotlightCard>

          {/* CARD 2 */}
          <SpotlightCard
            className="
            group relative flex size-full flex-col overflow-hidden rounded-xl
            col-span-1 lg:col-span-2 lg:row-span-2
            p-4 sm:p-5 md:p-6
            min-h-140 lg:min-h-0
          "
          >
            <TechStackTabs />
          </SpotlightCard>

          {/* CARD 3 */}
          <SpotlightCard
            className="
            group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
            col-span-1 lg:col-span-2 lg:row-span-2
            p-4 sm:p-5 md:p-6
            min-h-140 lg:min-h-0
          "
          >
            <div className="mb-4 text-center">
              <h3 className="md:text-2xl text-xl font-bold text-emerald-500 drop-shadow-sm">
                Beyond Code
              </h3>
              <p className="mt-1 text-base sm:text-md text-white/85 italic">
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

            <div className=" text-center">
              <p className="text-sm sm:text-base text-emerald-400 italic">
                Balance fuels better code.
              </p>
            </div>
          </SpotlightCard>

          {/* CARD 4 */}
          <SpotlightCard
            className="
            group relative flex size-full flex-col justify-center overflow-hidden rounded-xl
            col-span-1 lg:col-span-2
            p-4 sm:p-5 md:p-6
            min-h-76 lg:min-h-0
          "
          >
            <ContactCard />

          </SpotlightCard>

          {/* CARD 5 */}
          <SpotlightCard
            className="
              group relative flex size-full flex-col justify-between overflow-hidden rounded-xl
              col-span-1 lg:col-span-4
              p-4 sm:p-5 md:p-6
              min-h-84 lg:min-h-0
            "
          >
            <div className="mb-4 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-brand tracking-wide">
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
                <div className="h-full bg-linear-to-r from-emerald-400 to-cyan-500 animate-pulse w-1/3 rounded-full" />
              </div>
            </div>

            <p className="mt-4 text-center text-sm sm:text-base italic text-brand">
              Built with passion. Shared when ready.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}