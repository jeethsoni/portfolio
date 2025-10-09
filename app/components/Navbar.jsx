"use client";
import React from "react";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { LiaBookSolid } from "react-icons/lia";
import { LuContact } from "react-icons/lu";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useScrollSpy from "./hooks/UseSpyScroll";

const LINKS = [
  { id: "home", label: "Home", icon: <TiHomeOutline /> },
  { id: "about", label: "About", icon: <GoPerson /> },
  { id: "work", label: "Work", icon: <MdOutlineWorkOutline /> },
  { id: "projects", label: "Projects", icon: <FaCode /> },
  { id: "blog", label: "Blog", icon: <LiaBookSolid /> },
  { id: "contact", label: "Contact", icon: <LuContact /> },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  const pendingScrollRef = React.useRef(null);
  const activeId = useScrollSpy(LINKS.map(l => l.id));

  const scrollToId = React.useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }, []);

  React.useEffect(() => {
    if (!open && pendingScrollRef.current) {
      const id = pendingScrollRef.current;
      pendingScrollRef.current = null;
      setTimeout(() => scrollToId(id), 20);
    }
  }, [open, scrollToId]);

  return (
    <>
      {/* FIXED NAVBAR */}
      <nav
        className="
          fixed inset-x-0 top-0 z-[9999]
          h-16 md:h-20
          flex items-center
          px-6 md:px-10 xl:px-[8%]
          text-white
          bg-neutral-900/90
          supports-[backdrop-filter]:bg-neutral-900/60
          supports-[backdrop-filter]:backdrop-blur-xl
          border-b border-white/10
        "
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        {/* Logo */}
        <button onClick={() => scrollToId("home")} aria-label="Go home" className="flex items-center">
          <Image
            src="/logo_dark.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex mx-auto space-x-2 font-medium bg-white/10 px-1.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
          {LINKS.map((l) => {
            const active = activeId === l.id;
            return (
              <li key={l.id}>
                <button
                  onClick={() => scrollToId(l.id)}
                  className={`px-3 py-1 rounded-full transition-colors duration-200
                  ${active ? "bg-emerald-500/70 text-white" : "hover:bg-white/15"}`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop socials */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://www.instagram.com/_jeetsoni" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
            <FaInstagram size={22} />
          </a>
          <a href="https://www.linkedin.com/in/jeet-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href="https://www.github.com/jeethsoni" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-white transition-colors">
            <FaGithub size={22} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md text-white"
        >
          {open ? <AiOutlineClose size={24} /> : <IoIosMenu size={26} />}
        </button>
      </nav>

      {/* FIXED MOBILE DROPDOWN (not absolute) */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="
              fixed inset-x-0
              z-[9998]
              top-16 md:top-20
              lg:hidden overflow-hidden
            "
          >
            <div className="w-full border-t border-white/10 bg-white/95 text-black shadow-lg dark:bg-gray-900/95 dark:text-white">
              <ul className="flex flex-col divide-y divide-gray-200/40 dark:divide-white/10">
                {LINKS.map((l) => {
                  const active = activeId === l.id;
                  return (
                    <li key={l.id}>
                      <a
                        href={`#${l.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          pendingScrollRef.current = l.id;
                          close();
                        }}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-left
                          ${active ? "bg-white/60 dark:bg-white/10" : "hover:bg-gray-100/70 dark:hover:bg-white/10"}`}
                      >
                        {l.icon} {l.label}
                      </a>
                    </li>
                  );
                })}

                {/* Social row */}
                <li className="px-5 py-3">
                  <div className="flex items-center gap-5">
                    <a href="https://www.instagram.com/_jeetsoni" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={close} className="hover:opacity-80"><FaInstagram size={22} /></a>
                    <a href="https://www.linkedin.com/in/jeet-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={close} className="hover:opacity-80"><FaLinkedin size={22} /></a>
                    <a href="https://www.github.com/jeethsoni" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={close} className="hover:opacity-80"><FaGithub size={22} /></a>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SPACER so content starts below the fixed nav */}
      <div aria-hidden className="h-16 md:h-20" />
    </>
  );
}
