"use client";

import PosterSections from "./Poster";
import VectorSections from "./Vector";
import MotionSections from "./Motion";
import LandingPageSections from "./LandingPage";
import ClosingSections from "./Closing";

// main component --------------------------------------------------

export default function Showchase() {
  return (
    <main className="bg-gray-100">
      <VectorSections />
      <PosterSections />
      <MotionSections />
      <LandingPageSections />
      <ClosingSections />
    </main>
  );
}
