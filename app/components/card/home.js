import React from "react";
import { VideoHomeBackground } from "./video";

// font google import ----------------------------------------------------

import { Poppins } from "@next/font/google";

const poppinsFontRegular400 = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const HomeSections = () => {
  return (
    <div className="flex flex-col justify-center pb-10 desktopMinWidth:px-5 laptopMinWidth:flex-row desktopMinWidth:flex-col">
      <div className="flex-1 py-5 laptopMinWidth:text-start fullHdMinWidth:py-20">
        <p className="font-MonaSansLightNarrow text-base tabletMinWidth:text-3xl laptopMinWidth:text-2xl fullHdMinWidth:text-4xl">
          Hi, My Name is
        </p>
        <div
          className={`font-DrukBoldTrial uppercase py-2 flex flex-col text-6xl tabletMinWidth:text-8xl desktopMinWidth:py-3 desktopMinWidth:text-7xl fullHdMinWidth:py-5 fullHdMinWidth:text-8xl`}
        >
          <h1 className="">Agung Rosyandi</h1>
        </div>
        <p
          className={`${poppinsFontRegular400.className} text-xs py-3 tabletMinWidth:text-base laptopMinWidth:w-[90%]`}
        >
          I build graphic design, minimalist landing page, and motion graphic.
          Accessible, inclusive products for social media and the web
        </p>
      </div>
      <div className="relative flex-1">
        <VideoHomeBackground />
      </div>
    </div>
  );
};

export default HomeSections;
