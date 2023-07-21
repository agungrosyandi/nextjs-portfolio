import React from "react";
import Image from "next/image";

// font import ----------------------------------------------------

import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";

// font ----------------------------------------------------

const montserratParagraph = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const cinzelFont = Cinzel({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["500"],
});

// image import ----------------------------------------------------

import characterVector from "../../public/aset vector/character animation-01.jpg";
import dogVector from "../../public/aset vector/illustrator 1.jpg";
import dog2Vector from "../../public/aset vector/illustrator 2.jpg";
import catRockVector from "../../public/aset vector/illustrator 4.jpg";
import catVector from "../../public/aset vector/illustrator 3.jpg";

// main component ----------------------------------------------------

const Vector = () => {
  return (
    <section id="vector" className="section-without-minheight">
      <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 py-20 tabletMinWidth:px-10 tabletMinWidth:py-32 laptopMinWidth:px-20">
        <div className="relative flex-1 text-center">
          <h1
            className={`${cinzelFont.className} text-[4rem] leading-none pt-4 tabletMinWidth:text-[6rem]`}
          >
            Vector Design
          </h1>
          <p
            className={`${montserratParagraph.className} text-xs p-5 border-b border-gray-600 tabletMinWidth:text-lg laptopMinWidth:border-0`}
          >
            Character Illustration with 2D style
          </p>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-1 py-5 tabletMinWidth:py-10 laptopMinWidth:border-t laptopMinWidth:border-gray-600 ">
          <div className="flex-1 col-span-4 ">
            <Image src={characterVector} alt="characterVector" />
          </div>
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image src={dogVector} alt="dogVector" />
          </div>
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image src={dog2Vector} alt="dog2Vector" />
          </div>
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image src={catRockVector} alt="catRockVector" />
          </div>
          <div className=" flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image src={catVector} alt="catVector" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vector;
