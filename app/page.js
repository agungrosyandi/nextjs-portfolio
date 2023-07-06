'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from 'react-icons/ai';

import { BsBook } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';

import { Montserrat } from 'next/font/google';
import { Cinzel } from 'next/font/google';

import vectorCharacterHome from '../public/character for react portfolio-02.png';
import vectorCharacterClosing from '../public/character for react portfolio-03.png';
import graphicDesignVector from '../public/aset-aset nexjs react agung-03.jpg';
import landingPageVector from '../public/aset-aset nexjs react agung-01.jpg';
import motionGraphicVector from '../public/aset-aset nexjs react agung-02.jpg';

import vector from '../public/img/illustrator 3.jpg';
import poster from '../public/img/pic 5.jpg';

const montserratParagraph = Montserrat({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400'],
});

const cinzelFont = Cinzel({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['500'],
});

const cinzelFont400 = Cinzel({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400'],
});

const VideoMotionGraphic = () => {
  return (
    <>
      <video
        width={1000}
        height={1000}
        src={require('../public/video/simpleaccounting.mp4')}
        autoPlay
        loop
        muted
        controls
        playsinline
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoNarasiHistorian = () => {
  return (
    <>
      <video
        width={1000}
        height={1000}
        src={require('../public/video/narasihistorian.mp4')}
        autoPlay
        loop
        muted
        controls
        playsinline
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const CardSkills = (props) => {
  return (
    <>
      <div className="font-NelaSlabLight">
        <Image
          className="pb-5"
          alt=""
          style={{ objectFit: 'cover' }}
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

// main app --------------------------------------------------------------------------

export default function Home() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <main className="bg-white">
      {/* navbar ------------------------------ */}

      <nav
        className={`${cinzelFont400.className} fixed flex justify-between items-center w-screen z-10 px-5 py-5 tabletMinWidth:px-10 `}
      >
        <h1 className="text-logoNavbar">AGUNG</h1>
        <ul className="items-center text-lg hidden tabletMinWidth:flex tabletMinWidth:border-b tabletMinWidth:border-gray-600">
          <li className="pr-5">
            <a href="">About</a>
          </li>
          <li className="pr-5">
            <a href="">Showchase</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        {/* burger menu ------------------------------------------------- */}

        <div onClick={handleNav} className="block tabletMinWidth:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            !nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500 '
              : 'fixed left-[-100%]'
          }
        >
          <h1 className="text-logoNavbar p-5">AGUNG</h1>

          <ul className="text-lg p-4 uppercase">
            <li className="p-5 border-b border-gray-600">
              <a href="">About</a>
            </li>
            <li className="p-5 border-b border-gray-600">
              <a href="">Showchase</a>
            </li>
            <li className="p-5">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* home ------------------------------ */}

      <section className="relative w-screen min-h-screen">
        <div className="relative flex flex-col flex-1 justify-center items-center w-full h-full px-5 py-20 tabletMinWidth:px-20 tabletMinWidth:py-32 laptopMinWidth:flex-row laptopMinWidth:px-10 ">
          <div className="relative flex-1 text-center laptopMinWidth:text-start">
            <p
              className={`${cinzelFont400.className} text-lg tabletMinWidth:text-2xl fullHdMinWidth:text-3xl`}
            >
              Hi, My Name is
            </p>
            <h1
              className={`${cinzelFont.className} text-[4rem] leading-none pt-4 tabletMinWidth:text-[7rem] laptopMinWidth:text-[6rem] desktopMinWidth:text-[7rem] fullHdMinWidth:text-[10rem] fullHdMinWidth:pr-10 `}
            >
              Agung Rosyandi
            </h1>
            <h4
              className={`${cinzelFont400.className} text-2xl pt-5 tabletMinWidth:text-3xl fullHdMinWidth:text-4xl`}
            >
              Design, Code, Video
            </h4>
            <p
              className={`${montserratParagraph.className} text-xs p-5 border-b border-gray-600 tabletMinWidth:text-lg tabletMinWidth:p-10 laptopMinWidth:p-0 laptopMinWidth:py-5 laptopMinWidth:border-0 laptopMinWidth:pr-32 laptopMinWidth:text-base desktopMinWidth:pr-72 fullHdMinWidth:text-2xl`}
            >
              I build graphic design, minimalist landing page, motion graphic or
              explainer video. Accessible, inclusive products for social media
              and the web
            </p>
          </div>
          <div className="relative overflow-hidden rounded-full bg-gradient-to-b from-stone-400 w-72 h-72 mt-5 tabletMinWidth:w-96 tabletMinWidth:h-96 laptopMinWidth:rounded-none desktopMinWidth:h-[30rem] fullHdMinWidth:w-[30rem] fullHdMinWidth:h-[40rem]">
            <Image
              className="object-top"
              src={vectorCharacterHome}
              alt="Picture of the home"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* about ------------------------------ */}

      <section className="relative w-screen min-h-screen">
        <div className="relative overflow-hidden p-10 w-full h-full">
          <div className=" relative flex flex-1 flex-col items-center text-center ">
            <h3
              className={`${cinzelFont.className} text-5xl tabletMinWidth:text-7xl fullHdMinWidth:text-8xl`}
            >
              About Me
            </h3>
            <p
              className={`${montserratParagraph.className} text-sm pt-8 px-5 tabletMinWidth:text-lg tabletMinWidth:px-10 desktopMinWidth:px-20 fullHdMinWidth:text-3xl fullHdMinWidth:px-40`}
            >
              Multimedia specialist with great enthusiast about technology.
              Currently im proficient in some Adobe Creative Suits software and
              also Web Development tech like a HTML, CSS and Javascript
            </p>
          </div>
          <div className="flex flex-1 flex-wrap justify-center gap-6 pt-10 ">
            <div className="text-center shadow-lg p-4 my-5 rounded-xl">
              <CardSkills
                image={graphicDesignVector}
                name={'Graphic Design'}
                subName={'Adobe Illustrator, Photoshop'}
              />
            </div>
            <div className="text-center shadow-lg p-4 my-5 rounded-xl">
              <CardSkills
                image={landingPageVector}
                name={'Landing Page'}
                subName={'HTML, CSS, Javascript'}
              />
            </div>
            <div className="text-center shadow-lg p-4 my-5 rounded-xl">
              <CardSkills
                image={motionGraphicVector}
                name={'Motion Graphic'}
                subName={'Adobe After Effect, Premierre Pro'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* portfolio ------------------------------ */}

      <section className="relative w-screen min-h-screen">
        <div className="relative w-full h-full">
          <div className="relative flex-1 flex flex-col items-center text-center p-10">
            <h3
              className={`${cinzelFont.className} text-5xl tabletMinWidth:text-7xl fullHdMinWidth:text-8xl`}
            >
              My Area of Expertise
            </h3>
            <p
              className={`${montserratParagraph.className} text-sm pt-8 px-5 tabletMinWidth:text-lg tabletMinWidth:px-10 desktopMinWidth:px-20 fullHdMinWidth:text-3xl`}
            >
              I can create material content from scratch, including poster
              style, vector, motion graphic, explainer video, and landing page
              for increasing the reputation of your brand or business through
              creative, minimalist and beautiful style. So click pic below for
              more details.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4 py-10 justify-center items-center tabletMinWidth:flex-wrap tabletMinWidth:flex-row desktopMinWidth:px-10">
            <div className="flex-1 basis-1/3">
              <Image src={poster} alt="poster" />
            </div>
            <div className="flex-1 basis-1/3">
              <Image src={vector} alt="vector" />
            </div>
            <div className="flex-1 basis-1/3">
              <VideoMotionGraphic alt="motiongraphic" />
            </div>
            <div className="flex-1 basis-1/3">
              <VideoNarasiHistorian alt="narasihistorian" />
            </div>
          </div>
        </div>
      </section>

      {/* closing ------------------------------ */}

      <section className="relative w-screen min-h-screen">
        <div className="relative flex flex-col justify-center items-center w-full h-full text-center px-5 py-20 tabletMinWidth:px-20 tabletMinWidth:py-32 laptopMinWidth:flex-row laptopMinWidth:py-20 laptopMinWidth:px-10 desktopMinWidth:py-32">
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

            <div className="flex justify-center py-5 border-b border-gray-600 laptopMinWidth:border-none laptopMinWidth:justify-start ">
              <AiOutlineWhatsApp className="px-2" size={40} />
              <AiOutlineMail className="px-2" size={40} />
              <BsBook className="px-2" size={40} />
              <BsBook className="px-2" size={40} />
              <FiDownload className="px-2" size={40} />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-full bg-gradient-to-b from-stone-600 w-72 h-72 mt-5 tabletMinWidth:w-96 tabletMinWidth:h-96 laptopMinWidth:rounded-none desktopMinWidth:h-[30rem] fullHdMinWidth:w-[30rem] fullHdMinWidth:h-[40rem]">
            <Image
              className="object-top"
              src={vectorCharacterClosing}
              alt="Picture of the home"
              width={500}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
