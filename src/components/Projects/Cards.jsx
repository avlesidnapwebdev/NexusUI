// src/components/ui/ProjectMediaLayeredDocs.jsx

import DocsTemplate from "../ui/DocsTemplate";
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectMediaLayeredDocs() {

  const data = {
    title: "Expenses Tracker",
    description:
      "Full-stack MERN app with analytics dashboard and secure authentication.",
    tech: ["react", "node", "db"],
    github: "#",
    live: "#",
    media: [
      { image: "/placeholder.webp", video: "/1.mp4" },
      { image: "/placeholder.webp", video: "/2.mp4" },
      { image: "/placeholder.webp", video: "/1.mp4" },
    ],
  };

  // 🔥 TECH ICONS
  const techIcons = {
    react: <FaReact />,
    node: <FaNodeJs />,
    db: <FaDatabase />,
  };

  const Preview = () => {
    return (
      <div className="w-full max-w-md mx-auto space-y-6">

        {/* 🔥 MEDIA (same width as card below) */}
        <div className="relative h-[200px] flex items-center justify-center">

          {data.media.map((item, index) => (
            <div
              key={index}
              className={`group absolute w-[150px] aspect-square rounded-md overflow-hidden border border-white/10 bg-black transition-all duration-300
              
              ${index === 0 ? "-rotate-6 -translate-x-32 z-10" : ""}
              ${index === 1 ? "rotate-0 z-20" : ""}
              ${index === 2 ? "rotate-6 translate-x-32 z-10" : ""}

              hover:z-50 hover:ring-2 hover:ring-purple-500/40
              `}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:opacity-0 transition"
              />

              {/* VIDEO */}
              <video
                src={item.video}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
            </div>
          ))}
        </div>

        {/* 🔥 PROJECT CARD (same width) */}
        <div className="bg-white/5 border border-white/10 rounded-md p-5 space-y-4">

          <h3 className="text-white text-lg font-semibold">
            {data.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {data.description}
          </p>

          {/* 🔥 TECH STACK ICONS */}
          <div className="flex gap-3 text-xl text-purple-400">
            {data.tech.map((t, i) => (
              <div key={i} className="p-2 bg-white/10 rounded-md">
                {techIcons[t]}
              </div>
            ))}
          </div>

          {/* 🔥 BUTTONS */}
          <div className="flex gap-3 pt-2">
            <a
              href={data.github}
              className="flex items-center gap-2 text-sm border border-white/20 px-4 py-2 rounded-md hover:bg-white/10"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href={data.live}
              className="flex items-center gap-2 text-sm bg-purple-500 px-4 py-2 rounded-md text-white"
            >
              <FiExternalLink /> Live
            </a>
          </div>

        </div>
      </div>
    );
  };

  return (
    <DocsTemplate
      title="Layered Media"

      preview={<Preview />}

      installCode={`npm install react-icons`}

      usageCode={`import ProjectMediaLayered from "./ProjectMediaLayered";

const data = {
  title: "Project",
  description: "Description",
  tech: ["react", "node", "db"],
  media: [
    { image: "/img.jpg", video: "/video.mp4" },
  ],
};

export default function App() {
  return <ProjectMediaLayered data={data} />;
}`}

      componentCode={`import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const techIcons = {
  react: <FaReact />,
  node: <FaNodeJs />,
  db: <FaDatabase />,
};

export default function ProjectMediaLayered({ data }) {
  return (
    <div className="max-w-md mx-auto space-y-6">

      <div className="relative h-[200px] flex items-center justify-center">
        {data.media.map((item, index) => (
          <div
            key={index}
            className={\`group absolute w-[120px] aspect-square rounded-md overflow-hidden border

            \${index === 0 ? "-rotate-6 -translate-x-32 z-10" : ""}
            \${index === 1 ? "rotate-0 z-20" : ""}
            \${index === 2 ? "rotate-6 translate-x-32 z-10" : ""}

            hover:z-50 hover:ring-2 hover:ring-purple-500/40\`}
          >
            <img src={item.image} className="w-full h-full object-cover group-hover:opacity-0 transition" />

            <video
              src={item.video}
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>

      {/* PROJECT CARD (same width) */}
        <div className="bg-white/5 border border-white/10 rounded-md p-5 space-y-4">

          <h3 className="text-white text-lg font-semibold">
            {data.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {data.description}
          </p>

          {/* TECH STACK ICONS */}
          <div className="flex gap-3 text-xl text-purple-400">
            {data.tech.map((t, i) => (
              <div key={i} className="p-2 bg-white/10 rounded-md">
                {techIcons[t]}
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 pt-2">
            <a
              href={data.github}
              className="flex items-center gap-2 text-sm border border-white/20 px-4 py-2 rounded-md hover:bg-white/10"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href={data.live}
              className="flex items-center gap-2 text-sm bg-purple-500 px-4 py-2 rounded-md text-white"
            >
              <FiExternalLink /> Live
            </a>
          </div>

        </div>
      </div>
  );
}`}
    />
  );
}