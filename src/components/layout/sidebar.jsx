import React from "react";
import { Link, useParams } from "react-router-dom";
import { componentsList } from "../componentData";

export default function Sidebar() {
  const { type } = useParams();

  const activeClass = "text-white border-l-2 border-purple-500 pl-2";

  return (
    <aside className="w-64 h-full border-r border-white/10 bg-black text-gray-300 p-6">

      <ul className="space-y-2">
        {componentsList.map((item) => (
          <li key={item.slug}>
            <Link
              to={item.path}
              className={
                type === item.slug
                  ? activeClass
                  : "hover:text-white"
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </aside>
  );
}