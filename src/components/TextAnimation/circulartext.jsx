// src/components/ui/CircularTextDocs.jsx

import { useEffect, useRef } from "react";
import DocsTemplate from "../ui/DocsTemplate";

export default function CircularTextDocs() {
  const CircularText3D = ({
    text = "3D REVOLVE • ILLUSTRATOR TUTORIAL • ",
  }) => {
    const containerRef = useRef(null);

    useEffect(() => {
      let frame;
      let angle = 0;

      const animate = () => {
        angle += 0.5;

        if (containerRef.current) {
          containerRef.current.style.transform = `
            perspective(1200px)
            rotateX(-10deg)
            rotate(${angle}deg)
          `;
        }

        frame = requestAnimationFrame(animate);
      };

      animate();
      return () => cancelAnimationFrame(frame);
    }, []);

    // Split text into characters
    const chars = text.repeat(3).split("");
    const total = chars.length;
    const radius = 180;

    return (
      <div className="flex items-center justify-center h-[350px]">
        <div
          ref={containerRef}
          className="relative"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {chars.map((char, i) => {
            const angle = (360 / total) * i;

            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 text-white font-bold"
                style={{
                  transform: `
                    rotateY(${angle}deg)
                    translateZ(${radius}px)
                  `,
                  transformOrigin: "center",
                  fontSize: "28px",
                  letterSpacing: "2px",
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <DocsTemplate
      title="3D Revolve Circular Text"
      preview={
        <div className="bg-black w-full p-10 rounded-xl flex items-center justify-center">
          <CircularText3D />
        </div>
      }
      installCode={`// No installation required (Pure CSS 3D + Tailwind)`}
      usageCode={`import CircularText3D from "./CircularText3D";

export default function App() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <CircularText3D text="YOUR TEXT • HERE • " />
    </div>
  );
}`}
      componentCode={`import { useEffect, useRef } from "react";

export default function CircularText3D({
  text = "3D REVOLVE • ILLUSTRATOR TUTORIAL • ",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let frame;
    let angle = 0;

    const animate = () => {
      angle += 0.5;

      if (containerRef.current) {
        containerRef.current.style.transform = \`
          perspective(1000px)
          rotateX(70deg)
          rotate(\${angle}deg)
        \`;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const chars = text.repeat(3).split("");
  const total = chars.length;
  const radius = 160;

  return (
    <div className="flex items-center justify-center h-[350px]">
      <div
        ref={containerRef}
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {chars.map((char, i) => {
          const angle = (360 / total) * i;

          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 text-white font-bold"
              style={{
                transform: \`
                  rotateY(\${angle}deg)
                  translateZ(\${radius}px)
                \`,
                transformOrigin: "center",
                fontSize: "28px",
                letterSpacing: "2px",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}`}
    />
  );
}
