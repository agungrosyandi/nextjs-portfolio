"use client";

import AppSections from "./components/App";
import Navbar from "./components/Navbar";

// main app --------------------------------------------------------------------------

export default function Home() {
  return (
    <main className="bg-stone-800">
      <Navbar />
      <AppSections />
    </main>
  );
}
