import React from "react";
import Image from "next/image";

// font import ----------------------------------------------------

import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";

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

const cinzelFont400 = Cinzel({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

// image background home import ----------------------------------------------------

import brainStroming from "../../public/aset poster/bg-poster.jpg";
import adventure from "../../public/aset poster/pic-6.jpg";
import letsHunting from "../../public/aset poster/pic-1.jpg";
import comfortZone from "../../public/aset poster/pic-2.jpg";
import barberShop from "../../public/aset poster/pic-3.jpg";
import cosmetic from "../../public/aset poster/pic-4.jpg";
import drinkBeverage from "../../public/aset poster/pic-5.jpg";

// main component ----------------------------------------------------

const Poster = () => {
  return (
    <>
      <section className="relative w-screen min-h-screen">
        <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 py-20 tabletMinWidth:px-10 tabletMinWidth:py-32 laptopMinWidth:px-20">
          <div className="relative flex-1 text-center">
            <h1
              className={`${cinzelFont.className} text-[4rem] leading-none pt-4 tabletMinWidth:text-[6rem]`}
            >
              Pixel Design
            </h1>
            <p
              className={`${montserratParagraph.className} text-xs p-5 border-b border-gray-600 tabletMinWidth:text-lg laptopMinWidth:border-0`}
            >
              Retro and vintage style with minimalist and simple design
            </p>
          </div>
          <div className="overflow-hidden w-full h-full grid grid-cols-4 grid-flow-row gap-1 py-5 tabletMinWidth:py-10 laptopMinWidth:border-t laptopMinWidth:border-gray-600">
            <div className="relative w-full h-[15rem] col-span-4 tabletMinWidth:h-[25rem] tabletMinWidth:col-span-4 laptopMinWidth:h-[35rem] laptopMinWidth:col-span-4 fullHdMinWidth:h-[50rem]">
              <Image
                src={brainStroming}
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="relative w-full h-[15rem] col-span-2 tabletMinWidth:h-[25rem] tabletMinWidth:col-span-2 laptopMinWidth:h-[35rem] laptopMinWidth:col-span-2 fullHdMinWidth:h-[55rem]">
              <Image
                src={adventure}
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="relative w-full h-[15rem] col-span-2 tabletMinWidth:col-span-2 tabletMinWidth:h-[25rem] laptopMinWidth:h-[35rem] laptopMinWidth:col-span-2 fullHdMinWidth:h-[55rem]">
              <Image
                src={drinkBeverage}
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="relative w-full h-[15rem] col-span-2 tabletMinWidth:col-span-1 laptopMinWidth:h-[20rem] laptopMinWidth:col-span-1 fullHdMinWidth:h-[30rem]">
              <Image
                src={cosmetic}
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="relative w-full h-[15rem] col-span-2 tabletMinWidth:col-span-1 laptopMinWidth:h-[20rem] laptopMinWidth:col-span-1 fullHdMinWidth:h-[30rem]">
              <Image
                src={letsHunting}
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="relative w-full h-[15rem] col-span-2 tabletMinWidth:col-span-2 laptopMinWidth:h-[20rem] laptopMinWidth:col-span-1 fullHdMinWidth:h-[30rem]">
              <Image
                src={comfortZone}
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="relative w-full h-[15rem] col-span-2 tabletMinWidth:h-[40rem] tabletMinWidth:col-span-4 laptopMinWidth:h-[20rem] laptopMinWidth:col-span-1 fullHdMinWidth:h-[30rem]">
              <Image
                src={barberShop}
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Poster;
