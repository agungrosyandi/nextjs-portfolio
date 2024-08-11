import { WebDevelopmentVideo } from "./video";

import NarasiHistorian from "../../webshowcase/webshowcase-components/NarasiHistorian";
import AntaValley from "../../webshowcase/webshowcase-components/AntaValley.jsx";
import FirstPortfolio from "../../webshowcase/webshowcase-components/FirstPortfolio.jsx";
import SkillsContainerTitle from "./SkillsContainerTitle";

const Skills2Sections = () => {
  return (
    <section className="relative gap-2 flex flex-col justify-center items-center py-5 desktopMinWidth:flex-row-reverse">
      <div className="flex-1 w-full">
        <WebDevelopmentVideo />
      </div>
      <div className="flex-1 gap-3 flex flex-col desktopMinWidth:gap-5">
        <SkillsContainerTitle
          title=" UI / UX Web Design"
          tools="Tools: Figma, HTML, CSS, Javascript"
          paragraph="Build design concept from the scratch with Figma or Adobe Software.
            Convert design concept to programming in HTML CSS Javascript.
            Then deploy and publish to become the interactive landing page or
            web app."
        />

        <div className="gap-5 flex flex-col desktopMinWidth:flex-row">
          <NarasiHistorian />
          <AntaValley />
          <FirstPortfolio />
        </div>
      </div>
    </section>
  );
};

export default Skills2Sections;
