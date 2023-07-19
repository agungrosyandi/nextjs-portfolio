"use client";

import NavbarSections from "../components/Navbar";
import ResumeSections from "./Resume";

export default function Resume() {
  return (
    <main className="bg-white">
      <NavbarSections />
      <ResumeSections />
    </main>
  );
}
