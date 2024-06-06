import React from "react";
import Link from "next/link";
import { poppinsFontRegular400 } from "@/app/lib/font";

const ClosingSections = () => {
  return (
    <div className="relative flex flex-col justify-center px-2 py-10 tabletMinWidth:px-5 desktopMinWidth:text-center">
      <div className="">
        <p className={`font-MonaSansLight text-lg laptopMinWidth:text-xl`}>
          Interesting isn't ? :)
        </p>
        <div
          className={`font-DrukBoldTrial text-5xl py-5 uppercase laptopMinWidth:text-7xl tabletMinWidth:py-7`}
        >
          <h1>Lets Working Together</h1>
        </div>
        <p
          className={`${poppinsFontRegular400.className} pb-5 text-xs tabletMinWidth:text-base tabletMinWidth:pb-7 desktopMinWidth:text-base`}
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
