import SkillsContainerTitle from "@/app/components/card/SkillsContainerTitle";

import { DiPhotoshop, DiIllustrator, DiHtml5 } from "react-icons/di";
import { LiaHtml5 } from "react-icons/lia";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandAdobePhotoshop } from "react-icons/tb";

export default function SoftSkills() {
  return (
    <div className="relative col-span-4 ">
      <div className="flex justify-center items-center flex-col">
        <div className="flex gap-3">
          <DiPhotoshop size={30} />
          <DiIllustrator size={30} />
          <LiaHtml5 size={30} />
          <TbBrandCss3 size={30} />
          <RiJavascriptLine size={30} />
          <GrReactjs size={30} />
          <SiTailwindcss size={30} />
        </div>
      </div>
    </div>
  );
}
