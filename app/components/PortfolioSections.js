import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsBook } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";

import vector from "../../public/img/illustrator 3.jpg";
import poster from "../../public/img/pic 5.jpg";

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
        playsinline
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

const PortfolioSections = () => {
  return (
    <section className="relative w-screen min-h-screen">
      <div className="relative w-full h-full">
        <div className="relative flex-1 flex flex-col items-center text-center p-10">
          <h3
            className={`${cinzelFont.className} text-5xl tabletMinWidth:text-7xl fullHdMinWidth:text-8xl`}
          >
            My Area of Expertise
          </h3>
          <p
            className={`${montserratParagraph.className} text-sm pt-8 px-5 tabletMinWidth:text-lg tabletMinWidth:px-10 desktopMinWidth:px-20 fullHdMinWidth:text-2xl`}
          >
            I can create material content from scratch, including poster style,
            vector, motion graphic, explainer video, and the landing page for
            increased reputation of your brand through creative, minimalist and
            beautiful style. So click icon or pic below for more details.
          </p>
          <div className="flex justify-center items-center py-10">
            <div className="mx-3">
              <a
                href="https://online.fliphtml5.com/znosl/klcs/"
                target="_blank"
              >
                <BsBook
                  className="w-7 h-7 tabletMinWidth:w-9 tabletMinWidth:h-9"
                  size={100}
                />
              </a>
            </div>

            <div className="mx-3">
              <a
                href="https://online.fliphtml5.com/znosl/qlfc/"
                target="_blank"
              >
                <BsBook
                  className="w-7 h-7 tabletMinWidth:w-9 tabletMinWidth:h-9"
                  size={100}
                />
              </a>
            </div>

            <div className="mx-3">
              <a
                href="https://drive.google.com/uc?export=download&id=1tQF2nMUxJEunM8w8b1-O-SiOh0ZwVVKX"
                target="_blank"
              >
                <FiDownload
                  className="w-7 h-7 tabletMinWidth:w-9 tabletMinWidth:h-9"
                  size={100}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 py-10 justify-center items-center tabletMinWidth:flex-wrap tabletMinWidth:flex-row laptopMinWidth:px-20">
          {/* poster ------------------------------  */}

          <div className="group relative overflow-hidden flex-1 basis-1/3 hover:shadow-xl hover:shadow-black/30 transition-shadow">
            <Link href="/showchase">
              <Image
                className="group-hover:rotate-3 group-hover:scale-125 transition-transform"
                src={poster}
                alt="poster"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute text-white  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
                <h1
                  className={`${cinzelFont400.className} text-3xl font-bold laptopMinWidth:text-4xl desktopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
                >
                  Retro sytle & Poster Design
                </h1>
                <p className="text-xs italic py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 laptopMinWidth:text-sm fullHdMinWidth:text-lg">
                  Used the photoshop and also raw material asset from the
                  internet, make design with positive and negatif space
                  perspective and mixed with gradient color, image costum font
                  and so on, the output will looks beautiful and also minimalist
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize laptopMinWidth:text-base desktopMinWidth:text-lg">
                  Explore
                </button>
              </div>
            </Link>
          </div>

          {/* vector ------------------------------  */}

          <div className="group relative overflow-hidden flex-1 basis-1/3 hover:shadow-xl hover:shadow-black/30 transition-shadow ">
            <Link href="/showchase">
              <Image
                className="group-hover:rotate-3 group-hover:scale-125 transition-transform"
                src={vector}
                alt="vector"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute text-white  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
                <h1
                  className={`${cinzelFont400.className} text-3xl font-bold laptopMinWidth:text-4xl desktopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
                >
                  Illustration & Vector Design
                </h1>
                <p className="text-xs italic py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 laptopMinWidth:text-sm fullHdMinWidth:text-lg">
                  Used the Adobe Illustrator and also custom illustration
                  technique from shape layers and modified raw vector from the
                  internet, make character and object with 2D style. that will
                  make you content look unique, interesting and fun for audience
                  to see
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize laptopMinWidth:text-base desktopMinWidth:text-lg">
                  Explore
                </button>
              </div>
            </Link>
          </div>

          {/* motion graphic ------------------------------  */}

          <div className="group relative overflow-hidden flex-1 basis-1/3 cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            <Link href="/showchase">
              <VideoMotionGraphic
                className="group-hover:rotate-3 group-hover:scale-125 transition-transform"
                alt="motiongraphic"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute text-white  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
                <h1
                  className={`${cinzelFont400.className} text-3xl font-bold laptopMinWidth:text-4xl desktopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
                >
                  Motion & Explainer Video
                </h1>
                <p className="text-xs italic py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 laptopMinWidth:text-sm fullHdMinWidth:text-lg">
                  Used raw material output from photoshop, illustrator and
                  premierre pro such a pixel, vector and cinematic material,
                  make distinct content with motion graphic style to get more
                  audience and incerease engagment rate on social media
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize laptopMinWidth:text-base desktopMinWidth:text-lg">
                  Explore
                </button>
              </div>
            </Link>
          </div>

          {/* landing page ------------------------------  */}

          <div className="group relative overflow-hidden flex-1 basis-1/3 cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            <Link href="./showchase">
              <VideoNarasiHistorian
                className="group-hover:rotate-3 group-hover:scale-125 transition-transform"
                alt="narasihistorian"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute text-white  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
                <h1
                  className={`${cinzelFont400.className} text-3xl font-bold laptopMinWidth:text-4xl desktopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
                >
                  Landing Page & Front-End Web
                </h1>
                <p className="text-xs italic py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 laptopMinWidth:text-sm fullHdMinWidth:text-lg">
                  In the era Digitalization 4.0, graphic and video content stil
                  not enough to make your content special and unique, so build
                  your content to the web development, make your brand look more
                  profesional.
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize laptopMinWidth:text-base desktopMinWidth:text-lg">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSections;
