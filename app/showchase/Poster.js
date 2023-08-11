import React from "react";
import Image from "next/image";

// image background home import ----------------------------------------------------

import brainStroming from "../../public/aset poster/bg-poster.jpg";
import letsHunting from "../../public/aset poster/pic-1.jpg";
import comfortZone from "../../public/aset poster/pic-2.jpg";
import barberShop from "../../public/aset poster/pic-3.jpg";

// main component ----------------------------------------------------

const Poster = () => {
  return (
    <>
      <section id="poster" className="section-without-minheight">
        <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 pt-5 pb-5 tabletMinWidth:px-10 tabletMinWidth:pt-10 tabletMinWidth:pb-10 laptopMinWidth:px-20">
          <div className="relative flex-1">
            <h1
              className={`font-MonaSansUltraLighNarrow text-6xl pt-4 tabletMinWidth:text-7xl laptopMinWidth:text-8xl fullHdMinWidth:text-9xl`}
            >
              Pixel Design
            </h1>
            <p
              className={`font-MonaSansUltraLight text-xs pt-5 pr-5 pb-5 border-b border-gray-600 tabletMinWidth:text-base laptopMinWidth:text-lg fullHdMinWidth:text-2xl`}
            >
              Create layout with Retro characteristic and combination gradient
              colour in the background. After that, cropping raw asset from the
              internet and mix with typography optimatilization. That's makes
              the output clean, simple and easy for people to read.
            </p>
          </div>
          <div className="overflow-hidden w-full h-full grid grid-cols-4 grid-flow-row gap-1 py-5 border-b border-gray-600 tabletMinWidth:py-10">
            <div className="relative w-full h-[12rem] col-span-4 tabletMinWidth:h-[25rem] tabletMinWidth:col-span-4 laptopMinWidth:h-[35rem] laptopMinWidth:col-span-2 fullHdMinWidth:h-[40rem]">
              <Image
                src={brainStroming}
                alt="brainStroming"
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative w-full h-[20rem] col-span-4 tabletMinWidth:col-span-2 tabletMinWidth:h-[25rem] laptopMinWidth:h-[35rem] laptopMinWidth:col-span-2 fullHdMinWidth:h-[40rem]">
              <Image
                src={letsHunting}
                alt="letsHunting"
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative w-full h-[11rem] col-span-2 tabletMinWidth:col-span-2 tabletMinWidth:h-[25rem] laptopMinWidth:h-[35rem] laptopMinWidth:col-span-2 fullHdMinWidth:h-[40rem]">
              <Image
                src={barberShop}
                alt="comfortZone"
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative w-full h-[11rem] col-span-2 tabletMinWidth:h-[40rem] tabletMinWidth:col-span-4 laptopMinWidth:h-[35rem] laptopMinWidth:col-span-2 fullHdMinWidth:h-[40rem]">
              <Image
                src={comfortZone}
                alt="barberShop"
                fill
                quality={100}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Poster;
