import React from "react";
import Image from "next/image";

// image background home import ----------------------------------------------------

import vectorCharacterHome from "../../public/aset vector/home vector.png";

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

// main component --------------------------------------------------

const Home = () => {
  return (
    <>
      <section id="home" className="section-style-home">
        <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 py-20 tabletMinWidth:px-20 tabletMinWidth:py-32 laptopMinWidth:flex-row laptopMinWidth:px-20 ">
          <div className="relative flex-1 text-center laptopMinWidth:text-start ">
            <p
              className={`${cinzelFont400.className} text-lg tabletMinWidth:text-2xl fullHdMinWidth:text-3xl`}
            >
              Hi, My Name isi
            </p>
            <h1
              className={`${cinzelFont.className} flex flex-col text-[3.5rem] leading-none pt-4 tabletMinWidth:text-[6rem] desktopMinWidth:text-[7rem] fullHdMinWidth:text-[8rem]`}
            >
              <span>Agung</span>

              <span>Rosyandi</span>
            </h1>
            <h4
              className={`${cinzelFont400.className} text-2xl pt-5 tabletMinWidth:text-3xl fullHdMinWidth:text-4xl`}
            >
              <span>Design,</span>
              <span>Code,</span>
              <span>Video</span>
            </h4>
            <p
              className={`${montserratParagraph.className} text-xs p-5 border-b border-gray-600 tabletMinWidth:text-lg tabletMinWidth:p-10 laptopMinWidth:p-0 laptopMinWidth:py-5 laptopMinWidth:border-0 laptopMinWidth:pr-[8rem] desktopMinWidth:pr-[15rem]`}
            >
              I build graphic design, minimalist landing page, motion graphic or
              explainer video. Accessible, inclusive products for social media
              and the web
            </p>
          </div>
          <div className="relative overflow-hidden rounded-full bg-gradient-to-b from-stone-500 w-72 h-72 mt-10 tabletMinWidth:w-96 tabletMinWidth:h-96 laptopMinWidth:rounded-none laptopMinWidth:h-[30rem] laptopMinWidth:w-[20rem] fullHdMinWidth:w-[34rem] fullHdMinWidth:h-[40rem]">
            <Image
              className="object-top"
              src={vectorCharacterHome}
              alt="Picture of the home"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
