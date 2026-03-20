import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Orb from "./Orb";
import { Link } from "react-router-dom";
export default function Hero() {
  const [hue, setHue] = useState(260);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");

      if (isDark) {
        setHue(260); // purple for dark mode
      } else {
        setHue(40); // warm glow for light mode
      }
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Orb */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Orb
            hoverIntensity={2}
            rotateOnHover={true}
            hue={hue}
            forceHoverState={false}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-snug">
            React Components
            <br />
            For Creative Developers
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-md">
            Highly customizable animated components that make
            <br />
            your React projects truly stand out.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <button className="px-4 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:scale-105 transition text-xs sm:text-base">
              <Link to="/components">Browse Components</Link>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
