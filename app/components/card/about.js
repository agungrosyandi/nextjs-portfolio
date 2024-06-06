import React from "react";
import { poppinsFontRegular400 } from "@/app/lib/font";

const AboutSections = () => {
  return (
    <div className="flex flex-col justify-center desktopMinWidth:items-center">
      <div className="">
        <h1
          className={`font-DrukBoldTrial text-5xl uppercase pb-5 laptopMinWidth:px-0 laptopMinWidth:text-6xl fullHdMinWidth:text-7xl`}
        >
          About me
        </h1>
        <p
          className={`${poppinsFontRegular400.className} font-MonaSansUltraLight pr-3 text-xs laptopMinWidth:text-sm fullHdMinWidth:text-lg`}
        >
          Graphic and Web design based on Bandung West Java Indonesia. Currently
          im proficient with productivity soft-skills. such a Adobe Creative
          Suits and the Front-end Web development.
        </p>
      </div>
    </div>
  );
};

export default AboutSections;
