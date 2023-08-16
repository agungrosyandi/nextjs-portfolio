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
        <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-10 pt-5 pb-5 tabletMinWidth:px-10 tabletMinWidth:pt-10 tabletMinWidth:pb-10 laptopMinWidth:px-20">
          <div className="relative flex-1">
            <h1
              className={`font-MonaSansUltraLighNarrow text-5xl pt-4 tabletMinWidth:text-7xl`}
            >
              Pixel Design
            </h1>
            <p
              className={`font-MonaSansUltraLight text-xs pt-5 pr-5 pb-5 border-b border-gray-600 tabletMinWidth:text-base laptopMinWidth:text-lg`}
            >
              Create layout with Retro characteristic and combination gradient
              colour in the background. After that, cropping raw asset from the
              internet and mix with typography optimatilization. That's makes
              the output clean, simple and easy for people to read.
            </p>
          </div>
          <div className="grid grid-cols-4 grid-flow-row gap-1 py-5 border-b border-gray-600 tabletMinWidth:py-10 laptopMinWidth:grid-cols-3">
            <div className="flex-1 col-span-4 laptopMinWidth:hidden">
              <Image
                src={brainStroming}
                alt="brainStroming"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
            <div className="flex-1 col-span-4 tabletMinWidth:col-span-2 laptopMinWidth:col-span-1">
              <Image
                src={letsHunting}
                alt="letsHunting"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
            <div className="flex-1 col-span-2 tabletMinWidth:col-span-2 laptopMinWidth:col-span-1">
              <Image
                src={barberShop}
                alt="comfortZone"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
            <div className="flex-1 col-span-2 tabletMinWidth:col-span-4 laptopMinWidth:col-span-1">
              <Image
                src={comfortZone}
                alt="barberShop"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Poster;
