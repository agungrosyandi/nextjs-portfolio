import { GraphicDesignVideo } from "./video";

import {
  Fish11000px,
  Fish21000px,
  Scooter21000px,
  Pic1,
  Pic2,
  Pic3,
} from "../../showchase/VideoAssets";
import SkillsContainerTitle from "./SkillsContainerTitle";

const SkillsSections = () => {
  return (
    <section className="relative pt-10 pb-20 grid gap-5 grid-cols-6 tabletMinWidth:gap-10">
      <div className="col-span-6 desktopMinWidth:col-span-3">
        <GraphicDesignVideo />
      </div>
      <div className="col-span-6 desktopMinWidth:col-span-3 desktopMinWidth:flex desktopMinWidth:justify-center">
        <SkillsContainerTitle
          title="Graphic & Motion Design"
          tools="Tools: Illustrator, Photoshop, After Effect"
          paragraph=" Build Graphic and Motion design using Adobe Photoshop, Illustrator
            and After Effect as primary tool to create 2D Vector output from the
            scratch, then input 2D assets to After Effect to build and develop
            interactive 2D motion loop style to enhance my work. Including for
            social media content, digital design, motion design, or for the Web."
        />
      </div>

      <div className="col-span-6">
        <div className="flex gap-5 flex-wrap justify-center text-xs font-bold tabletMinWidth:text-base desktopMinWidth:text-xl">
          <p>Photoshop</p>
          <p>Illustrator</p>
          <p>After Effect</p>
        </div>
      </div>

      <div className="col-span-6 shadow-xl tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
        <Fish11000px />
      </div>

      <div className="col-span-6 shadow-xl tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
        <Fish21000px />
      </div>

      <div className="col-span-6 shadow-xl tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
        <Scooter21000px />
      </div>

      <div className="col-span-6 shadow-xl tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
        <Pic1 />
      </div>

      <div className="col-span-6 shadow-xl tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
        <Pic2 />
      </div>

      <div className="col-span-6 shadow-xl tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
        <Pic3 />
      </div>
    </section>
  );
};

export default SkillsSections;
