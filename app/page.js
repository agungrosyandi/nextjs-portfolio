"use client";

import NavbarSections from "./components/Navbar";
import AppSections from "./components/App";

// main app --------------------------------------------------------------------------

export default function Home() {
  return (
    <main className="bg-gray-100">
      <NavbarSections />
      <AppSections />
    </main>
  );
}
