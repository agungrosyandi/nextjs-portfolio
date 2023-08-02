import React from "react";
import Image from "next/image";

// image background home import ----------------------------------------------------

import vectorCharacterHome from "../../public/aset vector/home vector.png";

// main component --------------------------------------------------

const Home = () => {
  return (
    <>
      <section id="home" className="section-style-home">
        <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 py-20 tabletMinWidth:px-20 tabletMinWidth:py-32 laptopMinWidth:flex-row laptopMinWidth:px-20 fullHdMinWidth:py-20">
          <div className="relative flex-1 text-center laptopMinWidth:text-start ">
            <p className="font-MonaSansUltraLighNarrow text-2xl pb-2 tabletMinWidth:text-3xl laptopMinWidth:text-4xl">
              Hi, My Name is
            </p>
            <h1 className="font-MonaSansUltraLightWide flex flex-col text-6xl tabletMinWidth:text-8xl fullHdMinWidth:text-9xl">
              <span>Agung</span>

              <span>Rosyandi</span>
            </h1>
            <h4 className="font-MonaSansLight text-base pt-3 tabletMinWidth:text-2xl fullHdMinWidth:text-3xl">
              <span>UI/UX</span>
              <span> &</span>
              <span> Front-end web development</span>
            </h4>
            <p
              className={`font-MonaSansUltraLight text-xs px-5 pt-5 pb-10 border-b border-gray-600 tabletMinWidth:text-base tabletMinWidth:p-10 laptopMinWidth:p-0 laptopMinWidth:py-5 laptopMinWidth:border-0 laptopMinWidth:w-[70%] laptopMinWidth:border-b laptopMinWidth:border-gray-600 fullHdMinWidth:text-lg`}
            >
              I build graphic design, minimalist landing page, motion graphic or
              explainer video. Accessible, inclusive products for social media
              and the web
            </p>
          </div>
          <div className="relative overflow-hidden rounded-full bg-gradient-to-b from-stone-500 w-72 h-72 mt-10 tabletMinWidth:w-96 tabletMinWidth:h-96 laptopMinWidth:rounded-none laptopMinWidth:h-[30rem] laptopMinWidth:w-[20rem] fullHdMinWidth:w-[34rem] fullHdMinWidth:h-[47rem]">
            <Image
              className="object-top"
              src={vectorCharacterHome}
              alt="Picture of the home"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
