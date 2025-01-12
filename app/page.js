import About from "../components/about-sections/about";
import HomeSections from "../components/home-sections/home";
import Showchase from "@/components/showchase-sections/showchase";

export default function Home() {
  return (
    <main className="relative w-full h-full flex flex-col gap-10 py-10">
      <HomeSections />
      <About />
      <Showchase />
    </main>
  );
}
