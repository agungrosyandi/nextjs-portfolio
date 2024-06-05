import React from "react";
import { poppinsFontRegular400 } from "../lib/font";

import {
  VideoCamping1,
  VideoCamping2,
  VideoMusicanTrumpet,
  VideoAquarium1,
  VideoAquarium2,
  VideoScooter1,
  VideoDeepsea,
} from "./VideoAssets";

// main component ----------------------------------------------------

const Vector = () => {
  return (
    <section id="relative flex flex-col justify-center items-center">
      <div className=" text-[#31363F] w-full px-5 py-10 tabletMinWidth:px-10 desktopMinWidth:px-20 fullHdMinWidth:px-32">
        <div className="flex-1">
          <h1
            className={`font-DrukBoldTrial uppercase text-3xl pt-4 tabletMinWidth:text-5xl laptopMinWidth:text-6xl`}
          >
            Graphic & Motion Design
          </h1>
          <p
            className={`${poppinsFontRegular400.className} text-xs pt-5 tabletMinWidth:text-sm fullHdMinWidth:text-xl`}
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
