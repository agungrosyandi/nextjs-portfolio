import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";

import vectorCharacterClosing from "../../public/character for react portfolio-03.png";

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

const Closing = () => {
  return (
    <section className="relative w-screen min-h-screen">
      <div className="relative flex flex-col justify-center items-center w-full h-full text-center px-5 py-20 tabletMinWidth:px-20 tabletMinWidth:py-32 laptopMinWidth:flex-row laptopMinWidth:py-20 laptopMinWidth:px-20 desktopMinWidth:py-32">
        <div className="relative flex-1 text-center laptopMinWidth:text-start">
          <div
            className={`${cinzelFont.className} text-[4rem] leading-tight tabletMinWidth:text-[6rem] laptopMinWidth:text-[5rem] desktopMinWidth:text-[6rem] fullHdMinWidth:text-[7rem]`}
          >
            <h1>Lets Working Together</h1>
          </div>
          <p
            className={`${montserratParagraph.className} text-sm pt-5 px-10 tabletMinWidth:text-lg tabletMinWidth:pt-10 laptopMinWidth:px-0 laptopMinWidth:pt-5 fullHdMinWidth:text-2xl`}
          >
            Dont hestitate to contact me if you need my service
          </p>

          <div className="flex justify-center py-10 laptopMinWidth:justify-start ">
            <div className="mx-3">
              <a
                href="whatsapp://send?text=Hello&phone=+6282120106076"
                target="_blank"
              >
                <AiOutlineWhatsApp
                  className="w-7 h-7 tabletMinWidth:w-9 tabletMinWidth:h-9"
                  size={100}
                />
              </a>
            </div>
            <div className="mx-3">
              <a href="mailto:agungrosyandi@gmail.com" target="_blank">
                <AiOutlineMail
                  className="w-7 h-7 tabletMinWidth:w-9 tabletMinWidth:h-9"
                  size={100}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-full bg-gradient-to-b from-stone-600 w-72 h-72 mt-5 tabletMinWidth:w-96 tabletMinWidth:h-96 laptopMinWidth:rounded-none desktopMinWidth:h-[30rem] fullHdMinWidth:w-[30rem] fullHdMinWidth:h-[40rem]">
          <Image
            className="object-top"
            src={vectorCharacterClosing}
            alt="Picture of the home"
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Closing;
