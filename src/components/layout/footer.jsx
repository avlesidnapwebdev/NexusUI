import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#070016] border-t border-purple-900/20 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center gap-2 text-purple-400 font-bold text-lg">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            Nexus UI
          </div>

          <p className="mt-3 text-sm text-gray-400">
            A library created with <span className="text-purple-400">❤</span> by{" "}
            <span className="text-purple-400">selvapandi</span>
          </p>

          <p className="mt-2 text-xs text-gray-500">© 2026 Nexus UI</p>
        </div>

        {/* Right Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition">
            Docs
          </a>
          <a href="#" className="hover:text-white transition">
            Components
          </a>
          <a href="#" className="hover:text-white transition">
            Templates
          </a>
        </div>
      </div>
    </footer>
  );
}
