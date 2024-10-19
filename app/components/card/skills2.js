import { WebDevelopmentVideo } from "./video";

import NarasiHistorian from "../../webshowcase/webshowcase-components/NarasiHistorian";
import AntaValley from "../../webshowcase/webshowcase-components/AntaValley.jsx";
import FirstPortfolio from "../../webshowcase/webshowcase-components/FirstPortfolio.jsx";
import KhairaSkincare from "../../webshowcase/webshowcase-components/KhairaSkincare";
import SkillsContainerTitle from "./SkillsContainerTitle";

const Skills2Sections = () => {
  return (
    <section className="relative pt-10 pb-20 grid gap-5 grid-cols-4 tabletMinWidth:gap-10">
      <div className="col-span-4 desktopMinWidth:col-span-2">
        <WebDevelopmentVideo />
      </div>
      <div className="col-span-4 desktopMinWidth:col-span-2 desktopMinWidth:flex desktopMinWidth:justify-center">
        <SkillsContainerTitle
          title=" UI / UX Web Design"
          tools="Tools: Figma, HTML, CSS, Javascript"
          paragraph="Build design concept from the scratch with Figma or Adobe Software.
            Convert design concept to programming in HTML CSS Javascript.
            Then deploy and publish to become the interactive landing page or
            web app."
        />
      </div>

      <div className="col-span-4">
        <div className="flex gap-5 flex-wrap justify-center text-xs font-bold tabletMinWidth:text-base desktopMinWidth:text-xl">
          <p>Figma</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>ReactJS</p>
          <p>NextJS</p>
        </div>
      </div>

      <div className="col-span-4 tabletMinWidth:col-span-2">
        <NarasiHistorian />
      </div>

      <div className="col-span-4 tabletMinWidth:col-span-2">
        <FirstPortfolio />
      </div>

      <div className="col-span-4 tabletMinWidth:col-span-2">
        <AntaValley />
      </div>

      <div className="col-span-4 tabletMinWidth:col-span-2">
        <KhairaSkincare />
      </div>
    </section>
  );
};

export default Skills2Sections;
