import React from "react";
import Image from "next/image";
import Link from "next/link";

// image import ----------------------------------------------------------------------

import graphicDesignVector from "../../public/aset vector/design character vector.png";
import landingPageVector from "../../public/aset vector/landing page character vector.png";
import motionGraphicVector from "../../public/aset vector/motion character vector.png";

// font import ----------------------------------------------------------------------

import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";

const montserratParagraph = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const cinzelFont400 = Cinzel({
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
          <h6 className="font-NelaSlabLight text-3xl tabletMinWidth:text-5xl ">
            {props.name}
          </h6>
          <p className="p-5 pb-5 text-sm font-bold tabletMinWidth:text-base laptopMinWidth:pl-0">
            Tools: {props.subName}
          </p>
          <p
            className={`${montserratParagraph.className} px-5 pb-5 text-xs tabletMinWidth:text-base laptopMinWidth:pl-0`}
          >
            {props.description}
          </p>
          <div className="pb-10">
            <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize laptopMinWidth:text-base desktopMinWidth:text-lg">
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
          <h6 className="font-NelaSlabLight text-3xl tabletMinWidth:text-5xl laptopMinWidth:pl-10">
            {props.name}
          </h6>
          <p className="p-5 pb-5 text-sm font-bold tabletMinWidth:text-base laptopMinWidth:pl-10">
            Tools: {props.subName}
          </p>
          <p
            className={`${montserratParagraph.className} px-5 pb-5 text-xs tabletMinWidth:text-base laptopMinWidth:pl-10`}
          >
            {props.description}
          </p>
          <div className="pb-10 laptopMinWidth:pl-10">
            <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize laptopMinWidth:text-base desktopMinWidth:text-lg">
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
      <div className="relative overflow-hidden py-10 px-5 w-full h-full laptopMinWidth:px-20">
        <div className=" relative flex flex-1 flex-col items-center text-center pb-5 border-b border-gray-600 tabletMinWidth:border-none">
          <h3
            className={`${cinzelFont400.className} text-5xl tabletMinWidth:text-7xl`}
          >
            My Area of Expertise
          </h3>
        </div>
        <div className="flex flex-1 flex-wrap justify-center items-center gap-6">
          <div className="text-center shadow-lg p-4 my-5 rounded-xl">
            <Link href="/showchase" target="_blank">
              <CardSkills
                image={graphicDesignVector}
                name={"Graphic Design"}
                subName={"Adobe Illustrator, Photoshop"}
                description={
                  "used the photoshop and also raw material asset from the internet, make design with positive and negatif space perspective and mixed with gradient color, image costum font and so on, the output will looks beautiful and also minimalist"
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
                  "Used raw material output from photoshop, illustrator and premierre pro such a pixel, vector and cinematic material, make distinct content with motion graphic style to get more audience and incerease engagment rate on social media"
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
