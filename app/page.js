"use client";

import NavbarSections from "./components/Navbar";
import HomeNavbarSections from "./components/Home";
import AboutSections from "./components/About";
import PortfolioSections from "./components/Portfolio";
import ClosingSections from "./components/Closing";

// main app --------------------------------------------------------------------------

export default function Home() {
  return (
    <main className="bg-white">
      <NavbarSections />
      <HomeNavbarSections />
      <AboutSections />
      <PortfolioSections />
      <ClosingSections />
    </main>
  );
}
