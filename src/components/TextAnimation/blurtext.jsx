import React from "react";

export default function BlurText() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Blur Text</h1>

      <div className="border border-white/10 rounded-xl p-10 text-center">
        <h2 className="text-5xl font-semibold blur-sm hover:blur-0 transition">
          Isn't this so cool?!
        </h2>
      </div>
    </>
  );
}