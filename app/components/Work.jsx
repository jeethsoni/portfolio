import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import { Timeline } from "./ui/Timeline";


export default function Work() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-cyan-300">
            My Professional Journey
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-300/90">
            A timeline of my work experience and milestones
          </p>
        </motion.div>

        {/* Your Timeline component */}
        <Timeline>
          {/* Sanctumcloud */}
          <Timeline.Item
            title="Software Developer Intern — Sanctumcloud"
            date="Jan 2025 – May 2025"
            content={
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
                className="relative"
              >
                {/* Glass card */}
                <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                  <div className="rounded-2xl bg-gray-900 p-6 md:p-7 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300/90">
                      <CalendarDays className="h-4 w-4" />
                      <span>Jan 2025 – May 2025</span>
                      <MapPin className="h-4 w-4" />
                      <span>Ashburn, VA</span>
                    </div>

                    <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-200">
                      <li>
                        Implemented RESTful APIs with Express.js and MongoDB, boosting data throughput by
                        30% and streamlining backend operations.
                      </li>
                      <li>
                        Devised and deployed 7+ scalable MongoDB schemas, reinforcing data integrity and enabling
                        future growth.
                      </li>
                      <li>
                        Tested and debugged runtime input validation using Zod, cutting production-level data
                        errors by 40%.
                      </li>
                      <li>
                        Collaborated with a cross-functional Agile team to improve sprint planning and reduce delivery
                        gaps by 20%.
                      </li>
                    </ul>

                    <div className="mt-5">
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "Python",
                          "FastAPI",
                          "SQLAlchemy",
                          "PostgreSQL",
                          "Pydantic",
                          "JWT",
                          "Pytest",
                          "Logging/Observability",
                          "Docker",
                          "ORM Design",
                        ].map((s) => (
                          <span
                            key={s}
                            className={[
                              "px-2.5 py-1 rounded-full text-xs bg-white/10",
                              "hover:ring-cyan-300/40 transition",
                            ].join(" ")}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            }
          />

          {/* Codejockey.io */}
          <Timeline.Item
            title="Software Developer Intern — Codejockey.io"
            date="Jun 2024 – Aug 2024"
            content={
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="relative"
              >
                <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                  <div className="rounded-2xl bg-gray-900 p-6 md:p-7 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300/90">
                      <CalendarDays className="h-4 w-4" />
                      <span>Jun 2024 – Aug 2024</span>
                      <MapPin className="h-4 w-4" />
                      <span>Middletown, MD</span>
                    </div>


                    <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-200">
                      <li>
                        Spearheaded enhancements to internal APIs using FastAPI, improving reliability by 30% in dev
                        and staging environments.
                      </li>
                      <li>
                        Improved code maintainability by replacing ~90% of raw SQL with SQLAlchemy ORM models.
                      </li>
                      <li>
                        Integrated JWT-based authentication and logging middleware, decreasing auth-related errors by
                        30% and improving traceability by 60%.
                      </li>
                      <li>
                        Created 15+ Pydantic schemas and unit tests, achieving 85% coverage and enforcing strong data
                        validation.
                      </li>
                    </ul>

                  </div>
                </div>
              </motion.div>
            }
          />
        </Timeline>
      </div>
    </section>
  );
}
