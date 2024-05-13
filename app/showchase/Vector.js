import React from 'react';
import Image from 'next/image';
import { Poppins, Roboto } from '@next/font/google';

// image import ----------------------------------------------------

import dogVector from '../../public/aset vector/agung-illustrator-portfolio-01-web-legacy.jpg';
import catRockVector from '../../public/aset vector/agung-illustrator-portfolio-06-web-legacy.jpg';
import catVector from '../../public/aset vector/agung-illustrator-portfolio-05-web-legacy.jpg';

// font import ----------------------------------------------------

const poppinsFontRegular400 = Poppins({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400'],
});

const robotoFont = Roboto({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['700'],
});

// video assets import ----------------------------------------------------

const VideoCamping1 = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/camping web legacy.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoCamping2 = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/camping 2 web legacy.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoMusicanTrumpet = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/musician trumpet_1.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoAquarium1 = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/aquarium 2.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoAquarium2 = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/aquarium-.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoScooter1 = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/scooter delivery-_1.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoDeepsea = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl  object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/deepsea paralalex loop.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

// main component ----------------------------------------------------

const Vector = () => {
  return (
    <section id="vector">
      <div className="relative text-stone-800 flex flex-col flex-1 justify-center items-center w-full px-10 pt-20 pb-5 tabletMinWidth:px-10 tabletMinWidth:pt-32 tabletMinWidth:pb-10 laptopMinWidth:px-20 desktopMinWidth:px-32">
        <div className="relative flex-1">
          <h1
            className={`${robotoFont.className} text-2xl pt-4 tabletMinWidth:text-5xl fullHdMinWidth:text-7xl`}
          >
            Graphic & Motion Design
          </h1>
          <p
            className={`${poppinsFontRegular400.className} text-xs pt-5 pb-5 border-b border-gray-600 tabletMinWidth:text-base fullHdMinWidth:text-lg`}
          >
            Using Adobe Illustrator as an primary tools, basically illustrator
            is tools for the create 2D assets. So with Illustrator, i can create
            2D object from scratch. Then with the assets which i create from the
            illustrator, i can used them for social media content, motion
            graphic content, or for web material if necessary, depend on
            situation.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-flow-row-dense gap-2 py-5 tabletMinWidth:py-10 laptopMinWidth:gap-3 laptopMinWidth:grid-cols-4 desktopMinWidth:grid-cols-6">
          <div className="flex-1 col-span-2 laptopMinWidth:col-span-3 desktopMinWidth:col-span-4">
            <VideoScooter1 />
          </div>
          <div className="flex-1 col-span-1 laptopMinWidth:col-span-1 desktopMinWidth:col-span-2">
            <VideoMusicanTrumpet />
          </div>
          <div className="flex-1 col-span-1 laptopMinWidth:col-span-2">
            <div className="relative w-full h-full object-cover left-0 right-0 top-0 bottom-0">
              <Image
                className="rounded-[20px] shadow-xl"
                src={catVector}
                alt="dog2Vector"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex-1 col-span-1 laptopMinWidth:col-span-2">
            <div className="relative w-full h-full object-cover left-0 right-0 top-0 bottom-0">
              <Image
                className="rounded-[20px] shadow-xl"
                src={catRockVector}
                alt="catRockVector"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
          </div>
          <div className=" flex-1 col-span-1 laptopMinWidth:hidden desktopMinWidth:block desktopMinWidth:col-span-2">
            <div className="relative w-full h-full object-cover left-0 right-0 top-0 bottom-0">
              <Image
                className="rounded-[20px] shadow-xl"
                src={dogVector}
                alt="catVector"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
          </div>
          <div className=" flex-1 col-span-2 laptopMinWidth:col-span-2 desktopMinWidth:col-span-3">
            <VideoCamping2 />
          </div>
          <div className=" flex-1 col-span-2 laptopMinWidth:col-span-2 desktopMinWidth:col-span-3">
            <VideoCamping1 />
          </div>
          <div className=" flex-1 col-span-2 laptopMinWidth:hidden">
            <VideoAquarium2 />
          </div>
          <div className=" flex-1 col-span-1 laptopMinWidth:col-span-1 desktopMinWidth:col-span-2">
            <VideoAquarium1 />
          </div>
          <div className=" flex-1 col-span-1 laptopMinWidth:col-span-3 desktopMinWidth:col-span-4">
            <VideoDeepsea />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vector;
