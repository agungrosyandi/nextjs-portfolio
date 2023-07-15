import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// font import ----------------------------------------------------

import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";

// icons import ----------------------------------------------------

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

// image background home import ----------------------------------------------------

import characterResume from "../../public/aset vector/closing character gallery web-02.png";

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

// main component ----------------------------------------------------

const NavbarPoster = () => {
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

      {/* poster ------------------------------ */}

      <section className="relative w-screen min-h-screen">
        <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 py-20 tabletMinWidth:px-10 tabletMinWidth:py-32 laptopMinWidth:px-20 laptopMinWidth:flex-row-reverse laptopMinWidth:items-start">
          <div className="flex-1 text-center">
            <h1
              className={`${cinzelFont.className} text-[4rem] leading-none pt-4 tabletMinWidth:text-[6rem]`}
            >
              On Progress
            </h1>
            <p
              className={`${montserratParagraph.className} text-xs p-5 tabletMinWidth:text-lg tabletMinWidth:px-20`}
            >
              Sorry, my resume currently not available. Dont Worry will update
              soon, stay tuned. For temporary click icon below :)
            </p>
            <div className="flex justify-center items-center pb-5 border-b border-gray-600 laptopMinWidth:border-0">
              <Link
                href="https://online.fliphtml5.com/znosl/klcs/"
                target="_blank"
              >
                <BsBook
                  className="w-7 h-7 tabletMinWidth:w-9 tabletMinWidth:h-9"
                  size={100}
                />
              </Link>
            </div>
          </div>
          <div className="relative w-[25rem] h-[35rem] py-10 tabletMinWidth:w-[35rem] tabletMinWidth:h-[45rem] ">
            <Image
              className="object-top"
              src={characterResume}
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarPoster;
