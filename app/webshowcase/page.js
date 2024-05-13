'use client';

import Navbar from '../components/Navbar';
import WebDevelopmentSections from './LandingPage';

// main component --------------------------------------------------

export default function Showchase() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <WebDevelopmentSections />
    </main>
  );
}
