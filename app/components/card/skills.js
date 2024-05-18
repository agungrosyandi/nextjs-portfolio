import React from "react";
import Link from "next/link";
import { GraphicDesignVideo } from "./video";

// font google import ----------------------------------------------------

import { Poppins } from "@next/font/google";

const poppinsFontRegular400 = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const SkillsSections = () => {
  return (
    <div className="flex flex-col justify-center py-10 desktopMinWidth:items-center desktopMinWidth:text-center">
      <div className="flex-1 relative pb-10 fullHdMinWidth:pb-10">
        <GraphicDesignVideo />
      </div>
      <div className="flex-1">
        <h1
          className={`font-DrukBoldTrial text-6xl uppercase tabletMinWidth:text-8xl laptopMinWidth:text-7xl desktopMinWidth:text-4xl fullHdMinWidth:text-5xl`}
        >
          Graphic Design
        </h1>
        <p className="py-5 font-MonaSansLight text-sm font-bold tabletMinWidth:text-lg laptopMinWidth:text-base">
          Tools: Illustrator, Photoshop
        </p>
        <p
          className={`${poppinsFontRegular400.className} pb-5 pr-3 text-xs tabletMinWidth:text-base laptopMinWidth:pb-10 desktopMinWidth:hidden`}
        >
          Make design with positive and negative space perspective, and mixed
          with gradient color, image costum font and so on. The output will
          looks minimalist.
        </p>
        <div className="">
          <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
            <Link rel="preload" href="../../showchase">
              <p className="text-xs tabletMinWidth:text-base">More Detail</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSections;
