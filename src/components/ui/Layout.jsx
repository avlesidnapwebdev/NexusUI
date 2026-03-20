import React from "react";
import Header from "../layout/ComponentHeader";
import Sidebar from "../layout/sidebar";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col bg-[#000000] text-white">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto px-6 py-10 flex justify-center">
          <div className="w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
