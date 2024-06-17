import React from "react";
import { roboto } from "@/app/lib/font";

const AboutSections = () => {
  return (
    <div className="flex flex-col justify-center tabletMinWidth:text-center desktopMinWidth:text-start">
      <h1
        className={`font-DrukMediumTrial pb-3 text-4xl laptopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
      >
        About me
      </h1>
      <p
        className={`${roboto.className} text-xs tabletMinWidth:text-center tabletMinWidth:px-[15%] laptopMinWidth:text-sm fullHdMinWidth:text-lg desktopMinWidth:text-start desktopMinWidth:px-0 desktopMinWidth:pr-[30%]`}
      >
        Graphic and Web design based on Bandung West Java Indonesia. Currently
        im proficient with productivity soft-skills. such a Adobe Creative Suits
        and the Front-end Web development.
      </p>
    </div>
  );
};

export default AboutSections;
