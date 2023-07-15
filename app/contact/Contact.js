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

import characterContact from "../../public/aset vector/closing character gallery web-01.png";
import WaContact from "../../public/aset vector/wa contact vector.jpg";
import EmailContact from "../../public/aset vector/email contact vector.jpg";

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
          <div className="relative laptopMinWidth:border-b border-r-gray-900">
            <div className="flex-1 text-center laptopMinWidth:text-left">
              <h1
                className={`${cinzelFont.className} text-[4rem] leading-none pt-4 tabletMinWidth:text-[6rem] laptopMinWidth:text-[5rem]`}
              >
                How to contact me ?
              </h1>
              <p
                className={`${montserratParagraph.className} text-xs p-5 tabletMinWidth:text-lg tabletMinWidth:px-20 laptopMinWidth:px-0`}
              >
                Feel free to contact via Whatsapp or sending me Email. Just
                click pic below :)
              </p>
            </div>
            <div className="w-full h-full grid grid-cols-2 grid-flow-row gap-2 py-5">
              <div className="relative w-full h-[15rem] col-span-2 tabletMinWidth:h-[20rem] laptopMinWidth:col-span-1 ">
                <a href="whatsapp://send?text=Hello&phone=+6282120106076">
                  <Image
                    className="object-top"
                    src={WaContact}
                    alt="whatapps"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                  />
                </a>
              </div>
              <div className="relative w-full h-[15rem] col-span-2 tabletMinWidth:h-[20rem] laptopMinWidth:col-span-1 ">
                <a href="mailto:agungrosyandi@gmail.com">
                  <Image
                    className="object-top"
                    src={EmailContact}
                    alt="email"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-[25rem] h-[35rem] py-10 hidden tabletMinWidth:w-[35rem] tabletMinWidth:h-[45rem] laptopMinWidth:block">
            <Image
              className="object-top"
              src={characterContact}
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
