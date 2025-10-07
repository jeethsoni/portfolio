"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AuroraText } from "./ui/aurora-text";


const SAMPLE_PROJECTS = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "An interactive digital space built with Next.js and TailwindCSS to showcase my journey as a developer. Blending sleek visuals with seamless motion, it turns each project into a story where design meets code and performance feels effortless.",
    image: "/projects/portfolio.png",
    year: 2025,
    stack: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    bullets: [
      "Developed with Next.js and React for smooth navigation and optimized performance.",
      "Crafted modern, responsive layouts using TailwindCSS for pixel-perfect styling.",
      "Enhanced interactivity and motion with Framer Motion for a dynamic user experience.",
      "Built a clean, modern UI to showcase myself and personal brand with visual impact.",
    ],
    links: {
      live: "https://www.justdev.me",
      repo: "https://github.com/jeethsoni/portfolio",
    },
  },
  {
    id: "forher",
    title: "ForHer: Automated Seat Wiper",
    description:
        "An IoT-enabled toilet seat cleaner built with Arduino and ultrasonic sensors for automated, contact-free hygiene. Designed with 95% detection accuracy and servo-driven motion to enhance sanitation and accessibility for women.",
    image: "/projects/forher.png",
    year: 2025,
    stack: ["Arduino", "Ultrasonic Sensors", "Servo Motors", "IoT"],
    bullets: [
      "Engineered an Arduino-based system using ultrasonic sensors to detect user presence with 95% accuracy.",
      "Implemented servo motors for precise, automated seat cleaning and drying.",
      "Designed a compact, user-friendly prototype to enhance hygiene and accessibility in public restrooms.",
    ],
    links: { live: "https://github.com/jeethsoni/automated-seat-wiper", repo: "https://github.com/jeethsoni/automated-seat-wiper" },
  },
  {
    id: "movieshub",
    title: "MoviesHub",
    description:
      "A Flask-based movie management platform that connects users with detailed film data through secure, well-documented REST APIs. Built with PostgreSQL for scalability, MoviesHub integrates Pydantic validation, PyTest coverage, and Swagger UI to deliver a robust, developer-friendly backend focused on data integrity and maintainability.",
    image: "/projects/movieshub.png",
    year: 2024,
    stack: ["Flask", "PostgreSQL", "Pydantic", "PyTest", "Swagger"],
    bullets: [
      "Developed a Flask backend with RESTful APIs for comprehensive movie data management.",
      "Implemented PostgreSQL for robust, scalable data storage and retrieval.",
      "Ensured data integrity with Pydantic models and validation.",
      "Achieved 90%+ test coverage using PyTest for reliable, maintainable code.",
      "Integrated Swagger UI for clear, interactive API documentation.",
    ],
    links: { live: "", repo: "#" },
  },
];

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-gray-900/80 px-2.5 py-1.5 text-xs text-gray-100">
      {children}
    </span>
  );
}

function Card({ item, onOpen }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b bg-gray-800 transition-all duration-300">
      <div className="aspect-[30/26] w-full overflow-hidden bg-white/5 relative">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 pb-4 min-h-[320px]">
        <div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-base text-gray-300 leading-relaxed">
            {item.description}
          </p>

          {item.stack?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.stack.slice(0, 5).map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => onOpen(item)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-2 text-sm text-white hover:bg-white/20 transition"
          >
            View Details →
          </button>
          {item.links?.live ? (
            <a
              href={item.links.live}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-300 hover:text-white"
              title="Open Live"
            >
              Live ↗
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}

function Modal({ open, onClose, project }) {
  if (!open || !project) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-3"
    >
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-gray-800">
        <div className="flex items-start justify-between gap-4 p-5">
          <div>
            <h2 className="text-xl font-bold text-white">{project.title}</h2>
            <p className="mt-1 text-sm text-gray-300">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 hover:bg-white/10"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        {project.image && (
          <div className="aspect-[16/10] w-full overflow-hidden bg-white/5 relative">
            <img
            src={project.image}
            alt={`${project.title}`}
            className="h-full w-full object-cover"
          />
          </div>
        )}

        {project.bullets?.length ? (
          <div className="p-5">
            <ul className="list-disc space-y-2 pl-6 text-sm text-gray-300">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {(project.links?.repo || project.links?.live) && (
          <div className="flex flex-wrap gap-3 p-5 pt-0">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Repo
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-500/20"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects({ items = SAMPLE_PROJECTS }) {
  const data = useMemo(() => items.filter(Boolean), [items]);
  const [selected, setSelected] = useState(null);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
     <div className="mb-8 text-center font-serif">
      <h2 className="text-5xl font-bold text-white/90">
        Featured{" "}
        <AuroraText>Projects</AuroraText>
      </h2>
      <p className="mt-2 text-md text-gray-300">
        Check out some of my recent work.
      </p>
    </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item) => (
          <Card key={item.id} item={item} onOpen={setSelected} />
        ))}
      </div>

      <Modal
        open={Boolean(selected)}
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
