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

// image background home import ----------------------------------------------------

import characterResume from "../../public/aset vector/resume character vector.png";

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
              soon, stay tuned. Temporary, click button to see or download my
              PDF :)
            </p>
            <div className="relative flex flex-col items-center justify-center py-2 tabletMinWidth:flex-row tableteMinWidth:py-10 laptopMinWidth:justify-start">
              <Link
                className="p-2"
                href="https://online.fliphtml5.com/znosl/klcs/"
                target="_blank"
              >
                <button className="font-NelaSlabLight text-xs border-2 border-gray-400 py-1 px-5 rounded-full tabletMinWidth:text-lg">
                  Resume PDF
                </button>
              </Link>
              <Link
                className="p-2"
                href="https://online.fliphtml5.com/znosl/qlfc/"
                target="_blank"
              >
                <button className="font-NelaSlabLight text-xs border-2 border-gray-400 py-1 px-5 rounded-full tabletMinWidth:text-lg">
                  Portfolio PDF
                </button>
              </Link>
              <Link
                className="p-2"
                href="https://drive.google.com/uc?export=download&id=1tQF2nMUxJEunM8w8b1-O-SiOh0ZwVVKX"
                target="_blank"
              >
                <button className="font-NelaSlabLight text-xs border-2 border-gray-400 py-1 px-5 rounded-full tabletMinWidth:text-lg">
                  Download PDF
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-[25rem] h-[35rem] py-10 tabletMinWidth:w-[35rem] tabletMinWidth:h-[45rem] ">
            <Image
              className="object-top"
              src={characterResume}
              alt="characterResume"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
