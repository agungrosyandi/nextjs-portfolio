import React from "react";
import Image from "next/image";
import Link from "next/link";

// image import ----------------------------------------------------------------------

import graphicDesignVector from "../../public/aset vector/design character vector.png";
import landingPageVector from "../../public/aset vector/landing page character vector.png";
import motionGraphicVector from "../../public/aset vector/motion character vector.png";

// font import ----------------------------------------------------------------------

import { Montserrat } from "next/font/google";

const montserratParagraph = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

// Card props ----------------------------------------------------------------------

// carskills left -------------

const CardSkills = (props) => {
  return (
    <>
      <div className="flex flex-col laptopMinWidth:flex-row laptopMinWidth:justify-center laptopMinWidth:items-center">
        <div className="flex-1">
          <Image className="pb-5" alt="pic" src={props.image} />
        </div>
        <div className="flex-1 text-center laptopMinWidth:text-start">
          <h6 className="font-MonaSansUltraLightWide text-4xl tabletMinWidth:text-6xl ">
            {props.name}
          </h6>
          <p className="p-5 pb-5 font-MonaSansLight text-sm font-bold tabletMinWidth:text-lg laptopMinWidth:pl-0">
            Tools: {props.subName}
          </p>
          <p
            className={`font-MonaSansUltraLight px-5 pb-5 text-xs tabletMinWidth:text-base laptopMinWidth:pl-0`}
          >
            {props.description}
          </p>
          <div className="pb-10">
            <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// carskills right -------------

const CardSkillsRight = (props) => {
  return (
    <>
      <div className="flex flex-col laptopMinWidth:flex-row-reverse laptopMinWidth:justify-center laptopMinWidth:items-center">
        <div className="flex-1">
          <Image className="pb-5" alt="pic" src={props.image} />
        </div>
        <div className="flex-1 text-center laptopMinWidth:text-start">
          <h6 className="font-MonaSansUltraLightWide text-4xl tabletMinWidth:text-6xl laptopMinWidth:pl-10">
            {props.name}
          </h6>
          <p className="p-5 pb-5 font-MonaSansLight font-bold text-sm tabletMinWidth:text-lg laptopMinWidth:pl-10">
            Tools: {props.subName}
          </p>
          <p
            className={`font-MonaSansUltraLight px-5 pb-5 text-xs tabletMinWidth:text-base laptopMinWidth:pl-10`}
          >
            {props.description}
          </p>
          <div className="pb-10 laptopMinWidth:pl-10">
            <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize tabletMinWidth:text-base">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// main component ----------------------------------------------------------------------

const About = () => {
  return (
    <section className="relative w-screen min-h-screen">
      <div className="relative overflow-hidden py-20 px-5 w-full h-full tabletMinWidth:px-10 laptopMinWidth:px-20">
        <div className=" relative flex flex-1 flex-col items-center text-center laptopMinWidth:text-start laptopMinWidth:items-start fullHdMinWidth:pb-5 fullHdMinWidth:mb-10 fullHdMinWidth:border-b fullHdMinWidth:border-gray-600 ">
          <h3
            className={`font-MonaSansUltraLightWide text-3xl tabletMinWidth:text-6xl fullHdMinWidth:text-8xl`}
          >
            My Area of Expertise
          </h3>
          <p className="font-MonaSansUltraLight text-xs py-5 px-5 tabletMinWidth:text-base laptopMinWidth:pl-0 fullHdMinWidth:text-lg fullHdMinWidth:w-[80%]">
            In Design, my technique based on minimalist and simplistic style,
            that’s means “ go for less but meaningful “. The less elements there
            are to bombard the viewer, focus on the product or idea being
            showcased. This means using limited layouts and color palettes while
            still making available only the most useful tools, such as intuitive
            and easy-to-find navigational elements. <br /> <br />{" "}
            <span className="font-MonaSansLight font-bold">
              Here case study on my work recently.
            </span>
          </p>
        </div>
        <div className="flex flex-1 flex-wrap justify-center items-center gap-6">
          <div className="text-center shadow-lg p-4 my-5 rounded-xl">
            <Link href="/showchase" target="_blank">
              <CardSkills
                image={graphicDesignVector}
                name={"Graphic Design"}
                subName={"Adobe Illustrator, Photoshop"}
                description={
                  "Make design with positive and negative space perspective, and mixed with gradient color, image costum font and so on. The output will looks beautiful and also minimalist, good for social media or commercial."
                }
              />
            </Link>
          </div>
          <div className="text-center shadow-lg p-4 my-5 rounded-xl">
            <Link href="/showchase#motion" target="_blank">
              <CardSkillsRight
                image={motionGraphicVector}
                name={"Motion Graphic"}
                subName={"Adobe After Effect, Premierre Pro"}
                description={
                  "Create distinct content with motion graphic or cinematic style to get more audience. Increase engagement rate your bussines"
                }
              />
            </Link>
          </div>
          <div className="text-center shadow-lg p-4 my-5 rounded-xl">
            <Link href="https://narasihistorian.netlify.app/" target="_blank">
              <CardSkills
                image={landingPageVector}
                name={"Landing Page"}
                subName={"HTML, CSS, Javascript"}
                description={
                  "In the era Digitalization 4.0, graphic and video content stil not enough to make your content special and unique, so build your content to the web development, make your brand look more profesional."
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
