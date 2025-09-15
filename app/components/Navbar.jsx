import React, { useState } from "react";
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      {/* make nav relative so the dropdown can anchor to it */}
      <nav className="fixed left-0 top-0 z-30 w-full
          flex items-center
          px-8 py-4 lg:px-10 xl:px-[8%]
          bg-white/10 dark:bg-neutral-900/30
          backdrop-blur-xl backdrop-saturate-150
          border-b border-white/10 dark:border-white/10
          shadow-[0_8px_30px_rgba(2,8,23,0.3)]">
        {/* Logo (left) */}
        <a href="/" className="lg:flex items-center">
          <Image
            src="/logo_dark.png"
            alt="Logo"
            width={80}
            height={80}
            className="cursor-pointer"
          />
        </a>

        {/* Center desktop nav */}
        <ul className="hidden lg:flex mx-auto space-x-8 text-white font-medium bg-white/10 px-1.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#work">Work</a></li>
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#blog">Blog</a></li>
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop socials (right) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://www.instagram.com/_jeetsoni" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-gray-50 transition-colors">
            <FaInstagram size={26} />
          </a>
          <a href="https://www.linkedin.com/in/jeet-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-50 transition-colors">
            <FaLinkedin size={26} />
          </a>
          <a href="https://www.github.com/jeethsoni" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-gray-50 transition-colors">
            <FaGithub size={26} />
          </a>
        </div>

        {/* Mobile hamburger (right) */}
        <button
          onClick={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md"
        >
          {open ? <AiOutlineClose size={24} className="text-white" /> : <IoIosMenu size={26} className="text-white" />}
        </button>

        {/* FULL-WIDTH MOBILE DROPDOWN under the navbar */}
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
                  <li>
                    <a onClick={close} href="#home" className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100/70 dark:hover:bg-white/10">
                      <TiHomeOutline /> Home
                    </a>
                  </li>
                  <li>
                    <a onClick={close} href="#work" className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100/70 dark:hover:bg-white/10">
                      <MdOutlineWorkOutline /> Work
                    </a>
                  </li>
                  <li>
                    <a onClick={close} href="#projects" className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100/70 dark:hover:bg-white/10">
                      <FaCode /> Projects
                    </a>
                  </li>
                  <li>
                    <a onClick={close} href="#about" className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100/70 dark:hover:bg-white/10">
                      <GoPerson /> About
                    </a>
                  </li>
                  <li>
                    <a onClick={close} href="#blog" className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100/70 dark:hover:bg-white/10">
                      <LiaBookSolid /> Blog
                    </a>
                  </li>
                  <li>
                    <a onClick={close} href="#contact" className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100/70 dark:hover:bg-white/10">
                      <LuContact /> Let's Connect
                    </a>
                  </li>

                  {/* Social row */}
                  <li className="px-5 py-3">
                    <div className="flex items-center gap-5">
                      <a href="https://www.instagram.com/_jeetsoni" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={close} className="hover:opacity-80">
                        <FaInstagram size={22} />
                      </a>
                      <a href="https://www.linkedin.com/in/jeet-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={close} className="hover:opacity-80">
                        <FaLinkedin size={22} />
                      </a>
                      <a href="https://www.github.com/jeethsoni" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={close} className="hover:opacity-80">
                        <FaGithub size={22} />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
