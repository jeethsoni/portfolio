import React, { useState } from "react";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { HeartHandshake } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { LiaBookSolid } from "react-icons/lia";
import { LuContact } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  
  // State to manage the mobile side menu
  const [open, setOpen] = useState(false);

  // Functions to toggle and close the side menu
  const toggleSideMenu = () => setOpen((v) => !v);  
  const closeSideMenu = () => setOpen(false);     

  return (
    <>
      <nav className="w-full fixed flex items-center justify-between px-8 py-4 lg:px-10 xl:px-[8%] z-30">
        <a href="/">
          <Image src="/logo_dark.png" alt="Logo" width={80} height={80} className=" cursor-pointer" />
        </a>

        <ul className="hidden md:flex space-x-8 text-black font-medium bg-white px-1.5 py-1 rounded-full shadow-gray-50 backdrop-blur-sm border border-gray-200/40">
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer" ><a href="#home">Home</a></li>
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#work">Work</a></li>
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300 cursor-pointer"><a href="#blog">Blog</a></li>
        </ul>

        <div className="flex items-center gap-1.5 group cursor-pointer px-1.5 py-1">
          <a href="#connect" className="hidden md:flex items-center gap-1.5 px-3 py-1 border border-gray-300 rounded-full hover:border-emerald-500 bg-white">
            <span className="text-black group-hover:text-gray-800 transition-colors duration-300">
              Let's Connect
            </span>
            <HeartHandshake
              size={24}
              className="text-emerald-500 group-hover:text-emerald-500 transition-colors duration-300 group-hover:animate-handshake"
            />
          </a>

          <button
            onClick={toggleSideMenu}
            className={`block md:hidden ${open ? "invisible" : ""}`}
            aria-label="Open menu"
          >
            <IoIosMenu size={26} className="text-white" />
          </button>
        </div>

        {/* Mobile menu */}

        <AnimatePresence>
          
          {open && (
            <motion.ul
              key="mobile-drawer"
              initial={{ x: "100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 1 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="flex md:hidden flex-col gap-3 fixed top-0 bg-blue-500/60 right-0 py-15 px-2 w-54 z-40 rounded-bl-xl shadow-lg"
            >
        
              <div className="flex items-center absolute right-6 top-6 justify-between" onClick={closeSideMenu}>
                {/* <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.02 }}
                className="text-lg font-semibold text-gray-700 pr-5"
              >
                The Compass
              </motion.div> */}
                <AiOutlineClose size={20} className="text-black"/>
                
              </div>

              <motion.li
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 }}
                className="flex items-center justify-start gap-1 transition-colors duration-300 hover:bg-gray-100 px-2 py-1 rounded"
              >
                <TiHomeOutline />
                <a onClick={closeSideMenu} href="#top">Home</a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 }}
                className="flex items-center justify-start gap-1 transition-colors duration-300 hover:bg-gray-100 px-2 py-1 rounded"
              >
                <MdOutlineWorkOutline />
                <a onClick={closeSideMenu} href="#work">Work</a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 }}
                className="flex items-center justify-start gap-1 transition-colors duration-300 hover:bg-gray-100 px-2 py-1 rounded"
              >
                <FaCode />
                <a onClick={closeSideMenu} href="#projects">Projects</a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.16 }}
                className="flex items-center justify-start gap-1 transition-colors duration-300 hover:bg-gray-100 px-2 py-1 rounded"
              >
                <GoPerson />
                <a onClick={closeSideMenu} href="#projects">About</a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.20 }}
                className="flex items-center justify-start gap-1 transition-colors duration-300 hover:bg-gray-100 px-2 py-1 rounded"
              >
                <LiaBookSolid />
                <a onClick={closeSideMenu} href="#blog">Blog</a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.24 }}
                className="flex items-center justify-start gap-1 transition-colors duration-300 hover:bg-gray-100 px-2 py-1 rounded"
              >
                <LuContact />
                <a onClick={closeSideMenu} href="#contact">Contact</a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
