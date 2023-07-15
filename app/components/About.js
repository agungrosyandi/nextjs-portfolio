import React from "react";
import Image from "next/image";

import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";

import graphicDesignVector from "../../public/aset-aset nexjs react agung-03.jpg";
import landingPageVector from "../../public/aset-aset nexjs react agung-01.jpg";
import motionGraphicVector from "../../public/aset-aset nexjs react agung-02.jpg";

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

const CardSkills = (props) => {
  return (
    <>
      <div className="font-NelaSlabLight">
        <Image
          className="pb-5"
          alt=""
          style={{ objectFit: "cover" }}
          width={500}
          height={500}
          src={props.image}
        />
        <h6 className="text-3xl tabletMinWidth:text-5xl ">{props.name}</h6>
        <p className="p-5 pb-5 text-xs font-bold tabletMinWidth:text-base">
          Tools: {props.subName}
        </p>
      </div>
    </>
  );
};

const About = () => {
  return (
    <section className="relative w-screen min-h-screen">
      <div className="relative overflow-hidden p-10 w-full h-full">
        <div className=" relative flex flex-1 flex-col items-center text-center ">
          <h3
            className={`${cinzelFont.className} text-5xl tabletMinWidth:text-7xl fullHdMinWidth:text-8xl`}
          >
            About Me
          </h3>
          <p
            className={`${montserratParagraph.className} text-sm pt-8 px-5 tabletMinWidth:text-lg tabletMinWidth:px-10 desktopMinWidth:px-20 fullHdMinWidth:text-2xl fullHdMinWidth:px-40`}
          >
            Multimedia specialist with great enthusiast about technology.
            Currently im proficient in some Adobe Creative Suits software and
            also Web Development tech such as HTML, CSS and Javascript
          </p>
        </div>
        <div className="flex flex-1 flex-wrap justify-center gap-6 pt-10 ">
          <div className="text-center shadow-lg p-4 my-5 rounded-xl">
            <CardSkills
              image={graphicDesignVector}
              name={"Graphic Design"}
              subName={"Adobe Illustrator, Photoshop"}
            />
          </div>
          <div className="text-center shadow-lg p-4 my-5 rounded-xl">
            <CardSkills
              image={landingPageVector}
              name={"Landing Page"}
              subName={"HTML, CSS, Javascript"}
            />
          </div>
          <div className="text-center shadow-lg p-4 my-5 rounded-xl">
            <CardSkills
              image={motionGraphicVector}
              name={"Motion Graphic"}
              subName={"Adobe After Effect, Premierre Pro"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
