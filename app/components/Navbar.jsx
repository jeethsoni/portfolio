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
  const navRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  // Queue an anchor to scroll to AFTER the menu closes
  const pendingScrollRef = React.useRef(null);

  // Which section is active?
  const activeId = useScrollSpy(LINKS.map(l => l.id));

  // Core scroll function (window scroll; adjust if you use a custom scroll container)
  const scrollToId = React.useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navH = navRef.current?.offsetHeight ?? 72;
    const target = el.getBoundingClientRect().top + window.scrollY - navH;

    // Smooth scroll, and retry next frame (iOS/overlay quirk)
    window.scrollTo({ top: target, behavior: "smooth" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: target, behavior: "smooth" });
    });

    // Keep URL hash in sync without jumping
    history.replaceState(null, "", `#${id}`);
  }, []);

  // When mobile menu closes, measure fresh layout and scroll
  React.useEffect(() => {
    if (!open && pendingScrollRef.current) {
      // Let framer-motion remove height from flow first
      requestAnimationFrame(() => {
        const id = pendingScrollRef.current;
        pendingScrollRef.current = null;
        scrollToId(id);
      });
    }
  }, [open, scrollToId]);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-30 w-full
                 flex items-center
                 px-8 py-4 lg:px-10 xl:px-[8%]
                 bg-white/10 dark:bg-neutral-900/30
                 backdrop-blur-xl backdrop-saturate-150
                 border-b border-white/10 dark:border-white/10
                 shadow-[0_8px_30px_rgba(2,8,23,0.3)]"
    >
      {/* Logo */}
      <button onClick={() => scrollToId("home")} aria-label="Go home" className="lg:flex items-center">
        <Image
          src="/logo_dark.png"
          alt="Logo"
          width={80}
          height={80}
          className="cursor-pointer"
        />
      </button>

      {/* Desktop links */}
      <ul className="hidden lg:flex mx-auto space-x-2 text-white font-medium bg-white/10 px-1.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
        {LINKS.map((l) => {
          const active = activeId === l.id;
          return (
            <li key={l.id}>
              <button
                onClick={() => scrollToId(l.id)}
                className={`px-3 py-1 rounded-full transition-colors duration-200
                ${active ? "bg-emerald-500 text-white" : "hover:bg-white/15"}`}
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
        <a href="https://www.instagram.com/_jeetsoni" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-gray-50 transition-colors">
          <FaInstagram size={22} />
        </a>
        <a href="https://www.linkedin.com/in/jeet-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-50 transition-colors">
          <FaLinkedin size={22} />
        </a>
        <a href="https://www.github.com/jeethsoni" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-50 transition-colors">
          <FaGithub size={22} />
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={toggle}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="lg:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md"
      >
        {open ? <AiOutlineClose size={24} className="text-white" /> : <IoIosMenu size={26} className="text-white" />}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute left-0 right-0 top-full lg:hidden overflow-hidden"
          >
            <div className="w-full border-t border-white/10 bg-white/90 text-black backdrop-blur-md shadow-lg dark:bg-gray-900/90 dark:text-white">
              <ul className="flex flex-col divide-y divide-gray-200/40 dark:divide-white/10">
                {LINKS.map((l) => {
                  const active = activeId === l.id;
                  return (
                    <li key={l.id}>
                      <a
                        href={`#${l.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          // queue the destination, then close; scrolling runs after close in useEffect
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
    </nav>
  );
}
