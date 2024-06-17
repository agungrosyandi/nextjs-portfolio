import React from "react";
import { VideoHomeBackground } from "./video";
import { poppinsFontRegular400 } from "@/app/lib/font";

const HomeSections = () => {
  return (
    <div className="flex flex-col justify-center tabletMinWidth:flex-row">
      <div className="flex-1 p-5 tabletMinWidth:flex tabletMinWidth:flex-col tabletMinWidth:justify-center laptopMinWidth:text-start desktopMinWidth:pb-32">
        <p className="font-MonaSansLightNarrow text-base tabletMinWidth:text-xl laptopMinWidth:text-2xl fullHdMinWidth:text-4xl">
          Hi, My Name is
        </p>
        <div
          className={`font-DrukBoldTrial uppercase py-2 flex flex-col text-5xl tabletMinWidth:text-5xl laptopMinWidth:text-7xl desktopMinWidth:py-3 fullHdMinWidth:text-8xl`}
        >
          <h1 className="">Johnny akun Rosyandi</h1>
        </div>
        <p
          className={`${poppinsFontRegular400.className} text-xs py-3 laptopMinWidth:w-[90%] laptopMinWidth:text-sm laptopMinWidth:pr-10 fullHdMinWidth:text-lg`}
        >
          I build graphic design, minimalist landing page, and motion graphic.
          Accessible, inclusive products for social media and the web
        </p>
      </div>
      <div className="relative flex-1 desktopMinWidth:border border-stone-700 desktopMinWidth:rounded-[50px] desktopMinWidth:shadow-xl">
        <VideoHomeBackground />
      </div>
    </div>
  );
};

export default HomeSections;
