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

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    const isDark = storedMode === "true";
    setToggleMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", togglemode.toString());
    document.documentElement.classList.toggle("dark", togglemode);
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
