import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/20 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-purple-400 font-bold text-lg">
            <a href='#'>
            <img src="/logo.webp" alt="Logo" className="h-8 w-8" />
            </a>
            Nexus UI
          </div>

          <p className="mt-4 text-sm">
            A library created with by{" "}
            <span className="text-purple-400 font-medium">Selvapandi</span>
          </p>
        </div>

        {/* Pages */}
        <div className="text-center">
          <h3 className="text-white font-semibold mb-4">Pages</h3>

          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>

            <Link to="/GettingStarted/docs" className="hover:text-white transition">
              Docs
            </Link>

            <Link to="/components" className="hover:text-white transition">
              Components
            </Link>

            <Link to="/templates" className="hover:text-white transition">
              Templates
            </Link>
          </div>
        </div>

        {/* Social + Contact */}
        <div className="text-center md:text-right">
          <h3 className="text-white font-semibold mb-4">Connect</h3>

          <div className="flex justify-center md:justify-end gap-4 mb-4">
            <a
              href="https://github.com/avlesidnapwebdev"
              target="_blank"
              className="p-2 bg-black/40 border border-white/10 rounded-full hover:bg-purple-600 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/selva-pandi-489981213/"
              target="_blank"
              className="p-2 bg-black/40 border border-white/10 rounded-full hover:bg-purple-600 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:selvapandi322@gmail.com"
              target="_blank"
              className="p-2 bg-black/40 border border-white/10 rounded-full hover:bg-purple-600 transition"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-sm text-gray-400">
            Contact:{" "}
            <a
              href="mailto:selvapandi322@gmail.com"
              className="text-purple-400 hover:text-white transition"
            >
              selvapandi322@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-purple-900/20 py-6 text-center text-sm text-gray-500">
        © 2026 <span className="text-purple-400">Nexus UI</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
