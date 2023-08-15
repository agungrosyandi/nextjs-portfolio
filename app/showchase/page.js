import PosterSections from './Poster';
import VectorSections from './Vector';
import MotionSections from './Motion';
import LandingPageSections from './LandingPage';

// main component --------------------------------------------------

export default function Showchase() {
  return (
    <main className="bg-gray-100">
      <VectorSections />
      <PosterSections />
      <MotionSections />
      <LandingPageSections />
    </main>
  );
}
