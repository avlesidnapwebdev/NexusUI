import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    // Apply theme
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Play sound
    const clickSound = new Audio("/click.mp3");
    clickSound.volume = 0.4;
    clickSound.play().catch(() => {});
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-900 bg-black/60 hover:ring-2 hover:ring-purple-500 transition bg-white dark:bg-black dark:border-white">
      {darkMode ? (
        <Sun size={18} className="text-black dark:text-white" />
      ) : (
        <Moon size={18} className="text-black dark:text-white" />
      )}
    </button>
  );
}