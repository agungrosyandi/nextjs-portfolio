import React from "react";
import Link from "next/link";
import { poppinsFontRegular400, roboto } from "@/app/lib/font";

const ClosingSections = () => {
  return (
    <div className="relative flex flex-col justify-center px-2 py-10 tabletMinWidth:px-5 tabletMinWidth:text-center">
      <p
        className={`${poppinsFontRegular400.className} text-sm laptopMinWidth:text-base`}
      >
        Interesting isn't ? :)
      </p>
      <div
        className={`font-DrukMediumTrial py-3 text-4xl tabletMinWidth:text-5xl laptopMinWidth:text-6xl fullHdMinWidth:text-7xl`}
      >
        <h1>Lets Working Together</h1>
      </div>
      <p
        className={`${roboto.className} pb-3 text-xs laptopMinWidth:text-sm fullHdMinWidth:text-lg`}
      >
        Dont hestitate to contact me if you need my service
      </p>
      <div className="">
        <Link href="mailto:agungrosyandi@gmail.com">
          <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 capitalize">
            <p className="text-xs fullHdMinWidth:text-sm">Say Hello</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClosingSections;
