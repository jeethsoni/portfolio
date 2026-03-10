"use client";

import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-black/60 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold">Jeet Soni</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Software developer focused on building scalable backend systems, developer
              tools, and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Me
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#work" className="hover:text-white transition">
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="/api/resume"
                  download="Jeet_Soni_Resume.pdf"
                  className="flex items-center gap-1 rounded-xl"
                >
                  Resume
                  <HiArrowTopRightOnSquare />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>

            <div className="mt-4 flex gap-3">
              <SocialIcon href="https://github.com/jeethsoni">
                <Github size={18} />
              </SocialIcon>

              <SocialIcon href="https://linkedin.com/in/jeet-dev">
                <Linkedin size={18} />
              </SocialIcon>

              <SocialIcon href="mailto:it.jsoni22@gmail.com">
                <Mail size={18} />
              </SocialIcon>

              <SocialIcon href="tel:+1234567890">
                <Phone size={18} />
              </SocialIcon>
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-lg font-semibold">Work With Me</h3>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Open to contract roles, freelance projects, and collaborations involving
              backend systems, APIs, and developer tools.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Jeet Soni. All rights reserved.</p>

          <p>
            Built with <span className="text-purple-400">❤</span> using Next.js & Tailwind
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-400 text-black shadow-lg hover:scale-105 transition"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}

function SocialIcon({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}
