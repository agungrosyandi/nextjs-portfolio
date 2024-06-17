import React from "react";
import Link from "next/link";
import { roboto } from "@/app/lib/font";
import { GraphicDesignVideo } from "./video";

const SkillsSections = () => {
  return (
    <div className="flex flex-col justify-center tabletMinWidth:flex-row desktopMinWidth:flex-row">
      <div className="flex-1 relative">
        <GraphicDesignVideo />
      </div>
      <div className="flex-1 px-5 pb-10 tabletMinWidth:py-5 tabletMinWidth:flex tabletMinWidth:flex-col tabletMinWidth:justify-center desktopMinWidth:pl-20">
        <h1
          className={`font-DrukMediumTrial text-4xl laptopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
        >
          Graphic Design
        </h1>
        <p className="py-3 text-xs font-bold laptopMinWidth:text-sm">
          Tools: Illustrator, Photoshop
        </p>
        <p
          className={`${roboto.className} pb-5 pr-3 text-xs laptopMinWidth:text-sm fullHdMinWidth:text-lg`}
        >
          Make design with positive and negative space perspective, and mixed
          with gradient color, image costum font and so on. The output will
          looks minimalist and beautiful.
        </p>
        <div className="">
          <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 capitalize">
            <Link href="/showchase">
              <p className="text-xs fullHdMinWidth:text-sm">More Detail</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSections;
