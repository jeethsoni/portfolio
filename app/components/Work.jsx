import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import { Timeline } from "./ui/Timeline";
import { AuroraText } from "./ui/aurora-text";
import { Zod, ExpressJsLight, GitHubLight, JavaScript, NodeJs, Python, FastAPI, MongoDB, Git, Jira } from "developer-icons";
import { PytestOriginal, SqlalchemyOriginal, MongooseOriginal } from "devicons-react";
import JwtIcon from "./ui/icons/JwtIcon";

const SkillChip = ({ icon, children }) => (
  <motion.span
    whileHover={{ scale: 1.05, y: -1 }}
    transition={{ type: "spring", stiffness: 300, damping: 16 }}
    className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/90 whitespace-nowrap backdrop-blur-sm hover:bg-white/15 hover:border-cyan-300/40 transition"
  >
    {icon}
    <span>{children}</span>
  </motion.span>
);



export default function Work() {
  const icons = {
    // Sanctumcloud stack
    JavaScript: <JavaScript className="h-4 w-4" />,
    "Express.js": <ExpressJsLight className="h-4 w-4" />,
    "Node.js": <NodeJs className="h-4 w-4" />,
    MongoDB: <MongoDB className="h-4 w-4" />,
    Zod: <Zod className="h-4 w-4" />,
    Jira: <Jira className="h-4 w-4" />,
    Mongoose: <MongooseOriginal className="h-4 w-4" />,

    // Codejockey stack
    Python: <Python className="h-4 w-4" />,
    FastAPI: <FastAPI className="h-4 w-4" />,
    SQLAlchemy: <SqlalchemyOriginal className="h-4 w-4" />,
    JWT: <JwtIcon className="h-4 w-4" />,
    Pytest: <PytestOriginal className="h-4 w-4" />,

    //common
    Git: <Git className="h-4 w-4" />,
  };



  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <AuroraText className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text">
            My Professional Journey
          
          </AuroraText>
          <p className="mt-3 text-base md:text-lg text-gray-300/90">
            A timeline of my work experience and milestones
          </p>
        </motion.div>

        <Timeline>
          {/* Sanctumcloud */}
          <Timeline.Item
            title={
              <>
                Software Developer Intern <br /> <span className="italic text-cyan-50 md:text-2xl text-xl">Sanctumcloud</span>
              </>
            }
            content={
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
                className="relative"
              >
                {/* card */}
                <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                  <div className="rounded-2xl bg-gray-900 p-6 md:p-7 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300/90">
                      <div className="flex gap-1 rounded-full bg-gray-800 border-gray-600 px-2.5 py-1.5 text-xs text-white/90 items-center">
                        <CalendarDays className="h-4 w-4" />
                        <p>Jan 2025 – May 2025</p>
                      </div>
                      <div className="flex gap-1 rounded-full bg-gray-800 border-gray-600 px-2.5 py-1.5 text-xs text-white/90 items-center">
                        <MapPin className="h-4 w-4" />
                        <p>Ashburn, VA</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-gray-200 [list-style-type:none]">
                      <li className="relative pl-6 before:absolute before:left-0 before:top-0.5 before:content-['✦'] before:text-cyan-300 before:text-base">
                        Implemented RESTful APIs with Express.js and MongoDB, boosting data throughput by
                        30% and streamlining backend operations.
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-0.5 before:content-['✦'] before:text-cyan-300 before:text-base">
                        Devised and deployed 7+ scalable MongoDB schemas, reinforcing data integrity and enabling
                        future growth.
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-0.5 before:content-['✦'] before:text-cyan-300 before:text-base">
                        Tested and debugged runtime input validation using Zod, cutting production-level data
                        errors by 40%.
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-0.5 before:content-['✦'] before:text-cyan-300 before:text-base">
                        Collaborated with a cross-functional Agile team to improve sprint planning and reduce delivery
                        gaps by 20%.
                      </li>
                    </ul>

                    <div className="mt-5">
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "JavaScript",
                          "Express.js",
                          "Node.js",
                          "MongoDB",
                          "Mongoose",
                          "Zod",
                          "Git",
                          "Jira",
                        ].map((s) => (
                          <SkillChip key={s} icon={icons[s]}>
                            {s}
                          </SkillChip>
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
            title={
              <>
                Software Developer Intern <br /> <span className="italic text-cyan-50 md:text-2xl text-xl">Codejockey.io</span>
              </>
            }            
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
                      <div className="flex gap-1 rounded-full bg-gray-800 border-gray-600 px-2.5 py-1.5 text-xs text-white/90 items-center">
                        <CalendarDays className="h-4 w-4" />
                        <p>Jun 2024 – Aug 2024</p>
                      </div>
                      <div className="flex gap-1 rounded-full bg-gray-800 border-gray-600 px-2.5 py-1.5 text-xs text-white/90 items-center">
                        <MapPin className="h-4 w-4" />
                        <p>Middletown, MD</p>
                      </div>
                    </div>


                    <ul className="mt-4 space-y-2 text-gray-200 [l1ist-style-type:none]">
                      <li className="relative pl-6 before:absolute before:left-0 before:top-0.5 before:content-['✦'] before:text-cyan-300 before:text-base">
                        Spearheaded enhancements to internal APIs using FastAPI, improving reliability by 30% in dev
                        and staging environments.
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-0.5 before:content-['✦'] before:text-cyan-300 before:text-base">
                        Improved code maintainability by replacing ~90% of raw SQL with SQLAlchemy ORM models.
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-0.5 before:content-['✦'] before:text-cyan-300 before:text-base">
                        Integrated JWT-based authentication and logging middleware, decreasing auth-related errors by
                        30% and improving traceability by 60%.
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-0.5 before:content-['✦'] before:text-cyan-300 before:text-base">
                        Created 15+ Pydantic schemas and unit tests, achieving 85% coverage and enforcing strong data
                        validation.
                      </li>
                    </ul>

                    <div className="mt-5">
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "Python",
                          "FastAPI",
                          "SQLAlchemy",
                          "JWT",
                          "Pytest",
                          "Git",
                        ].map((s) => (
                          <SkillChip key={s} icon={icons[s]}>
                            {s}
                          </SkillChip>
                        ))}
                      </div>
                    </div>

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
