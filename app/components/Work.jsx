"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { Timeline } from "./ui/Timeline";
import { AuroraText } from "./ui/aurora-text";
import {
  Zod,
  ExpressJsLight,
  JavaScript,
  NodeJs,
  Python,
  FastAPI,
  MongoDB,
  Git,
  Jira,
} from "developer-icons";
import {
  PytestOriginal,
  SqlalchemyOriginal,
  MongooseOriginal,
} from "devicons-react";
import JwtIcon from "./ui/icons/JwtIcon";

const SkillChip = ({ icon, children }) => (
  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {icon}
    <span>{children}</span>
  </span>
);

const workExperience = [
  {
    company: "Sanctumcloud",
    role: "Software Developer Intern",
    date: "Jan 2025 – May 2025",
    location: "Ashburn, VA",
    bullets: [
      "Engineered Express.js microservices with MongoDB, improving backend data processing and query efficiency across production API workflows.",
      "Devised and deployed Zod-based validation middleware and optimized MongoDB schemas and indexes, reducing data inconsistencies by 40%.",
      "Contributed during Agile sprints and planning cycles to strengthen delivery consistency and team performance."
    ],
    stack: [
      "JavaScript",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Zod",
      "Git",
      "Jira",
    ],
  },
  {
    company: "CodePremi",
    role: "Software Developer Intern",
    date: "Jun 2024 – Aug 2024",
    location: "Middletown, MD",
    bullets: [
      "Spearheaded development of scalable FastAPI endpoints with PostgreSQL, reducing request latency by 22% and improving API throughput.",
      "Refactored raw SQL queries into SQLAlchemy ORM and implemented JWT authentication with unit tests, achieving 85% coverage and strengthening system stability.",
      "Collaborated directly with the founder to develop and deploy new backend features, gaining hands-on experience in product decision-making and rapid iteration"
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "JWT", "Pytest", "Git"],
  },
];

export default function Work() {
  const icons = {
    JavaScript: <JavaScript className="h-4 w-4" />,
    "Express.js": <ExpressJsLight className="h-4 w-4" />,
    "Node.js": <NodeJs className="h-4 w-4" />,
    MongoDB: <MongoDB className="h-4 w-4" />,
    Zod: <Zod className="h-4 w-4" />,
    Jira: <Jira className="h-4 w-4" />,
    Mongoose: <MongooseOriginal className="h-4 w-4" />,
    Python: <Python className="h-4 w-4" />,
    FastAPI: <FastAPI className="h-4 w-4" />,
    SQLAlchemy: <SqlalchemyOriginal className="h-4 w-4" />,
    JWT: <JwtIcon className="h-4 w-4" />,
    Pytest: <PytestOriginal className="h-4 w-4" />,
    Git: <Git className="h-4 w-4" />,
  };

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
            My Professional <AuroraText>Journey</AuroraText>
          </h2>
          <p className="mt-3 font-serif text-sm text-gray-400 md:text-base">
            A quick look at my recent experience
          </p>
        </motion.div>

        <Timeline>
          {workExperience.map((job, index) => (
            <Timeline.Item
              key={job.company}
              title={
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-brand md:text-3xl">
                    {job.role}
                  </h3>
                  <p className="text-lg font-medium italic text-white md:text-xl">
                    {job.company}
                  </p>
                </div>
              }
              content={
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.65)] md:p-7">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.10),transparent_30%)] opacity-70" />

                    <div className="relative z-10">
                      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">

                        <div className="flex flex-wrap gap-2 text-xs text-emerald-400 sm:justify-end">
                          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                            <CalendarDays className="h-4 w-4" />
                            <span>{job.date}</span>
                          </div>
                          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-300 md:text-base">
                        {job.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-[3px] text-sm text-emerald-400 transition-transform duration-300 group-hover:translate-x-0.5">
                              ➜
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.stack.map((skill) => (
                          <SkillChip key={skill} icon={icons[skill]}>
                            {skill}
                          </SkillChip>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              }
            />
          ))}
        </Timeline>
      </div>
    </section>
  );
}