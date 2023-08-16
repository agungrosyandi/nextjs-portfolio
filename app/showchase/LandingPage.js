import React from "react";
import Image from "next/image";
import Link from "next/link";

// image import ----------------------------------------------------

import mockup1 from "../../public/uxdesign assets/TL-ResponsiveMockup-legacy-2.jpg";
import mockup3 from "../../public/uxdesign assets/desktop cover narasihistorian mock up.jpg";
import mockup4 from "../../public/uxdesign assets/tab mobile cover narasihistorian mock up.jpg";

// main component ----------------------------------------------------

const Landingpage = () => {
  return (
    <section id="landingpage" className="section-without-minheight">
      <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-10 pt-5 pb-5 tabletMinWidth:px-10 tabletMinWidth:pb-10 tabletMinWidth:pt-10 laptopMinWidth:px-20">
        <div className="relative flex-1">
          <h1
            className={`font-MonaSansUltraLighNarrow text-5xl pt-4 tabletMinWidth:text-7xl`}
          >
            UI/UX Web Design
          </h1>
          <p
            className={`font-MonaSansUltraLight text-xs pt-5 pr-5 pb-5 border-b border-gray-600 tabletMinWidth:text-base laptopMinWidth:text-lg`}
          >
            To create interactive website, regardless web app or just landing
            page, you need a specifics tools. In my case, i’m using figma for
            raw structure and visual design, including wireframe, pattern, and
            navigate structure. Then for the next step, i’m using HTML CSS and
            javascript for programming design. So here a few example protoype i
            working recently.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-1 py-5 border-b border-gray-600 tabletMinWidth:py-10">
          <div className="flex-1 col-span-2 laptopMinWidth:hidden">
            <Image
              src={mockup1}
              alt="mockup1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="flex-1 col-span-2 tabletMinWidth:col-span-1 laptopMinWidth:col-span-1">
            <Image
              src={mockup3}
              alt="mockup3"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="flex-1 col-span-2 tabletMinWidth:col-span-1 laptopMinWidth:col-span-1">
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
            className={`font-MonaSansUltraLighNarrow text-4xl pt-4 tabletMinWidth:text-5xl tabletMinWidth:pt-10 laptopMinWidth:text-6xl fullHdMinWidth:text-7xl`}
          >
            About Narasihistorian
          </h1>
          <p
            className={`font-MonaSansUltraLight text-xs pt-5 pr-5 pb-5 tabletMinWidth:text-base tabletMinWidth:pb-10 laptopMinWidth:text-lg`}
          >
            Narasihistorian is history content blog, create by owner who
            graduate in international relations degree and have passion about
            history, especially on global context, He trying to share his
            passion about history with interactive aproach and visual pleasing
            with high quallity video content and web through article. <br />{" "}
            <br />
            <Link href="https://narasihistorian.netlify.app/" target="_blank">
              <span className="font-bold border-b border-gray-600 ">
                Narasihistorian web
              </span>
            </Link>
            <br /> <br />
            <Link
              href="https://agungrosyandi.github.io/mystory/html/uxdesign.html"
              target="_blank"
            >
              <span className="font-bold border-b border-gray-600">
                Narasihistorian design process
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
