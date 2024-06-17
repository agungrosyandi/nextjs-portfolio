import NarasiHistorian from "./webshowcase-components/NarasiHistorian";
import AntaValley from "./webshowcase-components/AntaValley";
import FirstPortfolio from "./webshowcase-components/FirstPortfolio";

// main component --------------------------------------------------

export default function Showchase() {
  return (
    <main>
      <section id="w-full relative flex flex-1 flex-col justify-center items-center">
        <NarasiHistorian />
        <AntaValley />
        <FirstPortfolio />
      </section>
    </main>
  );
}
