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
import Marquee from "./ui/Marquee";

import NodejsOriginalWordmark from 'devicons-react/icons/NodejsOriginalWordmark';
import AmazonwebservicesOriginalWordmark from 'devicons-react/icons/AmazonwebservicesOriginalWordmark';
import ArduinoOriginal from 'devicons-react/icons/ArduinoOriginal';
import BootstrapOriginal from 'devicons-react/icons/BootstrapOriginal';
import BulmaPlain from 'devicons-react/icons/BulmaPlain';
import DockerOriginal from 'devicons-react/icons/DockerOriginal';
import DynamodbOriginal from 'devicons-react/icons/DynamodbOriginal';
import EslintOriginal from 'devicons-react/icons/EslintOriginal';
import FastapiOriginal from 'devicons-react/icons/FastapiOriginal';
import FlaskOriginal from 'devicons-react/icons/FlaskOriginal';
import GitOriginal from 'devicons-react/icons/GitOriginal';
import GithubOriginal from 'devicons-react/icons/GithubOriginal';
import InsomniaOriginal from 'devicons-react/icons/InsomniaOriginal';
import JiraOriginal from 'devicons-react/icons/JiraOriginal';
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal';
import MysqlOriginalWordmark from 'devicons-react/icons/MysqlOriginalWordmark';
import NextjsOriginal from 'devicons-react/icons/NextjsOriginal';
import NpmOriginal from 'devicons-react/icons/NpmOriginal';
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal';
import PostmanOriginal from 'devicons-react/icons/PostmanOriginal';
import PytestOriginal from 'devicons-react/icons/PytestOriginal';
import RaspberrypiOriginal from 'devicons-react/icons/RaspberrypiOriginal';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import RedisOriginal from 'devicons-react/icons/RedisOriginal';
import SpringOriginal from 'devicons-react/icons/SpringOriginal';
import SwaggerOriginal from 'devicons-react/icons/SwaggerOriginal';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import VscodeOriginal from 'devicons-react/icons/VscodeOriginal';
import{ Zod, ExpressJsLight, GitHubLight } from 'developer-icons'




export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/10 via-black/0 to-black/10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
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

          {/* Card 2 */}
          <SpotlightCard className="col-span-6 md:col-span-2 md:row-span-2 max-md:h-[35rem] p-6 !justify-start">
            <div className="flex flex-col gap-1">
              <div className="mb-1">
                <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400">
                  ⚡ My Toolbox of Code
                </h3>
                <p className="text-sm text-white/60">
                  Languages, frameworks & skills I use to bring ideas to life.
                </p>
              </div>
              <div className="flex flex-col gap-8 mt-12 w-full">
              {/* Row 1 */}
                <Marquee className="p-2 [--duration:40s]" pauseOnHover>
                  {[
                    {
                      icon: <NodejsOriginalWordmark size={20} className="inline-block mr-1" />,
                      label: "Node.js",
                    },
                    {
                      icon: <BootstrapOriginal size={20} className="inline-block mr-1" />,
                      label: "Bootstrap",
                    },
                    {
                      icon: <BulmaPlain size={20} className="inline-block mr-1" />,
                      label: "Bulma",
                    },
                    {
                      icon: <FastapiOriginal size={20} className="inline-block mr-1" />,
                      label: "FastAPI",
                    },
                    {
                      icon: <FlaskOriginal size={20} className="inline-block mr-1" />,
                      label: "Flask",
                    },
                    {
                      icon: <NextjsOriginal size={20} className="inline-block mr-1" />,
                      label: "Next.js",
                    },
                    { 
                      icon: <ReactOriginal size={20} className="inline-block mr-1" />,
                      label: "React",
                    },
                    { 
                      icon: <SpringOriginal size={20} className="inline-block mr-1" />,
                      label: "Springboot",
                    },
                    { 
                      icon: <TailwindcssOriginal size={20} className="inline-block mr-1" />,
                      label: "Tailwind CSS",
                    },
                    { 
                      icon: <ExpressJsLight size={20} className="inline-block mr-1" />,
                      label: "Express.js",
                    },
                  ].map((item, i) => (
                    <span
                      key={`lang-${i}`}
                      className="flex items-center gap-1 rounded-full border border-white/5 bg-white/10
                                px-3 py-1 text-xs md:text-sm text-white/90 whitespace-nowrap font-normal"
                    >
                      {item.icon}
                      {item.label}
                    </span>
                  ))}
                </Marquee>

              {/* Row 2 */}
                <Marquee className="p-0 [--duration:48s] [--gap:0.5rem]" reverse pauseOnHover>
                  {[
                    {
                      icon: <AmazonwebservicesOriginalWordmark size={20} className="inline-block mr-1" />,
                      label: "AWS",
                    },
                    {
                      icon: <DockerOriginal size={20} className="inline-block mr-1" />,
                      label: "Docker",
                    },
                    {
                      icon: <SwaggerOriginal size={20} className="inline-block mr-1" />,
                      label: "Swagger",
                    },
                    {
                      icon: <GitOriginal size={20} className="inline-block mr-1" />,
                      label: "Git",
                    },
                    {
                      icon: <GitHubLight size={20} className="inline-block mr-1" />,
                      label: "GitHub",
                    },
                    {
                      icon: <InsomniaOriginal size={20} className="inline-block mr-1" />,
                      label: "Insomnia",
                    },
                    { 
                      icon: <NpmOriginal size={20} className="inline-block mr-1" />,
                      label: "npm",
                    },
                    { 
                      icon: <PostmanOriginal size={20} className="inline-block mr-1" />,
                      label: "Postman",
                    },
                    { 
                      icon: <VscodeOriginal size={20} className="inline-block mr-1" />,
                      label: "VS Code",
                    },
                    
                  ].map((item, i) => (
                    <span
                      key={`lib-${i}`}
                      className="flex items-center gap-1 rounded-full border border-white/5 bg-white/10
                                px-3 py-1 text-xs md:text-sm text-white/90 whitespace-nowrap font-normal"
                    >
                      {item.icon}
                      {item.label}
                    </span>
                  ))}
                </Marquee>

                {/* Row 3 */}
                <Marquee className="p-0 [--duration:56s] [--gap:0.5rem]" pauseOnHover>
                  {[
                    {
                      icon: <DynamodbOriginal size={20} className="inline-block mr-1" />,
                      label: "DynamoDB",
                    },
                    {
                      icon: <MongodbOriginal size={20} className="inline-block mr-1" />,
                      label: "MongoDB",
                    },
                    {
                      icon: <MysqlOriginalWordmark size={20} className="inline-block mr-1" />,
                      label: "MySQL",
                    },
                    {
                      icon: <PostgresqlOriginal size={20} className="inline-block mr-1" />,
                      label: "PostgreSQL",
                    },
                    {
                      icon: <RedisOriginal size={20} className="inline-block mr-1" />,
                      label: "Redis",
                    },
                    { 
                      icon: <JiraOriginal size={20} className="inline-block mr-1" />,
                      label: "Jira",
                    },
                    { 
                      icon: <RaspberrypiOriginal size={20} className="inline-block mr-1" />,
                      label: "Raspberry Pi",
                    },
                    {
                      icon: <ArduinoOriginal size={20} className="inline-block mr-1" />,
                      label: "Arduino",
                    },
                    {
                      icon: <PytestOriginal size={20} className="inline-block mr-1" />,
                      label: "Pytest",
                    },
                    {
                      icon: <Zod size={20} className="inline-block mr-1" />,
                      label: "Zod",
                    },
                  ].map((item, i) => (
                    <span
                      key={`tool-${i}`}
                      className="flex items-center gap-1 rounded-full border border-white/5 bg-white/10
                                px-3 py-1 text-xs md:text-sm text-white/90 whitespace-nowrap font-normal"
                    >
                      {item.icon}
                      {item.label}
                    </span>
                  ))}
                </Marquee>
              </div>
            </div>
          </SpotlightCard>

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
