import { poppinsFontRegular400, roboto } from "@/app/lib/font";
import { VideoHomeBackground, WebDevelopmentVideoAssets } from "./video";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import SkillsContainerTitle from "./SkillsContainerTitle";

import { GraphicDesignVideoAssets } from "./video";

export default function HomeSections() {
  return (
    <section className="relative grid gap-5 grid-cols-4 tabletMinWidth:gap-10">
      <div className="relative col-span-4 desktopMinWidth:flex desktopMinWidth:justify-center desktopMinWidth:col-span-2">
        <div className="flex-1 gap-4 flex flex-col justify-center items-center text-center desktopMinWidth:gap-5">
          <p
            className={`${poppinsFontRegular400.className} text-sm text-[#000000] tabletMinWidth:text-base`}
          >
            Hi, My Name is
          </p>

          <SkillsContainerTitle
            title="Agung Rosyandi"
            paragraph="Graphic and Web designer based in Bandung West Java Indonesia.
            Currently my strong focus on Web development especialy Front-end with
            combine my skills in Adobe Creative Suits to enhance my workflow.
            "
          />
        </div>
      </div>

      <div className="col-span-4 desktopMinWidth:col-span-2">
        <div className="relative flex-1 w-[100%]">
          <VideoHomeBackground />
        </div>
      </div>

      <div className="col-span-4">
        <SkillsContainerTitle
          title="About me"
          paragraph="Relatedness with the Graphic Design and encouragement of creativity and want learn something new mindset, I’ve started improve my soft-skills into The Web Development World especially Frond-End using HTML, CSS and Javascript as main stacks -- including their library and framework like an GSAP, ReactJS, NextJS and deploy them using Github and hosting using Vercel and Netlify. The result is, I can build design concept from the scratch, Convert the design concept to programming code, deploy & publish all of them to become functional, interactive and visual pleasing web. When design and engineering meet, things that look good but are also built well under the hood. Nowadays my main focus is UI/UX and Front-End Development with support by my basic in graphic design and combine them to enhance my workflow. It's not about ideas, it's about making ideas happen to create something wonderful.  "
        />
      </div>

      <div className="col-span-4 desktopMinWidth:col-start-1 desktopMinWidth:col-end-3">
        <WebDevelopmentVideoAssets />
      </div>

      <div className="col-span-4 desktopMinWidth:col-span-2 desktopMinWidth:col-start-1 desktopMinWidth:col-end-3 desktopMinWidth:row-start-4 desktopMinWidth:row-end-5">
        <div className="flex flex-col justify-center items-center gap-10">
          <SkillsContainerTitle
            title="UI/UX Web Design"
            paragraph="Build design concept from the scratch with Figma or Adobe Software. Convert design concept to programming in HTML CSS Javascript."
          />

          <div className="flex gap-3 px-5 py-2 bg-[#ffffff] text-[#000000] border border-stone-700 shadow-sm rounded-2xl drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] items-center text-xs tabletMinWidth:text-base desktopMinWidth:py-2  desktopMinWidth:text-xs fullHdMinWidth:text-sm">
            <Link rel="preload" href="/webshowcase">
              <p className="{`${roboto.className}">
                Explore my web design output
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-4 desktopMinWidth:col-start-3 desktopMinWidth:col-end-5">
        <GraphicDesignVideoAssets />
      </div>

      <div className="col-span-4 pb-20 desktopMinWidth:col-span-2 desktopMinWidth:flex desktopMinWidth:justify-center desktopMinWidth:row-start-4 desktopMinWidth:row-end-5">
        <div className="flex flex-col justify-center items-center gap-10">
          <SkillsContainerTitle
            title="Graphic Design"
            paragraph="Build Graphic and Motion design using Adobe Photoshop, Illustrator and After Effect as primary tool to create 2D Vector output from the scratch."
          />

          <div className="flex gap-3 px-5 py-2 bg-[#ffffff] text-[#000000] border border-stone-700 shadow-sm rounded-2xl drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] text-xs tabletMinWidth:text-base desktopMinWidth:py-2  desktopMinWidth:text-xs fullHdMinWidth:text-sm">
            <Link rel="preload" href="/showchase">
              <p className="{`${roboto.className}">
                Explore my digital design output
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-4">
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <p
            className={`${poppinsFontRegular400.className} text-sm text-[#000000] tabletMinWidth:text-base`}
          >
            Intersting isn't ? :)
          </p>

          <SkillsContainerTitle
            title="Let's Working Together"
            paragraph="Don't hestitate to contact me if you need my service"
          />

          <div className="flex gap-3 px-5 py-2 bg-[#ffffff] text-[#000000] border border-stone-700 shadow-sm rounded-2xl drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] items-center text-xs tabletMinWidth:text-base desktopMinWidth:py-2  desktopMinWidth:text-xs fullHdMinWidth:text-sm">
            <MdEmail size={20} />

            <Link rel="preload" href="mailto:agungrosyandi@gmail.com">
              <p className="{`${roboto.className}">Send me Email</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
