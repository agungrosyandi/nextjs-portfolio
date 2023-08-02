import React from "react";
import Image from "next/image";

// image import ----------------------------------------------------

import characterVector from "../../public/aset vector/character-animation.jpg";
import dogVector from "../../public/aset vector/illustrator 1.jpg";
import dog2Vector from "../../public/aset vector/illustrator 2.jpg";
import catRockVector from "../../public/aset vector/illustrator 4.jpg";
import catVector from "../../public/aset vector/illustrator 3.jpg";

// main component ----------------------------------------------------

const Vector = () => {
  return (
    <section id="vector" className="section-without-minheight">
      <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 pt-5 pb-5 tabletMinWidth:px-10 tabletMinWidth:pt-20 tabletMinWidth:pb-10 laptopMinWidth:px-20">
        <div className="relative flex-1">
          <h1
            className={`font-MonaSansUltraLighNarrow text-6xl pt-4 tabletMinWidth:text-7xl laptopMinWidth:text-8xl fullHdMinWidth:text-9xl`}
          >
            Vector Design
          </h1>
          <p
            className={`font-MonaSansUltraLight text-xs pt-5 pr-5 pb-5 border-b border-gray-600 tabletMinWidth:text-base laptopMinWidth:text-lg fullHdMinWidth:text-2xl`}
          >
            Create raw 2D character from scratch and take inspiration from the
            internet such a pinterest. Then, i'm combine my character asset with
            pallete colour as background and typography optimatilization. make
            content output clean, cheerful and make audience happy from adorable
            characters .
          </p>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-1 py-5 border-b border-gray-600 tabletMinWidth:py-10">
          <div className="flex-1 col-span-4">
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
