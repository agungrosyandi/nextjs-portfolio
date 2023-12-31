'use client';

import AppSections from './components/App';
import Navbar from './components/Navbar';

// main app --------------------------------------------------------------------------

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <AppSections />
    </main>
  );
}
