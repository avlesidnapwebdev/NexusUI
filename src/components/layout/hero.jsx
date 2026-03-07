import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
export default function Hero() {
  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center text-center bg-[#05010f] overflow-hidden">
      <Navbar />
      {/* Background Gradient Shapes */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[120px] rounded-full top-[-200px] left-[-200px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-30 blur-[120px] rounded-full bottom-[-200px] right-[-200px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          React Components
          <br />
          For Creative Developers
        </h1>

        {/* Description */}
        <p className="text-gray-400 mt-6 text-xl w-full md:w-2/3 mx-auto lg:w-2/1">
          Highly customizable animated components that make your React projects
          truly stand out.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:scale-105 transition">
            Browse Components
          </button>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
