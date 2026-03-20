import React from "react";
import Header from "../layout/ComponentHeader";
import Sidebar from "../layout/sidebar";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col bg-[#05010f] text-white">

      <Header />

      <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        <main className="flex-1 p-10 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}