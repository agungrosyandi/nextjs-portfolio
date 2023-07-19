import React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, Power3 } from "gsap";

// icons import ----------------------------------------------------

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// font import ----------------------------------------------------

import { Cinzel } from "next/font/google";

const cinzelFont400 = Cinzel({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

// main component --------------------------------------------------

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav
        className={`${cinzelFont400.className} fixed flex justify-between items-center w-screen z-10 px-5 py-5 tabletMinWidth:px-10 laptopMinWidth:px-20 `}
      >
        <h1 className="text-2xl">
          <Link href="/">AR</Link>
        </h1>
        <ul className="items-center text-lg hidden tabletMinWidth:flex tabletMinWidth:py-2 tabletMinWidth:border-b tabletMinWidth:border-gray-600">
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

        <div onClick={handleNav} className="z-10 block tabletMinWidth:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500 z-20"
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
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-screen h-screen backdrop-blur-sm bg-white/30 ease-in-out duration-500 "
              : "fixed"
          }
        ></div>
      </nav>
    </>
  );
};

export default Navbar;
