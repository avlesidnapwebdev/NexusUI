import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-center transition-all duration-500 z-50 ${
        scrolled ? "pt-4" : "pt-0"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full max-w-6xl px-6 py-4 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-lg rounded-full shadow-lg border border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-purple-400 font-bold text-lg">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          Nexus UI
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Docs</li>
          <li className="hover:text-white cursor-pointer">Components</li>
          <li className="hover:text-white cursor-pointer">Templates</li>
        </ul>

        {/* Button */}
        <button className="bg-white text-black px-10 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
          Github
        </button>
      </div>
    </nav>
  );
}
