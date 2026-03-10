"use client";

import Navbar from "./Navbar";
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";
import { FlipWords } from "./ui/flip-words";
import React from "react";

export default function Header() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 inset-x-0 z-100">
        <Navbar />
      </div>

      {/* Hero content */}
      <div className="mx-auto flex min-h-screen w-full max-w-8xl items-center px-6 pt-28 pb-12 sm:px-8 md:px-10 lg:px-16 xl:px-20 -translate-y-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          {/* IMAGE - first on mobile, second on desktop */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative aspect-square w-105 overflow-hidden rounded-full">
              <Image
                src="/profile.JPG"
                alt="profile picture"
                fill
                priority
                sizes="(max-width: 640px) 14rem, (max-width: 768px) 16rem, (max-width: 1024px) 18rem, (max-width: 1280px) 340px, 380px"
                className="rounded-full object-cover object-[50%_60%]"
              />
            </div>
          </div>

          {/* TEXT - second on mobile, first on desktop */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <h1 className="text-white font-bold tracking-tight text-3xl sm:text-4xl md:text-6xl">
              Hi
              <span className="ml-2 inline-block origin-[70%_70%] animate-wave align-middle">
                👋
              </span>
              , I&apos;m Jeet Soni
            </h1>

            <h2 className="mt-2 max-w-xl leading-tight">
              <FlipWords
                className="text-2xl sm:text-3xl font-flip font-semibold [&_span]:text-emerald-500"
                words={[
                  "Full Stack Developer",
                  "Innovator",
                  "AI/ML Practitioner",
                  "Tech Enthusiast",
                ]}
                duration={2000}
              />
            </h2>

            <p className="mt-4 max-w-2xl text-white/80 text-base leading-relaxed sm:text-lg">
              Full-Stack Developer focused on building scalable, production-ready web
              applications. Experienced in designing clean backend systems and intuitive
              user interfaces using Python, Java, JavaScript, and SQL.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/api/resume"
                download="Jeet_Soni_Resume.pdf"
                className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-white hover:bg-brand/90 transition-colors"
              >
                Resume
                <GoDownload />
              </a>

              <a
                href="#work"
                className="flex items-center gap-2 rounded-xl border border-emerald-500 px-6 py-3 text-gray-100 transition hover:border-emerald-300 hover:text-white hover:bg-emerald-500/10"
              >
                View My Work
                <IoMdArrowForward />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
