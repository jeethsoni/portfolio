"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="relative py-20 text-white">
  {/* subtle readability layer */}
  <div className="absolute inset-0 -z-10" />
  <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-400">
          About Me
        </h2>
        
      </div>
    </section>
  );
}
