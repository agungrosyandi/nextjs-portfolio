import React from "react";
import Image from "next/image";
import Link from "next/link";

import vectorCharacterClosing from "../../public/aset vector/closing vector.png";

// main component --------------------------------------------------------------------------

const Closing = () => {
  return (
    <section className="relative w-screen">
      <div className="relative flex flex-col justify-center items-center w-full h-full text-center px-5 py-20 tabletMinWidth:px-20 tabletMinWidth:py-32 laptopMinWidth:flex-row laptopMinWidth:py-20 laptopMinWidth:px-20 desktopMinWidth:py-32">
        <div className="relative flex-1 text-center laptopMinWidth:text-start">
          <p
            className={`font-MonaSansUltraLighNarrow text-2xl pb-5 tabletMinWidth:text-3xl fullHdMinWidth:text-4xl`}
          >
            Interesting isn't ? :)
          </p>
          <div
            className={`font-MonaSansUltraLightWide text-5xl tabletMinWidth:text-6xl fullHdMinWidth:text-8xl`}
          >
            <h1>Lets Working Together</h1>
          </div>
          <p
            className={`font-MonaSansLight text-sm py-6 px-10 tabletMinWidth:text-lg tabletMinWidth:py-8 laptopMinWidth:px-0 laptopMinWidth:pt-5 fullHdMinWidth:text-lg`}
          >
            Dont hestitate to contact me if you need my service
          </p>
          <div className="relative tableteMinWidth:py-10 laptopMinWidth:justify-start">
            <Link href="mailto:agungrosyandi@gmail.com">
              <button className="text-sm border-2 border-gray-500 py-2 px-7 rounded-full tabletMinWidth:text-base ">
                Say Hello
              </button>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden hidden laptopMinWidth:block laptopMinWidth:bg-gradient-to-b laptopMinWidth:from-stone-500 laptopMinWidth:h-[30rem] laptopMinWidth:w-[20rem] fullHdMinWidth:w-[34rem] fullHdMinWidth:h-[44rem]">
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
