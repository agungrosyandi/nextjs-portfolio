import React from "react";
import Image from "next/image";
import Link from "next/link";

// icon import ----------------------------------------------------

import { HiArrowNarrowRight } from "react-icons/hi";

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
              className={`font-MonaSansUltraLighNarrow text-[4rem] leading-none pt-4 tabletMinWidth:text-[6rem]`}
            >
              Coming Soon
            </h1>
            <p
              className={`font-MonaSansUltraLight text-sm p-5 tabletMinWidth:text-lg tabletMinWidth:px-20 laptopMinWidth:px-0 laptopMinWidth:pr-5 laptopMinWidth:w-[80%] laptopMinWidth:border-b laptopMinWidth:border-gray-900`}
            >
              Sorry, my resume currently not available. Dont Worry will update
              soon, stay tuned. Click to view my PDF
            </p>
            <div className="relative flex flex-col items-center justify-center py-2 tabletMinWidth:flex-row tableteMinWidth:py-10 laptopMinWidth:justify-start">
              <div className="flex items-center font-MonaSansLight laptopMinWidth:py-5">
                <HiArrowNarrowRight />
                <Link
                  href="https://online.fliphtml5.com/znosl/xddq/"
                  target="_blank"
                >
                  <p className="pl-5 text-sm font-bold tabletMinWidth:text-lg">
                    Resume PDF
                  </p>
                </Link>
              </div>
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
