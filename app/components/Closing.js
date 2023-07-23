import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";

import vectorCharacterClosing from "../../public/aset vector/closing vector.png";

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
  weight: ["500"],
});

const Closing = () => {
  return (
    <section className="relative w-screen">
      <div className="relative flex flex-col justify-center items-center w-full h-full text-center px-5 py-20 tabletMinWidth:px-20 tabletMinWidth:py-32 laptopMinWidth:flex-row laptopMinWidth:py-20 laptopMinWidth:px-20 desktopMinWidth:py-32">
        <div className="relative flex-1 text-center laptopMinWidth:text-start">
          <p
            className={`font-NelaSlabLight text-lg py-5 tabletMinWidth:text-2xl fullHdMinWidth:text-3xl`}
          >
            Interesting isn't ? :)
          </p>
          <div
            className={`${cinzelFont.className} text-[3.5rem] leading-tight tabletMinWidth:text-[5rem] fullHdMinWidth:text-[6rem]`}
          >
            <h1>Lets Working Together</h1>
          </div>
          <p
            className={`${montserratParagraph.className} text-sm py-5 px-10 tabletMinWidth:text-lg tabletMinWidth:py-10 laptopMinWidth:px-0 laptopMinWidth:pt-5`}
          >
            Dont hestitate to contact me if you need my service
          </p>
          <div className="relative py-2 tableteMinWidth:py-10 laptopMinWidth:justify-start">
            <Link href="/contact">
              <button className="font-NelaSlabLight text-sm border-2 border-gray-600 py-1 px-3 rounded-full tabletMinWidth:text-2xl tabletMinWidth:py-2 tabletMinWidth:px-5 ">
                Contact me
              </button>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden hidden laptopMinWidth:block laptopMinWidth:bg-gradient-to-b laptopMinWidth:from-stone-500 laptopMinWidth:h-[30rem] laptopMinWidth:w-[20rem] fullHdMinWidth:w-[34rem] fullHdMinWidth:h-[40rem]">
          <Image
            className="object-top"
            src={vectorCharacterClosing}
            alt="Picture of the home"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default Closing;
