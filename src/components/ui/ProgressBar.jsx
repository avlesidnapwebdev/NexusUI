import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProgressBar({ containerRef }) {
  const progressFillRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fill = progressFillRef.current;

    if (!containerRef?.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
      onUpdate: (self) => {
        const progress = self.progress * 100;

        gsap.set(fill, {
          width: `${progress}%`,
        });
      },
    });

    return () => trigger.kill();
  }, [containerRef]);

  return (
    <div className="absolute top-0 left-0 w-full h-[4px] z-50">
      <div
        ref={progressFillRef}
        className="h-full"
        style={{
          width: "0%",
          background: "linear-gradient(to right, #a855f7, #7e22ce)",
        }}
      />
    </div>
  );
}