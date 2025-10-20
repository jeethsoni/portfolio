"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AuroraText } from "./ui/aurora-text";

// icon imports
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import { FramerDark } from "developer-icons";
import ArduinoOriginal from "devicons-react/icons/ArduinoOriginal";
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal";
import GitOriginal from "devicons-react/icons/GitOriginal";
import FlaskOriginal from "devicons-react/icons/FlaskOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import PytestOriginal from "devicons-react/icons/PytestOriginal";
import SwaggerOriginal from "devicons-react/icons/SwaggerOriginal";
import { MdOutlineSensors } from "react-icons/md";


const SAMPLE_PROJECTS = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "An interactive digital space built with Next.js and TailwindCSS to showcase my journey as a developer. Blending slick visuals with seamless motion, it turns each project into a story where design meets code and performance feels effortless.",
    image: "/projects/portfolio.png",
    year: 2025,
    stack: ["Next", "React", "TailwindCSS", "Framer"],
    iconMap: {
      Next: NextjsOriginal,
      React: ReactOriginal,
      TailwindCSS: TailwindcssOriginal,
      Framer: FramerDark,
    },
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
    title: "ForHer",
    description:
        "An IoT-enabled toilet seat cleaner built with Arduino and ultrasonic sensors for automated, contact-free hygiene. Designed with 95% detection accuracy and servo-driven motion to enhance sanitation and accessibility for women.",
    image: "/projects/forher.png",
    year: 2025,
    stack: ["Arduino", "C++", "git", "Sensors"],
    iconMap: {
      Arduino: ArduinoOriginal,
      "C++": CplusplusOriginal,
      git: GitOriginal,
      Sensors: MdOutlineSensors,
    },
    bullets: [
      "Engineered an Arduino-based system using ultrasonic sensors to detect user presence with 95% accuracy.",
      "Implemented servo motors for precise, automated seat cleaning and drying.",
      "Designed a compact, user-friendly prototype to enhance hygiene and accessibility in public restrooms.",
    ],
    links: {
      live: "https://github.com/jeethsoni/automated-seat-wiper",
      repo: "https://github.com/jeethsoni/automated-seat-wiper",
    },
  },
  {
    id: "movieshub",
    title: "MoviesHub",
    description:
      "A Flask-based movie API built with PostgreSQL for scalable, reliable data management. Features Pydantic validation, 90%+ test coverage, and interactive Swagger docs to ensure secure, well-structured, and developer-friendly REST endpoints.",
    image: "/projects/movieshub.png",
    year: 2024,
    stack: ["Flask", "PostgreSQL", "Pydantic", "PyTest", "Swagger"],
    iconMap: {
      Flask: FlaskOriginal,
      PostgreSQL: PostgresqlOriginal,
      Pydantic: PythonOriginal, 
      PyTest: PytestOriginal,
      Swagger: SwaggerOriginal,
    },
    bullets: [
      "Developed a Flask backend with RESTful APIs for comprehensive movie data management.",
      "Implemented PostgreSQL for robust, scalable data storage and retrieval.",
      "Ensured data integrity with Pydantic models and validation.",
      "Achieved 90%+ test coverage using PyTest for reliable, maintainable code.",
      "Integrated Swagger UI for clear, interactive API documentation.",
    ],
    links: {
      live: "https://github.com/jeethsoni/movies-rest-api",
      repo: "https://github.com/jeethsoni/movies-rest-api",
    },
  },
];

function TechCircle({ title, Icon }) {
  return (
    <div
      className="inline-flex size-8 items-center justify-center rounded-full ring-2 ring-gray-800 outline -outline-offset-1 outline-white/10 bg-gray-200"
      title={title}
      aria-label={title}
    >
      <Icon size={28} />
    </div>
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
          <h3 className="text-xl font-semibold text-blue-400">{item.title}</h3>
          <p className="mt-3 text-base text-gray-300 leading-relaxed">
            {item.description}
          </p>

          {item.stack?.length ? (
            <div className="mt-4 flex -space-x-2 overflow-hidden">
              {item.stack
                .filter((tech) => item.iconMap?.[tech])
                .map((tech) => {
                  const Icon = item.iconMap[tech];
                  return (
                    <TechCircle
                      key={`${item.id}-${tech}`}
                      title={tech}
                      Icon={Icon}
                    />
                  );
                })}
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3"
    >
      <div className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-gray-800 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="top-0 z-10 bg-gray-800 border-b border-white/10 p-5 relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-2 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-red-500"
          >
            Close
          </button>

          <h2 className="text-xl font-bold text-emerald-500">{project.title}</h2>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="overflow-y-auto">
          {project.image ? (
            <div className="w-full relative bg-white/5">
              <div className="relative aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          ) : null}

          {project.bullets?.length ? (
            <div className="p-5">
              <ul className="list-disc space-y-2 pl-6 text-sm text-gray-300">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        {(project.links?.repo || project.links?.live) && (
          <div className="sticky bottom-0 bg-gray-800 border-t border-white/10 flex flex-wrap gap-3 p-5">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-500/20 transition"
              >
                Repo
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-500/20 transition"
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
          Featured <AuroraText>Projects</AuroraText>
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
