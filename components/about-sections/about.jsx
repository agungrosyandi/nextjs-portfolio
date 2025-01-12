import TitleDescription from "@/components/font-description-component/title-description";
import Description from "@/components/font-description-component/description";
import { Button } from "../ui/button";
import { AiOutlineFilePdf } from "react-icons/ai";
import QAAboutMe from "./q&a-about-me";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex w-full p-5 flex-col bg-[#ffffff] border-stone-700 shadow-sm rounded-2xl drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] gap-5 justify-start items-start text-start">
      <TitleDescription>About me</TitleDescription>
      <Description>
        Relatedness with the Graphic Design and encouragement of creativity and
        want learn something new mindset, Ive started improve my soft-skills
        into The Web Development World especially Frond-End The result is, I can
        build design concept from the scratch, Convert the design concept to
        programming code, deploy & publish all of them to become functional,
        interactive and visual pleasing web
      </Description>

      <QAAboutMe />

      <Description>
        When design and engineering meet, things that look good but are also
        built well under the hood. It's not about ideas, it's about making ideas
        happen to create something wonderful.
      </Description>

      <Button variant={"link"}>
        <AiOutlineFilePdf size={20} />
        <Link
          href={
            "https://drive.google.com/uc?export=download&id=1CIrk60njSE6n_0FJT69SBONGBwul1u7d"
          }
        >
          Download my resume
        </Link>
      </Button>
    </div>
  );
}
