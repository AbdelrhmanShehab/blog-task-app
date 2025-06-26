"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ThemeContextType {
  togglemode: boolean;
  setToggleMode: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [togglemode, setToggleMode] = useState(false);

  // On load: get from localStorage and apply to <html>
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    const isDark = storedMode === "true";
    setToggleMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // On state change: update localStorage and apply class
  useEffect(() => {
    localStorage.setItem("darkMode", togglemode.toString());
    if (togglemode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [togglemode]);

  return (
    <ThemeContext.Provider value={{ togglemode, setToggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
