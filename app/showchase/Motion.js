import React from "react";

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
        playsInline
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

// main component ----------------------------------------------------

const Motion = () => {
  return (
    <section id="motion" className="section-without-minheight">
      <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 pt-5 pb-5 tabletMinWidth:px-10 tabletMinWidth:pb-10 tabletMinWidth:pt-10 laptopMinWidth:px-20">
        <div className="relative flex-1">
          <h1
            className={`font-MonaSansUltraLighNarrow text-6xl pt-4 tabletMinWidth:text-7xl laptopMinWidth:text-8xl fullHdMinWidth:text-9xl`}
          >
            Motion Graphic
          </h1>
          <p
            className={`font-MonaSansUltraLight text-xs pt-5 pr-5 pb-5 border-b border-gray-600 tabletMinWidth:text-base laptopMinWidth:text-lg fullHdMinWidth:text-2xl`}
          >
            To make motion graphic content, I’m always using After Effect with
            raw material asset i create from Premierre pro for cinemation,
            Illustrator for vector, and photoshop for pixel. Sometime if
            neccesary, depends on situations, i’m using 3rd party from plugin
            and also recreate assets from the bundle to save a time and make my
            work more faster.
          </p>
        </div>
        <div className="overflow-hidden w-full h-full grid grid-cols-4 grid-flow-row gap-1 py-5 border-b border-gray-600 tabletMinWidth:py-10 laptopMinWidth:grid-cols-3">
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
