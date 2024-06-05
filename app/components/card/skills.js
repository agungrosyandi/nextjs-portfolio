import React from "react";
import Link from "next/link";
import { GraphicDesignVideo } from "./video";
import { poppinsFontRegular400 } from "@/app/lib/font";

const SkillsSections = () => {
  return (
    <div className="flex flex-col justify-center tabletMinWidth:flex-row desktopMinWidth:flex-row">
      <div className="flex-1 relative desktopMinWidth:border-l-4 desktopMinWidth:border-b-4 border-stone-300">
        <GraphicDesignVideo />
      </div>
      <div className="flex-1 px-5 pb-10 tabletMinWidth:pb-5 tabletMinWidth:flex tabletMinWidth:flex-col tabletMinWidth:justify-center">
        <h1
          className={`font-DrukBoldTrial text-4xl uppercase laptopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
        >
          Graphic Design
        </h1>
        <p className="py-5 font-MonaSansLight text-sm font-bold laptopMinWidth:text-base">
          Tools: Illustrator, Photoshop
        </p>
        <p
          className={`${poppinsFontRegular400.className} pb-5 pr-3 text-xs laptopMinWidth:text-sm laptopMinWidth:pb-10 fullHdMinWidth:text-xl`}
        >
          Make design with positive and negative space perspective, and mixed
          with gradient color, image costum font and so on. The output will
          looks minimalist and beautiful.
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
