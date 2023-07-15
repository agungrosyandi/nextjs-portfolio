"use client";

import HomeNavbarSections from "./components/HomeNavbarSections";
import AboutSections from "./components/About";
import PortfolioSections from "./components/PortfolioSections";
import ClosingSections from "./components/Closing";

// main app --------------------------------------------------------------------------

export default function Home() {
  return (
    <main className="bg-white">
      <HomeNavbarSections />
      <AboutSections />
      <PortfolioSections />
      <ClosingSections />
    </main>
  );
}
