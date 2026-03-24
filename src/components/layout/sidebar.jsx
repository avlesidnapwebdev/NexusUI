import { Link, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { componentsList } from "../componentData";

export default function Sidebar({ open, setOpen }) {
  const { type } = useParams();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-50 top-0 left-0 h-full w-64 bg-black text-gray-300 border-r border-white/10 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Mobile Close */}
        <div className="lg:hidden flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-sm font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto p-6 scrollbar-hide">
          {componentsList.map((section) => (
            <div key={section.title} className="mb-8">
              <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                {section.title}
              </h3>

              <div className="relative pl-4">
                <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10" />

                <ul className="space-y-2">
                  {section.items.map((item) => {
                    const isActive = type === item.slug;

                    return (
                      <li key={item.slug} className="relative">
                        {isActive && (
                          <div className="absolute -left-[13px] top-0 h-full w-[2px] bg-white rounded-full" />
                        )}

                        <Link
                          to={item.path}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between text-sm ${
                            isActive
                              ? "text-white font-medium"
                              : "hover:text-white text-gray-400"
                          }`}
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
