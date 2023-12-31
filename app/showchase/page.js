'use client';

import PosterSections from './Poster';
import VectorSections from './Vector';
import MotionSections from './Motion';
import LandingPageSections from './LandingPage';
import Navbar from '../components/Navbar';

// main component --------------------------------------------------

export default function Showchase() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <VectorSections />
      <PosterSections />
      <MotionSections />
      <LandingPageSections />
    </main>
  );
}
