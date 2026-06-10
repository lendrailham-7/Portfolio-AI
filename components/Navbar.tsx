"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-amber-500">
          Lendra.dev
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="transition hover:text-amber-500"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition hover:text-amber-500"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition hover:text-amber-500"
          >
            Contact
          </a>

          {/* Toggle Theme */}
          {mounted && (
            <button
              onClick={() => {
                console.log("Theme sebelum:", theme);

                setTheme(theme === "dark" ? "light" : "dark");
              }}
              className="rounded-lg border border-gray-300 p-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}