import React, { useState } from "react";
import { Github, Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { componentsList } from "../componentData";

export default function ComponentHeader({ setOpen }) {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const flatList = componentsList.flatMap((section) => section.items);

  const filtered = flatList.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <header className="h-16 border-b border-white/10 flex items-center justify-between px-4 md:px-6 bg-black text-white relative">
        {/* LEFT */}
        <div className="flex items-center gap-5">
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <Menu size={20} />
          </button>

          {/* 🔥 Only logo on mobile */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.webp" className="h-8 w-8 md:h-10 md:w-10" />

            {/* Hide text on mobile */}
            <span className="hidden sm:block font-semibold text-lg">
              Nexus UI
            </span>
          </Link>
        </div>

        {/* 🔍 Desktop Search */}
        <div className="relative hidden sm:block">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-1 w-40 md:w-60">
            <Search size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>

          {query && (
            <div className="absolute top-12 left-0 w-full bg-black border border-white/10 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <div
                    key={item.slug}
                    onClick={() => {
                      navigate(item.path);
                      setQuery("");
                    }}
                    className="px-4 py-2 hover:bg-white/10 cursor-pointer text-sm"
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-400 text-sm">
                  No results
                </div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          {/* 🔥 Mobile Search Icon */}
          <button onClick={() => setSearchOpen(true)} className="sm:hidden">
            <Search size={20} />
          </button>

          <a
            href="https://github.com/avlesidnapwebdev"
            target="_blank"
            className="flex items-center gap-2 bg-white/10 px-3 py-3 rounded-full text-sm"
          >
            <Github size={16} />
          </a>
        </div>
      </header>

      {/* 🔥 Mobile Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black z-50 p-4">
          <div className="flex items-center gap-2 mb-4">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components..."
              className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 outline-none"
            />
            <button onClick={() => setSearchOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="space-y-2 max-h-[80vh] overflow-y-auto">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <div
                  key={item.slug}
                  onClick={() => {
                    navigate(item.path);
                    setQuery("");
                    setSearchOpen(false);
                  }}
                  className="px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer"
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div className="text-gray-400">No results</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
