import React from "react";
import { Github, Layers, LayoutTemplate } from "lucide-react";
import ThemeToggle from "../themetoggle";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center z-50 pt-4 px-4">
      <div
        className="
        flex items-center justify-between
        w-full max-w-2xl
        px-5 py-3
        rounded-full
        backdrop-blur-xl
        border
        shadow-lg
        transition-colors duration-300

        bg-white/60 border-black/10 text-black
        dark:bg-black/60 dark:border-white/10 dark:text-white
      "
      >
        {/* Logo */}
        <Link to="/">
          <img src="/logo.webp" alt="Logo" className="h-12 w-12" />
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-6 text-sm mx-auto">
          <li className="flex items-center gap-2 hover:text-purple-500 transition cursor-pointer">
            <Layers size={18} />
            <Link to="/components">Components</Link>
          </li>

          <li className="flex items-center gap-2 hover:text-purple-500 transition cursor-pointer">
            <LayoutTemplate size={18} />
            <Link to="/templates">Templates</Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <div className=" flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70">
            <ThemeToggle />
          </div>

          {/* Github Button */}
          <a
            href="https://github.com/avlesidnapwebdev"
            target="_blank"
            className="
              w-9 h-9 flex items-center justify-center
              rounded-full
              border
              transition

              bg-black text-white border-black/20
              dark:bg-white dark:text-black dark:border-white/20
            "
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
