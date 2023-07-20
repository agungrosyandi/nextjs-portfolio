import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const cinzelFont400 = Cinzel({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

// video import ----------------------------------------------------

const VideoGif = () => {
  return (
    <>
      <video
        width={1000}
        height={1000}
        src={require("../../public/video/final3.mp4")}
        autoPlay
        loop
        muted
        controls
        playsInline
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoMotionGraphic = () => {
  return (
    <>
      <video
        width={1000}
        height={1000}
        src={require("../../public/video/simpleaccounting.mp4")}
        autoPlay
        loop
        muted
        controls
        playsInline
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoNarasiHistorian = () => {
  return (
    <>
      <video
        width={1000}
        height={1000}
        src={require("../../public/video/narasihistorian.mp4")}
        autoPlay
        loop
        muted
        controls
        playsinline
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

// main component ----------------------------------------------------

const Motion = () => {
  return (
    <section className="section-without-minheight">
      <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 py-20 tabletMinWidth:px-10 tabletMinWidth:py-32 laptopMinWidth:px-20">
        <div className="relative flex-1 text-center">
          <h1
            className={`${cinzelFont.className} text-[4rem] leading-none pt-4 tabletMinWidth:text-[6rem]`}
          >
            Motion Graphic
          </h1>
          <p
            className={`${montserratParagraph.className} text-xs p-5 border-b border-gray-600 tabletMinWidth:text-lg laptopMinWidth:border-0`}
          >
            Make high quality video for digital content
          </p>
        </div>
        <div className="overflow-hidden w-full h-full grid grid-cols-4 grid-flow-row gap-1 py-5 tabletMinWidth:py-10 laptopMinWidth:grid-cols-3 laptopMinWidth:border-t laptopMinWidth:border-gray-600 ">
          <div className="relative col-span-2 laptopMinWidth:col-span-1 ">
            <VideoGif alt="motiongraphic" />
          </div>
          <div className="relative col-span-2 laptopMinWidth:col-span-1 ">
            <VideoMotionGraphic alt="motiongraphic " />
          </div>
          <div className="relative col-span-4 laptopMinWidth:col-span-1 ">
            <VideoNarasiHistorian alt="narasihistorian" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motion;
