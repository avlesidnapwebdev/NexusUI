import { Link, useParams } from "react-router-dom";
import { componentsList } from "../componentData";

export default function Sidebar() {
  const { type } = useParams();

  return (
    <aside className="w-64 h-full border-r border-white/10 bg-black text-gray-300 relative">
      <div className="h-full overflow-y-auto p-6 scrollbar-hide">
        {componentsList.map((section) => (
          <div key={section.title} className="mb-8">
            {/* Section Title */}
            <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-3">
              {section.title}
            </h3>

            {/* Vertical Line Wrapper */}
            <div className="relative pl-4">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10" />

              <ul className="space-y-2">
                {section.items.map((item) => {
                  const isActive = type === item.slug;

                  return (
                    <li key={item.slug} className="relative">
                      {/* 🔥 Active Vertical Line */}
                      {isActive && (
                        <div className="absolute -left-[13px] top-0 h-full w-[2px] bg-white rounded-full" />
                      )}

                      {/* Active Dot (optional) */}
                      {isActive && (
                        <div className="absolute -left-[9px] top-2  bg-purple-500 rounded-full" />
                      )}

                      <Link
                        to={item.path}
                        className={`flex items-center justify-between text-sm transition-all duration-200 ${
                          isActive
                            ? "text-white font-medium"
                            : "hover:text-white text-gray-400"
                        }`}
                      >
                        <span>{item.name}</span>

                        {item.badge && (
                          <span className="text-[10px] bg-white/10 px-2 py-[2px] rounded-md">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent" />

      {/* Top Fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-5 bg-gradient-to-b from-black to-transparent" />
    </aside>
  );
}
