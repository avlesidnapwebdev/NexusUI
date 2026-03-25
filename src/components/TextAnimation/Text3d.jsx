// src/components/ui/GlassText3DDocs.jsx

import DocsTemplate from "../ui/DocsTemplate";
import { useRef } from "react";

export default function Text3D() {

  const Preview = () => {
    const ref = useRef(null);

    const handleMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      ref.current.style.setProperty("--rx", `${(y - 0.5) * 20}deg`);
      ref.current.style.setProperty("--ry", `${(x - 0.5) * -20}deg`);
      ref.current.style.setProperty("--x", `${x * 100}%`);
      ref.current.style.setProperty("--y", `${y * 100}%`);
    };

    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        className="h-[220px] flex items-center justify-center w-full bg-black rounded-xl perspective"
      >
        <h1 className="glass-3d text-5xl md:text-9xl font-bold">
          Glass
        </h1>
      </div>
    );
  };

  return (
    <DocsTemplate
      title="Text 3D - Perspective"

      preview={<Preview />}

      installCode={`// No installation required`}

      usageCode={`import GlassText3D from "./GlassText3D";

export default function App() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <GlassText3D text="Glass" />
    </div>
  );
}`}

      componentCode={`import { useRef } from "react";

export default function GlassText3D({ text }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    ref.current.style.setProperty("--rx", \`\${(y - 0.5) * 20}deg\`);
    ref.current.style.setProperty("--ry", \`\${(x - 0.5) * -20}deg\`);
  };

  return (
    <div ref={ref} onMouseMove={handleMove} className="perspective">
      <h1 className="glass-3d text-5xl font-bold">
        {text}
      </h1>
    </div>
  );
}
  
/* container perspective */
.perspective {
  perspective: 800px;
}

/* MAIN TEXT */
.glass-3d {
  position: relative;

  /* ✅ REAL glass gradient */
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(200, 200, 200, 0.6) 20%,
    rgba(255, 255, 255, 0.95) 40%,
    rgba(160, 160, 160, 0.5) 60%,
    rgba(255, 255, 255, 0.9) 80%
  );

  background-size: 300% auto;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shineMove 4s linear infinite;

  /* 3D tilt */
  transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));

  /* glass glow (important) */
  text-shadow:
    0 0 2px rgba(255, 255, 255, 0.8),
    0 0 6px rgba(255, 255, 255, 0.5),
    0 0 12px rgba(255, 255, 255, 0.3);

  /* depth tuning */
  filter: contrast(1.2) brightness(1.1);

  transition: transform 0.1s ease;
}

/* moving chrome shine */
@keyframes shineMove {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* MAIN REFLECTION (liquid effect) */
.glass-3d::before {
  content: "";
  position: absolute;
  inset: 0;

  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 00%,
    transparent 0%
  );

  mix-blend-mode: screen;
  opacity: 0.6;

  animation: glassFlow 3s linear infinite;
  pointer-events: none;
}



/* light hotspot (liquid depth) */
.glass-3d::after {
  content: "";
  position: absolute;
  inset: 0;

  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.4),
    transparent 0%
  );

  mix-blend-mode: overlay;
  pointer-events: none;
}

/* hover enhancement */
.glass-3d:hover {
  filter: brightness(1.25) contrast(1.2);
}


`}
    />
  );
}