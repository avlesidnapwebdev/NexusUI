import React, { useState } from "react";
import ComponentHeader from "../layout/ComponentHeader";
import Sidebar from "../layout/sidebar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-[#000000] text-white">
      <ComponentHeader setOpen={setSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto scrollbar-hide px-6 py-10 flex justify-center">
          <div className="w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
