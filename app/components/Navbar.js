"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { poppinsFontRegular400 } from "../lib/font";

// icons import ----------------------------------------------------

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoBookSharp, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

// main component --------------------------------------------------

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className={`${poppinsFontRegular400.className} relative z-10 py-5`}>
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xs shadow-xl rounded-[50px] border border-stone-700 px-5 py-1 uppercase laptopMinWidth:text-sm desktopMinWidth:px-5 desktopMinWidth:py-2">
            <Link href="/">Agung</Link>
          </h1>

          {/* desktop menu    */}

          <div>
            <ul className=" text-[#464646] items-center py-5 hidden desktopMinWidth:flex desktopMinWidth:text-xs">
              <li className="pr-5 z-10">
                <div className="flex items-center shadow-xl rounded-[50px] border border-stone-700 py-2 px-5">
                  <IoBookSharp className="pr-2" size={30} />
                  <Link
                    rel="preload"
                    href="https://drive.google.com/uc?export=download&id=1WxdDJZkxp1xxealLDvVM6VeASpha6C-x"
                  >
                    Resume
                  </Link>
                </div>
              </li>
              <li className="pr-5 z-10">
                <div className="flex items-center shadow-xl rounded-[50px] border border-stone-700 py-2 px-5">
                  <IoLogoLinkedin className="pr-2" size={30} />
                  <Link
                    rel="preload"
                    target="_blank"
                    href="https://www.linkedin.com/in/agung-rosyandi-3215841a2/"
                  >
                    Linkedin
                  </Link>
                </div>
              </li>
              <li className="z-10">
                <div className="flex items-center shadow-xl rounded-[50px] border border-stone-700 py-2 px-5">
                  <IoLogoGithub className="pr-2" size={30} />
                  <Link
                    rel="preload"
                    target="_blank"
                    href="https://github.com/agungrosyandi"
                  >
                    Github
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* burger menu ------------------------------------------------- */}

          <div
            onClick={handleNav}
            className="z-10 relative block desktopMinWidth:hidden"
          >
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <div
            className={
              !nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFAE6] ease-in-out duration-500 z-20"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="text-logoNavbar p-5">AGUNG</h1>

            <ul className="text-lg p-4 tabletMinWidth:text-xl">
              <li className="p-5 border-b border-gray-600">
                <div className="flex">
                  <IoBookSharp size={30} />
                  <Link
                    className="pl-5"
                    href="https://drive.google.com/uc?export=download&id=1WxdDJZkxp1xxealLDvVM6VeASpha6C-x"
                    target="_blank"
                  >
                    Resume
                  </Link>
                </div>
              </li>
              <li className="p-5 border-b border-gray-600">
                <div className="flex">
                  <IoLogoLinkedin size={30} />
                  <Link
                    className="pl-5"
                    href="https://www.linkedin.com/in/agung-rosyandi-3215841a2/"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </div>
              </li>
              <li className="p-5 border-b border-gray-600">
                <div className="flex">
                  <IoLogoGithub size={30} />
                  <Link
                    className="pl-5"
                    href="https://github.com/agungrosyandi"
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
