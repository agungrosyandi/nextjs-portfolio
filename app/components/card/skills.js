import { GraphicDesignVideo } from "./video";

import {
  Fish11000px,
  Fish21000px,
  Scooter21000px,
} from "../../showchase/VideoAssets";
import SkillsContainerTitle from "./SkillsContainerTitle";

const SkillsSections = () => {
  return (
    <section className="relative gap-2 flex flex-col justify-center items-center py-5 desktopMinWidth:flex-row-reverse">
      <div className="flex-1 w-full">
        <GraphicDesignVideo />
      </div>
      <div className="flex-1 gap-3 flex flex-col desktopMinWidth:gap-5">
        <SkillsContainerTitle
          title="Graphic & Motion Design"
          tools="Tools: Illustrator, Photoshop, After Effect"
          paragraph=" Build Graphic and Motion design using Adobe Photoshop, Illustrator
            and After Effect as primary tool to create 2D Vector output from the
            scratch, then input 2D assets to After Effect to build and develop
            interactive 2D motion loop style to enhance my work. Including for
            social media content, digital design, motion design, or for the Web."
        />

        <div className="gap-5 flex flex-col desktopMinWidth:flex-row">
          <div className="border border-stone-700 p-3 w-[100%]">
            <Fish11000px />
          </div>

          <div className="border border-stone-700 p-3 w-[100%]">
            <Fish21000px />
          </div>

          <div className="border border-stone-700 p-3 w-[100%]">
            <Scooter21000px />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSections;
