import { Link, useParams } from "react-router-dom";
import { componentsList } from "../componentData";

export default function Sidebar() {
  const { type } = useParams();

  return (
    <aside className="w-64 h-full border-r border-white/10 bg-black text-gray-300 relative">
      {/* Scroll Area */}
      <div className="h-full overflow-y-auto p-6 scrollbar-hide">
        {componentsList.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-sm text-gray-400 mb-3">{section.title}</h3>

            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={item.path}
                    className={
                      type === item.slug
                        ? "text-white border-l-2 border-purple-500 pl-2"
                        : "hover:text-white"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 🔥 Bottom Fade Effect */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent" />
      {/* Top Fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black to-transparent" />
    </aside>
  );
}
