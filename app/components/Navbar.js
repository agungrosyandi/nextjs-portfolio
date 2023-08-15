'use client';

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
// import { gsap, Power3 } from "gsap";

// icons import ----------------------------------------------------

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// font import ----------------------------------------------------

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400'],
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
        className={`${montserrat.className} fixed w-screen z-10 p-5 laptopMinWidth:px-10`}
      >
        <div className="bg-stone-100 w-full shadow-xl flex items-center justify-between py-2 px-5 rounded-[20px]">
          <h1 className="text-base laptopMinWidth:text-lg">
            <Link href="/">My Biography</Link>
          </h1>
          <ul className="items-center text-lg hidden tabletMinWidth:flex tabletMinWidth:py-2">
            <li className="pr-5">
              <Link
                href="https://online.fliphtml5.com/znosl/xddq/"
                target="_blank"
              >
                Resume
              </Link>
            </li>
            <li className="">
              <Link href="/showchase">Showchase</Link>
            </li>
          </ul>

          {/* burger menu ------------------------------------------------- */}

          <div
            onClick={handleNav}
            className="z-10  block tabletMinWidth:hidden"
          >
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <div
            className={
              !nav
                ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500 z-20'
                : 'fixed left-[-100%]'
            }
          >
            <h1 className="text-logoNavbar p-5">AGUNG</h1>

            <ul className="text-lg p-4 uppercase">
              <li className="p-5 border-b border-gray-600">
                <Link
                  href="https://online.fliphtml5.com/znosl/xddq/"
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
              <li className="p-5 border-b border-gray-600">
                <Link href="/showchase">Showchase</Link>
              </li>
            </ul>
          </div>
          <div
            className={
              !nav
                ? 'fixed left-0 top-0 w-screen h-screen backdrop-blur-sm bg-white/30 ease-in-out duration-500 '
                : 'fixed'
            }
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
