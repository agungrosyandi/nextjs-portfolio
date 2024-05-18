"use client";

import Navbar from "../components/Navbar";
import WebDevelopmentSections from "./LandingPage";

// main component --------------------------------------------------

export default function Showchase() {
  return (
    <main className="bg-stone-800">
      <Navbar />
      <WebDevelopmentSections />
    </main>
  );
}
