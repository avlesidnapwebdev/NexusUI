// src/components/ui/DarkModeDocs.jsx

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import DocsTemplate from "../ui/DocsTemplate";

export default function DarkModeDocs() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <DocsTemplate
      title="Dark Mode"

      preview={
        <div className="flex flex-col items-center gap-6">
          <div className="w-96 h-48 flex items-center justify-center rounded-lg 
            bg-white text-black 
            dark:bg-black dark:text-white 
            transition-all duration-500"
          >
            <span className="text-xl font-semibold">
              {dark ? "Dark Mode" : "Light Mode"}
            </span>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
            bg-white dark:bg-black transition text-black dark:text-white"
          >
            {dark ? <Sun /> : <Moon />}
          </button>
        </div>
      }

      installCode={`npm install lucide-react`}

      usageCode={`import ThemeToggle from "./ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ThemeToggle />
    </div>
  );
}`}

      componentCode={`import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
}`}
    />
  );
}