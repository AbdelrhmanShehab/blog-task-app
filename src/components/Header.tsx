"use client";
import React, { useState } from "react";
import Image from "next/image";
import useTheme from "../context/ThemeContext";
import darkmode from "../../public/assets/icons/dark-mode-icon.svg";
import lightmode from "../../public/assets/icons/light-mode-icon.svg";
export default function Header() {
  const { togglemode, setToggleMode } = useTheme();

  return (
    <header className="bg-white fixed w-full top-0 z-5 dark:bg-[#131421] text-black dark:text-white py-4 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]">
          Abdelrhman Shihab
        </h1>
        <nav className="flex gap-4">
          <div className="flex items-center gap-12">
            <button
              onClick={() => setToggleMode(!togglemode)}
              className="w-6 h-6 relative focus:outline-none"
            >
              <Image
                src={togglemode ? lightmode : darkmode}
                alt="dark mode icon"
                width={22}
                height={22}
                className="cursor-pointer dark:invert dark:brightness-200"
              />
            </button>
          </div>
          <ul className="flex space-x-4">
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
