"use client";

import NavbarSections from "./components/Navbar";
import AppSections from "./components/App";

// main app --------------------------------------------------------------------------

export default function Home() {
  return (
    <main className="bg-white">
      <NavbarSections />
      <AppSections />
    </main>
  );
}
