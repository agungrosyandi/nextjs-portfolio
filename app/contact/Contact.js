import React from "react";
import Image from "next/image";

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

import characterContact from "../../public/aset vector/closing character gallery web-01.png";
import WaContact from "../../public/aset vector/wa contact vector.jpg";
import EmailContact from "../../public/aset vector/email contact vector.jpg";

// main component ----------------------------------------------------

const Contact = () => {
  return (
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
              Feel free to contact via Whatsapp or sending me Email. Just click
              pic below :)
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-[25rem] h-[35rem] py-10 hidden tabletMinWidth:w-[35rem] tabletMinWidth:h-[45rem] laptopMinWidth:block">
          <Image
            className="object-top"
            src={characterContact}
            alt="characterContact"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
