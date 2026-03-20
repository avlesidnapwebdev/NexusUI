import React, { useState } from "react";
import { Github, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { componentsList } from "../componentData";

export default function ComponentHeader() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = componentsList.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-black text-white relative">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src="/logo.webp" className="h-10 w-10" />
        </Link>
        <Link to="/" className="font-semibold text-lg">
          Nexus UI
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-1">
          <Search size={16} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 text-sm"
          />
        </div>

        {/* Dropdown Results */}
        {query && (
          <div className="absolute top-12 left-0 w-60 bg-black border border-white/10 rounded-lg shadow-lg z-50">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <div
                  key={item.slug}
                  onClick={() => {
                    navigate(item.path);
                    setQuery("");
                  }}
                  className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-400">No results</div>
            )}
          </div>
        )}
      </div>

      {/* Github */}
      <a
        href="https://github.com/avlesidnapwebdev"
        target="_blank"
        className="flex items-center gap-2 bg-white/10 px-4 py-4 rounded-full text-sm"
      >
        <Github size={16} />
      </a>

    </header>
  );
}