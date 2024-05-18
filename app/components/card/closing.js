import React from "react";
import Link from "next/link";

// font google import ----------------------------------------------------

import { Poppins } from "@next/font/google";

const poppinsFontRegular400 = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const ClosingSections = () => {
  return (
    <div className="relative flex flex-col justify-center px-2 py-10 tabletMinWidth:px-5">
      <div className="">
        <p
          className={`font-MonaSansLight text-lg tabletMinWidth:text-3xl laptopMinWidth:text-2xl`}
        >
          Interesting isn't ? :)
        </p>
        <div
          className={`font-DrukBoldTrial text-6xl py-5 uppercase tabletMinWidth:text-8xl tabletMinWidth:py-7 desktopMinWidth:text-7xl fullHdMinWidth:text-8xl`}
        >
          <h1>Lets Working Together</h1>
        </div>
        <p
          className={`${poppinsFontRegular400.className} pb-5 text-xs tabletMinWidth:text-base tabletMinWidth:pb-7`}
        >
          Dont hestitate to contact me if you need my service
        </p>
        <div className="relative tableteMinWidth:py-10">
          <Link href="mailto:agungrosyandi@gmail.com">
            <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
              Say Hello
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClosingSections;
