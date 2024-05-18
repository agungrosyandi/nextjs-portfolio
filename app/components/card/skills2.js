import React from "react";
import Link from "next/link";
import { WebDevelopmentVideo } from "./video";

// font google import ----------------------------------------------------

import { Poppins } from "@next/font/google";

const poppinsFontRegular400 = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const Skills2Sections = () => {
  return (
    <div className="flex flex-col justify-center py-10 desktopMinWidth:items-center desktopMinWidth:text-center">
      <div className="flex-1 relative pb-10 fullHdMinWidth:pb-10">
        <WebDevelopmentVideo />
      </div>
      <div className="flex-1">
        <h1
          className={`font-DrukBoldTrial text-6xl uppercase tabletMinWidth:text-8xl laptopMinWidth:text-7xl desktopMinWidth:text-4xl fullHdMinWidth:text-5xl`}
        >
          Web Development
        </h1>
        <p className="py-5 font-MonaSansLight text-sm font-bold tabletMinWidth:text-lg laptopMinWidth:text-base">
          Tools: HTML, CSS, Javascript
        </p>
        <p
          className={`${poppinsFontRegular400.className} pb-5 pr-3 text-xs tabletMinWidth:text-base laptopMinWidth:pb-10 desktopMinWidth:hidden`}
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
