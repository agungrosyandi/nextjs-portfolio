"use client";

import AppSections from "./components/App";
import Navbar from "./components/Navbar";

// main app --------------------------------------------------------------------------

export default function Home() {
  return (
    <main className="bg-[#FFFAE6]">
      <Navbar />
      <AppSections />
    </main>
  );
}
