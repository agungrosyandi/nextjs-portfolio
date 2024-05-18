import React from "react";

// font google import ----------------------------------------------------

import { Poppins } from "@next/font/google";

const poppinsFontRegular400 = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const AboutSections = () => {
  return (
    <div className="flex flex-col justify-center desktopMinWidth:items-center desktopMinWidth:text-center">
      <div className="">
        <h1
          className={`font-DrukBoldTrial text-6xl uppercase pb-5 tabletMinWidth:text-8xl laptopMinWidth:px-0 desktopMinWidth:text-6xl fullHdMinWidth:text-8xl fullHdMinWidth:pb-10`}
        >
          About me
        </h1>
        <p
          className={`${poppinsFontRegular400.className} font-MonaSansUltraLight pr-3 text-xs tabletMinWidth:text-base`}
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
