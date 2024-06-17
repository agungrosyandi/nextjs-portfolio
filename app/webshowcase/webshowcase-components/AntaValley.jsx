import { poppinsFontRegular400, roboto } from "@/app/lib/font";
import Link from "next/link";
import Image from "next/image";

import mockup5 from "../../../public/uxdesign assets/TL-ResponsiveMockup.jpg";
import mockup6 from "../../../public/uxdesign assets/template-mockup-mobile-web.jpg";

export default function AntaValley() {
  return (
    <>
      <div className="relative flex-1 mt-10 pt-10 pb-5 border-t border-gray-600 ">
        <h1
          className={`font-DrukMediumTrial text-3xl tabletMinWidth:text-5xl laptopMinWidth:text-5xl fullHdMinWidth:text-6xl`}
        >
          AntaValley
        </h1>
        <p
          className={`${poppinsFontRegular400.className} text-xs py-3 font-bold `}
        >
          Tools : HTML, CSS, javascript, and GSAP Scrolltriger
        </p>
        <p
          className={`${roboto.className} text-xs laptopMinWidth:text-sm fullHdMinWidth:text-lg`}
        >
          AntaValley is Resort Holding Landing Page, create by motion loop style
          based on 2D Assets. Its combine unique, interactive with visual
          pleasing website, so it can make good assessment for the user when
          they want to find information about resort on the internet. <br />{" "}
        </p>
        <div className={`flex ${roboto.className} pt-3 text-xs`}>
          <Link
            href="https://narasihistorian.github.io/prototype-landingpage//"
            target="_blank"
          >
            <p className="font-bold border-b text-zinc-700 border-gray-600">
              Visit source
            </p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-1">
        <div className="flex-1 border border-stone-700 p-3 col-span-2 laptopMinWidth:col-span-1">
          <Image
            src={mockup5}
            alt="mockup1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
          />
        </div>
        <div className="flex-1 border border-stone-700 p-3 col-span-2 laptopMinWidth:col-span-1">
          <Image
            src={mockup6}
            alt="mockup3"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}
