import React from "react";
import Image from "next/image";
import Link from "next/link";
import { poppinsFontRegular400 } from "../lib/font";

// image import ----------------------------------------------------

import mockup1 from "../../public/uxdesign assets/TL-ResponsiveMockup-legacy-2.jpg";
import mockup3 from "../../public/uxdesign assets/desktop cover narasihistorian mock up.jpg";
import mockup4 from "../../public/uxdesign assets/tab mobile cover narasihistorian mock up.jpg";
import mockup5 from "../../public/uxdesign assets/TL-ResponsiveMockup.jpg";
import mockup6 from "../../public/uxdesign assets/template-mockup-mobile-web.jpg";
import mockup7 from "../../public/uxdesign assets/first-portpolio-agung.jpg";

// main component ----------------------------------------------------

const Landingpage = () => {
  return (
    <section id="relative flex flex-1 flex-col justify-center items-center">
      <div className="text-[#31363F] w-full px-5 py-10 desktopMinWidth:px-14 fullHdMinWidth:px-32">
        <div className="relative flex-1">
          <h1
            className={`font-DrukBoldTrial uppercase text-4xl pt-4 tabletMinWidth:text-5xl fullHdMinWidth:text-6xl`}
          >
            UI/UX Web Design
          </h1>
          <p
            className={`${poppinsFontRegular400.className} text-xs pt-5 tabletMinWidth:text-sm fullHdMinWidth:text-xl`}
          >
            To create interactive website, regardless web app or just landing
            page, you need a specifics tools. In my case, i’m using figma for
            raw structure and visual design, including wireframe, pattern, and
            navigate structure. Then for the next step, i’m using HTML CSS and
            javascript for programming design.
          </p>
        </div>

        {/* narasihistorian ------------------------------------------------ */}

        <div className="grid grid-cols-2 grid-flow-row gap-1 py-5 border-b border-gray-600 tabletMinWidth:py-10">
          <div className="flex-1 col-span-2 laptopMinWidth:hidden">
            <Image
              src={mockup1}
              alt="mockup1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="flex-1 col-span-2 tabletMinWidth:col-span-2 laptopMinWidth:col-span-1">
            <Image
              src={mockup3}
              alt="mockup3"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="flex-1 col-span-2 tabletMinWidth:col-span-2 laptopMinWidth:col-span-1">
            <Image
              src={mockup4}
              alt="mockup4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative flex-1">
          <h1
            className={`font-DrukBoldTrial uppercase text-4xl pt-4 tabletMinWidth:text-5xl fullHdMinWidth:text-6xl`}
          >
            Narasihistorian
          </h1>
          <h6
            className={`font-MonaSansLightNarrow text-sm pt-4 tabletMinWidth:text-xl fullHdMinWidth:text-3xl`}
          >
            Create by Next.js & TailwindCSS
          </h6>
          <p
            className={`${poppinsFontRegular400.className} text-xs pt-5 pb-5 border-b border-gray-600 tabletMinWidth:text-sm fullHdMinWidth:text-xl`}
          >
            Narasihistorian is history content blog, create by owner who
            graduate in international relations degree and have passion about
            history. He trying to share his passion about history with
            interactive aproach and visual pleasing with high quallity video
            content and web through article. <br /> <br />
            <Link href="https://narasihistorian.netlify.app/" target="_blank">
              <span className="font-bold border-b text-zinc-700 border-gray-600 ">
                Visit source
              </span>
            </Link>
            <br /> <br />
            <Link
              href="https://agungrosyandi.github.io/mystory/html/uxdesign.html"
              target="_blank"
            >
              <span className="font-bold border-b text-zinc-700 border-gray-600">
                Take a look at the design process
              </span>
            </Link>
          </p>
        </div>

        {/* antavalley ------------------------------------------------ */}

        <div className="grid grid-cols-2 grid-flow-row gap-1 py-5 border-b border-gray-600 tabletMinWidth:py-10">
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image
              src={mockup5}
              alt="mockup1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image
              src={mockup6}
              alt="mockup3"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative flex-1">
          <h1
            className={`font-DrukBoldTrial uppercase text-4xl pt-4 tabletMinWidth:text-5xl fullHdMinWidth:text-6xl`}
          >
            AntaValley
          </h1>
          <h6
            className={`font-MonaSansLightNarrow text-sm pt-4 tabletMinWidth:text-xl fullHdMinWidth:text-3xl`}
          >
            Create by HTML, CSS, javascript, and GSAP Scrolltriger
          </h6>
          <p
            className={`${poppinsFontRegular400.className} text-xs pt-5 pb-5 border-b border-gray-600 tabletMinWidth:text-sm fullHdMinWidth:text-xl`}
          >
            AntaValley is Resort Holding Landing Page, create by motion loop
            style based on 2D Assets. Its combine unique, interactive with
            visual pleasing website, so it can make good assessment for the user
            when they want to find information about resort on the internet.{" "}
            <br /> <br />
            <Link
              href="https://narasihistorian.github.io/prototype-landingpage//"
              target="_blank"
            >
              <span className="font-bold border-b text-zinc-700 border-gray-600 ">
                Visit source
              </span>
            </Link>
          </p>
        </div>

        {/* first portfolio web ------------------------------------------------ */}

        <div className="grid grid-cols-2 grid-flow-row gap-1 py-5 border-b border-gray-600 tabletMinWidth:py-10">
          <div className="flex-1 col-span-2 ">
            <Image
              src={mockup7}
              alt="mockup1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative flex-1">
          <h1
            className={`font-DrukBoldTrial uppercase text-4xl pt-4 tabletMinWidth:text-5xl fullHdMinWidth:text-6xl`}
          >
            Agung V1
          </h1>
          <h6
            className={`font-MonaSansLightNarrow text-sm pt-4 tabletMinWidth:text-xl fullHdMinWidth:text-3xl`}
          >
            Create by HTML, CSS, javascript, and GSAP ScrollSmoother
          </h6>
          <p
            className={`${poppinsFontRegular400.className} text-xs pt-5 pb-5 border-b border-gray-600 tabletMinWidth:text-sm fullHdMinWidth:text-xl`}
          >
            This is my first website. As a graphic design, i want to expand and
            improve my soft-skills. Because my basics on the design software and
            i'm also like computer system, I thought why don't I learn how to
            make a system and combine with my knowledge about design. So based
            on this motivation, make me plunge into the world of programming.{" "}
            <br /> <br />
            <Link
              href="https://agungrosyandi.github.io/mystory/"
              target="_blank"
            >
              <span className="font-bold border-b text-zinc-700 border-gray-600 ">
                Visit source
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
