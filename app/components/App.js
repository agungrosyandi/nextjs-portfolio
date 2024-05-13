import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// font google import ----------------------------------------------------

import { Poppins, Roboto } from '@next/font/google';

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

// video import -------------------------------------------------------------------

const VideoHomeBackground = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/agung guitar komposisi.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const GraphicDesignVideo = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/graphic design agung.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const WebDevelopmentVideo = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require('../../public/video/web agung design.mp4')}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

// main component --------------------------------------------------

const Home = () => {
  return (
    <>
      <section id="home" className="section-style-home p-5">
        <div className="relative text-stone-800 mt-5 rounded-[20px] tabletMinWidth:mt-10">
          <div className="grid grid-cols-2 grid-flow-row gap-1 py-5 desktopMinWidth:px-28">
            {/* sections Home ------------------------------------------------  */}

            <div className="bg-stone-100 shadow-xl p-4 my-5 rounded-xl flex-1 col-span-2 laptopMinWidth:col-span-2 laptopMinWidth:px-0">
              <div className="flex flex-col justify-center pb-10 laptopMinWidth:flex-row laptopMinWidth:px-5">
                <div className="flex-1 py-5 laptopMinWidth:text-start fullHdMinWidth:py-20">
                  <p className="font-MonaSansLightNarrow text-base tabletMinWidth:text-3xl fullHdMinWidth:text-5xl">
                    Hi, My Name is
                  </p>
                  <div
                    className={`${robotoFont.className} uppercase py-2 flex flex-col text-5xl tabletMinWidth:text-7xl desktopMinWidth:text-7xl desktopMinWidth:py-3 fullHdMinWidth:text-9xl fullHdMinWidth:py-5`}
                  >
                    <h1 className="">Agung Rosyandi</h1>
                  </div>
                  <p
                    className={`${poppinsFontRegular400.className} text-xs py-3 tabletMinWidth:text-base laptopMinWidth:w-[70%] fullHdMinWidth:w-[90%] fullHdMinWidth:text-lg`}
                  >
                    I build graphic design, minimalist landing page, and motion
                    graphic. Accessible, inclusive products for social media and
                    the web
                  </p>
                </div>
                <div className="relative flex-1 fullHdMinWidth:p-20">
                  <VideoHomeBackground />
                </div>
              </div>
            </div>

            {/* sections About me ------------------------------------------------  */}

            <div className="bg-stone-100 shadow-xl px-5 py-10 my-5 rounded-xl col-span-2">
              <div className="flex flex-col justify-center">
                <div className="">
                  <h6
                    className={`${robotoFont.className} text-4xl uppercase pb-5 tabletMinWidth:text-6xl laptopMinWidth:px-0 fullHdMinWidth:text-7xl fullHdMinWidth:pb-10`}
                  >
                    About me
                  </h6>
                  <p
                    className={`${poppinsFontRegular400.className} font-MonaSansUltraLight pr-3 text-xs tabletMinWidth:text-base fullHdMinWidth:text-lg`}
                  >
                    Graphic and Web design based on Bandung West Java Indonesia.
                    Currently im proficient with productivity soft-skills. such
                    a Adobe Creative Suits and the Front-end Web development.
                  </p>
                </div>
              </div>
            </div>

            {/* sections graphicdesign  ------------------------------------------------  */}

            <div className="bg-stone-100 shadow-xl p-4 my-5 rounded-xl col-span-2 laptopMinWidth:col-span-1">
              <div className="flex flex-col justify-center py-10">
                <div className="flex-1 relative pb-5 fullHdMinWidth:pb-10">
                  <GraphicDesignVideo />
                </div>
                <div className="flex-1">
                  <h6
                    className={`${robotoFont.className} text-3xl uppercase tabletMinWidth:text-6xl laptopMinWidth:text-4xl fullHdMinWidth:text-6xl`}
                  >
                    Graphic Design
                  </h6>
                  <p className="py-5 font-MonaSansLight text-sm font-bold tabletMinWidth:text-lg laptopMinWidth:text-base">
                    Tools: Adobe Illustrator, Photoshop
                  </p>
                  <p
                    className={`${poppinsFontRegular400.className} pb-5 pr-3 text-xs tabletMinWidth:text-base laptopMinWidth:pb-10 fullHdMinWidth:text-lg`}
                  >
                    Make design with positive and negative space perspective,
                    and mixed with gradient color, image costum font and so on.
                    The output will looks minimalist.
                  </p>
                  <div className="">
                    <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
                      <Link rel="preload" href="../showchase">
                        <p className="text-xs tabletMinWidth:text-base">
                          More Detail
                        </p>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* sections webdevelopment  ------------------------------------------------  */}

            <div className="bg-stone-100 shadow-xl p-4 my-5 rounded-xl col-span-2 laptopMinWidth:col-span-1">
              <div className="flex flex-col justify-center py-10">
                <div className="flex-1 relative pb-5 fullHdMinWidth:pb-10">
                  <WebDevelopmentVideo />
                </div>
                <div className="flex-1">
                  <h6
                    className={`${robotoFont.className} text-3xl uppercase tabletMinWidth:text-6xl laptopMinWidth:text-4xl fullHdMinWidth:text-6xl`}
                  >
                    Web Development
                  </h6>
                  <p className="py-5 font-MonaSansLight text-sm font-bold tabletMinWidth:text-lg laptopMinWidth:text-base">
                    Tools: HTML, CSS, Javascript
                  </p>
                  <p
                    className={`${poppinsFontRegular400.className} pb-5 pr-3 text-xs tabletMinWidth:text-base laptopMinWidth:pb-10 fullHdMinWidth:text-lg`}
                  >
                    In the era Digitalization 4.0, graphic and video content
                    stil not enough to make your content special and unique, so
                    build your content into the web development.
                  </p>
                  <div className="">
                    <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
                      <Link rel="preload" href="../webshowcase">
                        <p className="text-xs tabletMinWidth:text-base">
                          More Detail
                        </p>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* section closing ------------------------------------------------ */}

            <div className="bg-stone-100 shadow-xl p-4 my-5 rounded-xl col-span-2 desktopMinWidth:col-span-2">
              <div className="relative flex flex-col justify-center px-2 py-10 tabletMinWidth:px-5">
                <div className="">
                  <p
                    className={`font-MonaSansLight text-lg tabletMinWidth:text-3xl laptopMinWidth:text-2xl`}
                  >
                    Interesting isn't ? :)
                  </p>
                  <div
                    className={`${robotoFont.className} text-5xl py-5 uppercase tabletMinWidth:text-6xl tabletMinWidth:py-7`}
                  >
                    <h1>Lets Working Together</h1>
                  </div>
                  <p
                    className={`${poppinsFontRegular400.className} pb-5 text-xs tabletMinWidth:text-base tabletMinWidth:pb-7`}
                  >
                    Dont hestitate to contact me if you need my service
                  </p>
                  <div className="relative tableteMinWidth:py-10">
                    <Link href="mailto:agungrosyandi@gmail.com">
                      <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
                        Say Hello
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
