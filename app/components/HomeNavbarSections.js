import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// font import ----------------------------------------------------

import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";

// icons import ----------------------------------------------------

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// image background home import ----------------------------------------------------

import vectorCharacterHome from "../../public/character for react portfolio-02.png";

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

// main component --------------------------------------------------

const HomeNavbarSections = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* navbar ------------------------------ */}

      <nav
        className={`${cinzelFont400.className} fixed flex justify-between items-center w-screen z-10 px-5 py-5 tabletMinWidth:px-10 laptopMinWidth:px-20 `}
      >
        <h1 className="text-2xl laptopMinWidth:text-3xl">
          <Link href="/">AR</Link>
        </h1>
        <ul className="items-center text-lg hidden tabletMinWidth:flex tabletMinWidth:border-b tabletMinWidth:border-gray-600 laptopMinWidth:text-2xl">
          <li className="pr-5">
            <Link href="/resume">Resume</Link>
          </li>
          <li className="pr-5">
            <Link href="/showchase">Showchase</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* burger menu ------------------------------------------------- */}

        <div onClick={handleNav} className="block tabletMinWidth:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-logoNavbar p-5">AGUNG</h1>

          <ul className="text-lg p-4 uppercase">
            <li className="p-5 border-b border-gray-600">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="p-5 border-b border-gray-600">
              <Link href="/showchase">Showchase</Link>
            </li>
            <li className="p-5">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* home ------------------------------ */}

      <section className="relative w-screen min-h-screen">
        <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 py-20 tabletMinWidth:px-20 tabletMinWidth:py-32 laptopMinWidth:flex-row laptopMinWidth:px-20 ">
          <div className="relative flex-1 text-center laptopMinWidth:text-start">
            <p
              className={`${cinzelFont400.className} text-lg tabletMinWidth:text-2xl fullHdMinWidth:text-3xl`}
            >
              Hi, My Name is
            </p>
            <h1
              className={`${cinzelFont.className} text-[4rem] leading-none pt-4 tabletMinWidth:text-[6rem] desktopMinWidth:text-[7rem] fullHdMinWidth:text-[10rem] fullHdMinWidth:pr-10 `}
            >
              Agung Rosyandi
            </h1>
            <h4
              className={`${cinzelFont400.className} text-2xl pt-5 tabletMinWidth:text-3xl fullHdMinWidth:text-4xl`}
            >
              Design, Code, Video
            </h4>
            <p
              className={`${montserratParagraph.className} text-xs p-5 border-b border-gray-600 tabletMinWidth:text-lg tabletMinWidth:p-10 laptopMinWidth:p-0 laptopMinWidth:py-5 laptopMinWidth:border-0 laptopMinWidth:pr-[8rem] desktopMinWidth:pr-[18rem] fullHdMinWidth:pr-[30rem]`}
            >
              I build graphic design, minimalist landing page, motion graphic or
              explainer video. Accessible, inclusive products for social media
              and the web
            </p>
          </div>
          <div className="relative overflow-hidden rounded-full bg-gradient-to-b from-stone-500 w-72 h-72 mt-5 tabletMinWidth:w-96 tabletMinWidth:h-96 laptopMinWidth:rounded-none desktopMinWidth:h-[30rem] fullHdMinWidth:w-[30rem] fullHdMinWidth:h-[40rem]">
            <Image
              className="object-top"
              src={vectorCharacterHome}
              alt="Picture of the home"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeNavbarSections;
