import React from "react";
import Image from "next/image";
import Link from "next/link";

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

// icons import ----------------------------------------------------

import { BsBook } from "react-icons/bs";

// image background home import ----------------------------------------------------

import characterResume from "../../public/aset vector/closing character gallery web-02.png";

// main component ----------------------------------------------------

const Resume = () => {
  return (
    <>
      <section className="relative w-screen min-h-screen">
        <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 py-20 tabletMinWidth:px-10 tabletMinWidth:py-32 laptopMinWidth:px-20 laptopMinWidth:flex-row-reverse laptopMinWidth:items-start">
          <div className="flex-1 text-center laptopMinWidth:text-start">
            <h1
              className={`${cinzelFont.className} text-[4rem] leading-none pt-4 tabletMinWidth:text-[6rem]`}
            >
              Coming Soon
            </h1>
            <p
              className={`${montserratParagraph.className} text-xs p-5 tabletMinWidth:text-lg tabletMinWidth:px-20 laptopMinWidth:px-0 laptopMinWidth:pr-20`}
            >
              Sorry, my resume currently not available. Dont Worry will update
              soon, stay tuned.
            </p>
            <div className="relative py-2 tableteMinWidth:py-10 laptopMinWidth:justify-start">
              <Link
                href="https://online.fliphtml5.com/znosl/klcs/"
                target="_blank"
              >
                <button className="font-NelaSlabLight text-sm border-2 border-gray-400 py-1 px-5 rounded-full tabletMinWidth:text-2xl">
                  Resume
                </button>
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

export default Resume;
