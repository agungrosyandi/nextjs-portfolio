import React from "react";

import {
  VideoCamping1,
  VideoCamping2,
  VideoMusicanTrumpet,
  VideoAquarium1,
  VideoAquarium2,
  VideoScooter1,
  VideoDeepsea,
} from "./VideoAssets";

// font import ----------------------------------------------------

import { Poppins } from "@next/font/google";

const poppinsFontRegular400 = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

// main component ----------------------------------------------------

const Vector = () => {
  return (
    <section id="vector">
      <div className="relative text-stone-100 flex flex-col flex-1 justify-center items-center w-full px-10 pt-20 pb-5 tabletMinWidth:px-10 tabletMinWidth:pt-32 tabletMinWidth:pb-10 fullHdMinWidth:px-32">
        <div className="relative flex-1">
          <h1
            className={`font-DrukBoldTrial text-6xl pt-4 tabletMinWidth:text-7xl fullHdMinWidth:text-8xl`}
          >
            Graphic & Motion Design
          </h1>
          <p
            className={`${poppinsFontRegular400.className} text-xs pt-5 pb-5 border-b border-gray-600 tabletMinWidth:text-base fullHdMinWidth:text-xl`}
          >
            Using Adobe Illustrator as an primary tools, basically illustrator
            is tools for the create 2D assets. So with Illustrator, i can create
            2D object from scratch. Then with the assets which i create from the
            illustrator, i can used them for social media content, motion
            graphic content, or for web material if necessary, depend on
            situation.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-flow-row-dense gap-2 py-5 tabletMinWidth:py-10 laptopMinWidth:gap-3 laptopMinWidth:grid-cols-4 desktopMinWidth:grid-cols-6">
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-3 desktopMinWidth:col-span-4">
            <VideoScooter1 />
          </div>
          <div className="hidden flex-1 col-span-2 laptopMinWidth:block laptopMinWidth:col-span-1 desktopMinWidth:col-span-2">
            <VideoMusicanTrumpet />
          </div>
          <div className=" flex-1 col-span-2 laptopMinWidth:col-span-2 desktopMinWidth:col-span-3">
            <VideoCamping2 />
          </div>
          <div className=" flex-1 col-span-2 laptopMinWidth:col-span-2 desktopMinWidth:col-span-3">
            <VideoCamping1 />
          </div>
          <div className=" flex-1 col-span-2 laptopMinWidth:hidden">
            <VideoAquarium2 />
          </div>
          <div className=" flex-1 col-span-1 laptopMinWidth:col-span-1 desktopMinWidth:col-span-2">
            <VideoAquarium1 />
          </div>
          <div className=" flex-1 col-span-1 laptopMinWidth:col-span-3 desktopMinWidth:col-span-4">
            <VideoDeepsea />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vector;
