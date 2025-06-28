"use client";
import React, { useState } from "react";
import Image from "next/image";
import useTheme from "../context/ThemeContext";
import darkmode from "../../public/assets/icons/dark-mode-icon.svg";
import lightmode from "../../public/assets/icons/light-mode-icon.svg";
export default function Header() {
  const { togglemode, setToggleMode } = useTheme();

  return (
    <header className="bg-white  w-full top-0 dark:bg-[#131421] text-[#181A2A] dark:text-white py-4 shadow-md mb-12 -z-2">
      <div className="container  mx-auto flex justify-between items-center mb-40">
        <h1 className="md:text-xl  font-bold transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]">
          Abdelrhman Shihab
        </h1>{" "}
        <nav className="flex gap-11">
          <button
            onClick={() => setToggleMode(!togglemode)}
            className="w-6 h-6 relative focus:outline-none  "
          >
            <div className="w-15 h-7 rounded-4xl bg-[#131421] dark:bg-white flex items-center justify-between  px-1 cursor-pointer ">
              <Image
                src={togglemode ? lightmode : darkmode}
                alt="dark mode icon"
                width={18}
                height={18}
                className={`cursor-pointer invert brightness-200 absolute dark:invert-0 dark:brightness-100 ${
                  togglemode ? "translate-x-8" : ""
                }`}
              />
            </div>
          </button>{" "}
          <ul className="flex space-x-3">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:underline">
                blogs
              </a>
            </li>
          </ul>{" "}
        </nav>
      </div>
    </header>
  );
}
