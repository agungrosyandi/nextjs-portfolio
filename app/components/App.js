import React from "react";
import Image from "next/image";
import Link from "next/link";

// image background home import ----------------------------------------------------

import vectorCharacterHome from "../../public/aset vector/closing vector.png";
import graphicDesignVector from "../../public/aset vector/design character vector.png";
import landingPageVector from "../../public/aset vector/landing page character vector.png";
import ClosingPageVector from "../../public/aset vector/contact character vector.png";

// card biography --------------------------------------------------

const Biography = (props) => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col items-center pb-10 laptopMinWidth:flex-row laptopMinWidth:px-5">
          <div className="flex-1 text-center laptopMinWidth:text-start">
            <p className="font-MonaSansUltraLighNarrow text-2xl pb-2 tabletMinWidth:text-3xl fullHdMinWidth:text-4xl">
              {props.subTitle1}
            </p>
            <div className="font-MonaSansUltraLightWide uppercase py-1 flex flex-col text-5xl tabletMinWidth:text-7xl fullHdMinWidth:text-8xl">
              <h1 className="">{props.mainTitle}</h1>
            </div>
            <h4 className="p-5 pb-2 font-MonaSansLight text-sm pt-3 tabletMinWidth:text-2xl laptopMinWidth:px-0 fullHdMinWidth:text-3xl">
              {props.subTitle2}
            </h4>
            <p
              className={`font-MonaSansUltraLight text-xs px-5 pt-5 tabletMinWidth:text-lg laptopMinWidth:px-0 laptopMinWidth:text-lg laptopMinWidth:w-[80%] fullHdMinWidth:w-[60%]`}
            >
              {props.description}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-full bg-gradient-to-b from-gray-200 w-[15rem] h-[15rem] mt-10 tabletMinWidth:h-[25rem] tabletMinWidth:w-[25rem] laptopMinWidth:w-[20rem] laptopMinWidth:h-[20rem] fullHdMinWidth:w-[30rem] fullHdMinWidth:h-[30rem]">
            <Image
              className="object-top"
              src={props.image}
              alt="Picture of the home"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// card softskills --------------------------------------------------

const TitleAndSubTitle = (props) => {
  return (
    <>
      <div className="flex flex-col laptopMinWidth:flex-row laptopMinWidth:justify-center laptopMinWidth:px-5 laptopMinWidth:items-center">
        <div className="flex-1 text-center laptopMinWidth:text-start">
          <h6 className="font-MonaSansUltraLightWide text-4xl p-5 tabletMinWidth:text-6xl laptopMinWidth:px-0 fullHdMinWidth:text-7xl">
            {props.name}
          </h6>
          <p
            className={`font-MonaSansUltraLight px-1 pb-5 text-xs tabletMinWidth:text-base laptopMinWidth:text-lg laptopMinWidth:pl-0`}
          >
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

// card softskills --------------------------------------------------

const Softskills = (props) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1">
          <Image className="pb-5" alt="" src={props.image} />
        </div>
        <div className="flex-1 text-center">
          <h6 className="font-MonaSansUltraLightWide text-4xl tabletMinWidth:text-6xl laptopMinWidth:text-5xl fullHdMinWidth:text-6xl ">
            {props.name}
          </h6>
          <p className="p-5 pb-5 font-MonaSansLight text-sm font-bold tabletMinWidth:text-lg fullHdMinWidth:text-2xl">
            Tools: {props.subName}
          </p>
          <p
            className={`font-MonaSansUltraLight px-5 pb-5 text-xs tabletMinWidth:text-base fullHdMinWidth:text-lg`}
          >
            {props.description}
          </p>
          <div className="pb-10">
            <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
              {props.button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const GraphicDesignLink = (
  <Link rel="preload" href="../showchase">
    <p className="text-xs tabletMinWidth:text-base">More Detail</p>
  </Link>
);

const WebDevelopmentLink = (
  <Link rel="preload" href="../showchase#landingpage">
    <p className="text-xs tabletMinWidth:text-base">More Detail</p>
  </Link>
);

// main component --------------------------------------------------

const Home = () => {
  return (
    <>
      <section id="home" className="section-style-home p-5">
        <div className="relative mt-5 rounded-[20px] tabletMinWidth:mt-10">
          <div className="grid grid-cols-2 grid-flow-row gap 2 py-5">
            <div className="bg-stone-100 shadow-xl p-4 my-5 rounded-xl flex-1 col-span-2 laptopMinWidth:col-span-2 laptopMinWidth:mx-5">
              <Biography
                subTitle1={"Hi, My Name is"}
                mainTitle={"Agung Rosyandi"}
                subTitle2={"UI/UX & Front-End Development"}
                description={
                  " I build graphic design, minimalist landing page, motion graphic orexplainer video. Accessible, inclusive products for social media and the web "
                }
                image={vectorCharacterHome}
              />
            </div>
            <div className="bg-stone-100 text-center shadow-xl p-4 my-5 rounded-xl col-span-2 laptopMinWidth:mx-5">
              <TitleAndSubTitle
                name={"My Area of Expertise"}
                description={
                  "My technique based on minimalist and simplistic style, that’s means “ go for less but meaningful “. The less elements there are to bombard the viewer, focus on the product or idea being showcased. This means using limited layouts and color palettes while still making available only the most useful tools, such as intuitive and easy-to-find navigational elements. So, here what i can do .. "
                }
              />
            </div>
            <div className="bg-stone-100 text-center shadow-xl p-4 my-5 rounded-xl col-span-2 laptopMinWidth:col-span-1 laptopMinWidth:mx-5">
              <Softskills
                image={graphicDesignVector}
                name={"Graphic Design"}
                subName={"Adobe Illustrator, Photoshop"}
                description={
                  "Make design with positive and negative space perspective, and mixed with gradient color, image costum font and so on. The output will looks beautiful and also minimalist, good for social media or commercial."
                }
                button={GraphicDesignLink}
              />
            </div>
            <div className="bg-stone-100 text-center shadow-xl p-4 my-5 rounded-xl col-span-2 laptopMinWidth:col-span-1 laptopMinWidth:mx-5">
              <Softskills
                image={landingPageVector}
                name={"Web Development"}
                subName={"HTML, CSS, Javascript"}
                description={
                  "In the era Digitalization 4.0, graphic and video content stil not enough to make your content special and unique, so build your content to the web development, make your brand look more profesional."
                }
                button={WebDevelopmentLink}
              />
            </div>
            <div className="bg-stone-100 text-center shadow-xl p-4 my-5 rounded-xl col-span-2 laptopMinWidth:mx-5">
              <div className="relative flex flex-col justify-center items-center text-center px-2 py-10 tabletMinWidth:px-5 laptopMinWidth:flex-row-reverse ">
                {/* description closing ------------------------------------------------------------------- */}

                <div className="relative flex-1 text-center laptopMinWidth:text-start laptopMinWidth:px-20">
                  <p
                    className={`font-MonaSansUltraLighNarrow text-2xl pb-5 tabletMinWidth:text-3xl fullHdMinWidth:text-3xl`}
                  >
                    Interesting isn't ? :)
                  </p>
                  <div
                    className={`font-MonaSansUltraLightWide text-5xl tabletMinWidth:text-6xl fullHdMinWidth:text-7xl`}
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
                      <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
                        Say Hello
                      </button>
                    </Link>
                  </div>
                </div>

                {/* vector pic closing ------------------------------------------------------------------- */}

                <div className="relative overflow-hidden hidden laptopMinWidth:block laptopMinWidth:bg-gradient-to-b laptopMinWidth:from-gray-200 laptopMinWidth:rounded-full laptopMinWidth:h-[20rem] laptopMinWidth:w-[20rem]">
                  <Image
                    className="object-top"
                    src={ClosingPageVector}
                    alt="Picture of the home"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
