// src/components/ui/TimelineAdvancedDocs.jsx

import DocsTemplate from "../ui/DocsTemplate";
import { motion } from "framer-motion";

export default function Timeline() {
  const data = [
    {
      id: 1,
      title: "Project Name",
      description: "Full-stack MERN app with analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.webp",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Project Name",
      description: "E-commerce platform with admin dashboard.",
      tech: ["React", "Express", "Cloudflare"],
      image: "/placeholder.webp",
      github: "#",
      live: "#",
    },
  ];

  return (
    <DocsTemplate
      title="Timeline Projects"
      preview={
        <div className="w-full relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-16">
            {data.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center relative"
                >
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 top-10 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2" />

                  {/* Image */}
                  <div
                    className={`w-full md:w-1/2 p-4 ${
                      isLeft ? "md:pr-10" : "md:order-2 md:pl-10"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl w-full max-w-md mx-auto"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 p-4 ${
                      isLeft ? "md:pl-10 md:order-2" : "md:pr-10"
                    }`}
                  >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <h3 className="text-lg font-semibold">{item.title}</h3>

                      <p className="text-sm text-gray-400 mt-2">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs bg-purple-500/10 px-2 py-1 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-4">
                        {item.github && (
                          <a
                            href={item.github}
                            className="text-xs border border-white/10 px-3 py-1 rounded"
                          >
                            GitHub
                          </a>
                        )}

                        {item.live && (
                          <a
                            href={item.live}
                            className="text-xs bg-purple-500 px-3 py-1 rounded text-white"
                          >
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      }
      installCode={`npm install framer-motion`}
      usageCode={`export const data = [
  {
      id: 1,
      title: "Project Name",
      description: "Full-stack MERN app with analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.webp",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Project Name",
      description: "E-commerce platform with admin dashboard.",
      tech: ["React", "Express", "Cloudflare"],
      image: "/placeholder.webp",
      github: "#",
      live: "#",
    },
];`}
      componentCode={`import { motion } from "framer-motion";
import { data } from "../data";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

      <div className="space-y-16">
            {data.map((item, index) => {
              const isLeft = index % 2 === 0;

        return (
          <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center relative"
                >
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 top-10 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2" />

                  {/* Image */}
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl w-full max-w-md mx-auto"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <h3 className="text-lg font-semibold">{item.title}</h3>

                      <p className="text-sm text-gray-400 mt-2">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs bg-purple-500/10 px-2 py-1 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-4">
                        {item.github && (
                          <a
                            href={item.github}
                            className="text-xs border border-white/10 px-3 py-1 rounded"
                          >
                            GitHub
                          </a>
                        )}

                        {item.live && (
                          <a
                            href={item.live}
                            className="text-xs bg-purple-500 px-3 py-1 rounded text-white"
                          >
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
        );
      })}
    </div>
  );
}`}
    />
  );
}
