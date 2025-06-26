"use client";
import React, { useState } from "react";
import Image from "next/image";
import useTheme from "../context/ThemeContext";
import darkmode from "../../public/assets/icons/dark-mode-icon.svg";
import lightmode from "../../public/assets/icons/light-mode-icon.svg";
export default function Header() {
  const { togglemode, setToggleMode } = useTheme();

  return (
    <header className="bg-white dark:bg-[#181A2A] text-black dark:text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog App</h1>
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
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
          </ul>{" "}
        </nav>
      </div>
    </header>
  );
}
