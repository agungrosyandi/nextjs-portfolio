import React from "react";
import Image from "next/image";

// image import ----------------------------------------------------

import characterVector from "../../public/aset vector/character-animation.jpg";
import dogVector from "../../public/aset vector/agung-illustrator-portfolio-01-web-legacy.jpg";
import dog2Vector from "../../public/aset vector/agung-illustrator-portfolio-02-web-legacy.jpg";
import catRockVector from "../../public/aset vector/agung-illustrator-portfolio-06-web-legacy.jpg";
import catVector from "../../public/aset vector/agung-illustrator-portfolio-05-web-legacy.jpg";

// main component ----------------------------------------------------

const Vector = () => {
  return (
    <section id="vector" className="section-without-minheight">
      <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-10 pt-20 pb-5 tabletMinWidth:px-10 tabletMinWidth:pt-32 tabletMinWidth:pb-10 laptopMinWidth:px-20">
        <div className="relative flex-1">
          <h1
            className={`font-MonaSansUltraLighNarrow text-5xl pt-4 tabletMinWidth:text-7xl`}
          >
            Vector Design
          </h1>
          <p
            className={`font-MonaSansUltraLight text-xs pt-5 pr-5 pb-5 border-b border-gray-600 tabletMinWidth:text-base laptopMinWidth:text-lg`}
          >
            Create raw 2D character from scratch and take inspiration from the
            internet such a pinterest. Then, combine the character asset with
            pallete colour as background and typography optimatilization.
          </p>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-1 py-5 border-b border-gray-600 tabletMinWidth:py-10">
          <div className="flex-1 col-span-4 lap laptopMinWidth:hidden">
            <Image
              src={characterVector}
              alt="characterVector"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image
              src={dogVector}
              alt="dogVector"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image
              src={catVector}
              alt="dog2Vector"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image
              src={catRockVector}
              alt="catRockVector"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className=" flex-1 col-span-2 laptopMinWidth:col-span-1">
            <Image
              src={dog2Vector}
              alt="catVector"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vector;
