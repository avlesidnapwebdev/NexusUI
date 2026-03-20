import React from "react";
import Navbar from "../components/layout/navbar";

export default function Templates() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold">Templates Page</h1>
      </div>
    </div>
  );
}