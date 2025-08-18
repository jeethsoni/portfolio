import React from "react";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { HeartHandshake } from "lucide-react";

const Navbar = () => {
  return (
    <>

    <nav className="w-full fixed flex items-center justify-between px-8 py-4 lg:px-10 xl:px-[8%] z-5000">
      <a href="/">
        <Image src="/logo.png" alt="Logo" width={60} height={60} className=" cursor-pointer opacity-90" />
      </a>

      <ul className="hidden lg:flex space-x-8 text-black font-medium bg-gray-400/10 px-1.5 py-1 rounded-full shadow-sm backdrop-blur-md border border-gray-300/50">
        <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300" ><a href="#home">Home</a></li>
        <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300"><a href="#work">Work</a></li>
        <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300"><a href="#projects">Projects</a></li>
        <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300"><a href="#about">About</a></li>
        <li className="hover:rounded-full hover:bg-emerald-500 px-3 py-1 hover:transition-colors duration-300"><a href="#blog">Blog</a></li>
        
      </ul>

      <div className="flex items-center gap-1.5 group cursor-pointer px-1.5 py-1">
        <a href="#connect" className="hidden lg:flex items-center gap-1.5 px-3 py-1 border border-gray-500 rounded-full hover:border-emerald-500">
          <span className="text-black group-hover:text-gray-800 transition-colors duration-300">
            Let's Connect
          </span>
          <HeartHandshake
            size={24}
            className="text-emerald-500 group-hover:text-emerald-500 transition-colors duration-300 group-hover:animate-handshake"
          />
        </a>

        <button className="block lg:hidden">
          <IoIosMenu size={28} className="text-gray-800 transition-colors duration-300" />
          </button>

      </div>

    </nav>

    </>
  );
};

export default Navbar;
