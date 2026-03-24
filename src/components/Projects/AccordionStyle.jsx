// src/components/ui/ProjectAccordionProDocs.jsx

import DocsTemplate from "../ui/DocsTemplate";
import { useState } from "react";

export default function ProjectAccordionProDocs() {
  const data = [
    {
      id: 1,
      title: "Expenses Tracker",
      description: "Full-stack MERN app with analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.webp",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Aquarium Shop",
      description: "E-commerce platform with admin dashboard.",
      tech: ["React", "Express", "Cloudflare"],
      image: "/placeholder.webp",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Pilot Horizons",
      description: "WordPress website with SEO optimization.",
      tech: ["WordPress", "SEO"],
      image: "/placeholder.webp",
      github: "#",
      live: "#",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <DocsTemplate
      title="Project Accordion Pro"

      preview={
        <div className="w-full max-w-5xl flex gap-2 h-[260px]">
          {data.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActive(index)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out 
                ${isActive ? "flex-[4]" : "flex-[0.7]"}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/70 backdrop-blur-sm p-4 flex flex-col justify-end transition-all duration-500
                  ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  {/* Content */}
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">
                    {item.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-3">
                    <a
                      href={item.github}
                      className="text-xs border border-white/20 px-3 py-1 rounded hover:bg-white/10"
                    >
                      GitHub
                    </a>
                    <a
                      href={item.live}
                      className="text-xs bg-purple-500 px-3 py-1 rounded text-white"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      }

      installCode={`// No installation required (Tailwind CSS)`}

      usageCode={`import ProjectAccordionPro from "./ProjectAccordionPro";

const data = [
  {
    id: 1,
    title: "Project",
    description: "Description",
    tech: ["React"],
    image: "/img.png",
  },
];

export default function App() {
  return <ProjectAccordionPro data={data} />;
}`}

      componentCode={`import { useState } from "react";

export default function ProjectAccordionPro({ data }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-2 h-[260px]">
      {data.map((item, index) => {
        const isActive = active === index;

        return (
          <div
            key={item.id}
            onMouseEnter={() => setActive(index)}
            className={\`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500
            \${isActive ? "flex-[4]" : "flex-[0.7]"}\`}
          >
            <img
              src={item.image}
              className="w-full h-full object-cover"
            />

            <div
              className={\`absolute inset-0 bg-black/70 backdrop-blur-sm p-4 flex flex-col justify-end transition-all duration-500
              \${isActive ? "opacity-100" : "opacity-0"}\`}
            >
              <h3 className="text-white font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 mt-1">
                {item.description}
              </p>

              <div className="flex gap-2 mt-2 flex-wrap">
                {item.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-purple-500/20 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-3">
                <a href={item.github} className="text-xs border px-3 py-1 rounded">
                  GitHub
                </a>
                <a href={item.live} className="text-xs bg-purple-500 px-3 py-1 rounded text-white">
                  Live
                </a>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}`}
    />
  );
}