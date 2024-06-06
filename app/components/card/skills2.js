import React from "react";
import Link from "next/link";
import { WebDevelopmentVideo } from "./video";
import { poppinsFontRegular400 } from "@/app/lib/font";

const Skills2Sections = () => {
  return (
    <div className="flex flex-col justify-center tabletMinWidth:flex-row desktopMinWidth:flex-row-reverse">
      <div className="flex-1 relative">
        <WebDevelopmentVideo />
      </div>
      <div className="flex-1 px-5 pb-10 tabletMinWidth:py-5 tabletMinWidth:flex tabletMinWidth:flex-col tabletMinWidth:justify-center desktopMinWidth:pl-20">
        <h1
          className={`font-DrukBoldTrial text-4xl uppercase laptopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
        >
          Web Development
        </h1>
        <p className="py-5 font-MonaSansLight text-sm font-bold laptopMinWidth:text-base">
          Tools: HTML, CSS, Javascript
        </p>
        <p
          className={`${poppinsFontRegular400.className} pb-5 pr-3 text-xs laptopMinWidth:text-sm laptopMinWidth:pb-10 fullHdMinWidth:text-lg`}
        >
          In the era Digitalization 4.0, graphic and video content stil not
          enough to make your content special and unique, so build your content
          into the web development.
        </p>
        <div className="">
          <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
            <Link rel="preload" href="../../webshowcase">
              <p className="text-xs tabletMinWidth:text-base">More Detail</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills2Sections;
