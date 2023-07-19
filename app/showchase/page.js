"use client";

import NavbarSections from "../components/Navbar";
import PosterSections from "./Poster";
import VectorSections from "./Vector";
import MotionSections from "./Motion";

// main component --------------------------------------------------

export default function Showchase() {
  return (
    <main className="bg-white">
      <NavbarSections />
      <PosterSections />
      <VectorSections />
      <MotionSections />
    </main>
  );
}
