"use client";

import NavbarPosterSections from "./Navbar&Poster";
import VectorSections from "./Vector";
import MotionSections from "./Motion";

// main component --------------------------------------------------

export default function Showchase() {
  return (
    <main className="bg-white">
      <NavbarPosterSections />
      <VectorSections />
      <MotionSections />
    </main>
  );
}
