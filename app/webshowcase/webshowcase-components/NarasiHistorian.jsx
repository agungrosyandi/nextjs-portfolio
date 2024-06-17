import { poppinsFontRegular400, roboto } from "@/app/lib/font";
import Image from "next/image";
import Link from "next/link";

import mockup1 from "../../../public/uxdesign assets/TL-ResponsiveMockup-legacy-2.jpg";
import mockup3 from "../../../public/uxdesign assets/desktop cover narasihistorian mock up.jpg";
import mockup4 from "../../../public/uxdesign assets/tab mobile cover narasihistorian mock up.jpg";

// main components

export default function NarasiHistorian() {
  return (
    <>
      <div className="relative flex-1 py-5">
        <h1
          className={`font-DrukMediumTrial text-3xl tabletMinWidth:text-5xl laptopMinWidth:text-5xl fullHdMinWidth:text-6xl`}
        >
          Narasihistorian
        </h1>
        <p
          className={`${poppinsFontRegular400.className} text-xs py-3 font-bold `}
        >
          Tools : Figma, Next.js, TailwindCSS & netlify
        </p>
        <p
          className={`${roboto.className} text-xs laptopMinWidth:text-sm fullHdMinWidth:text-lg`}
        >
          Narasihistorian is history content blog, create by owner who graduate
          in international relations degree and have passion about history. He
          trying to share his passion about history with interactive aproach and
          visual pleasing with high quallity video content and web through
          article.
        </p>
        <div className={`flex gap-3 ${roboto.className} pt-3 text-xs`}>
          <Link href="https://narasihistorian.netlify.app/" target="_blank">
            <p className="font-bold border-b text-zinc-700 border-gray-600 ">
              Visit source
            </p>
          </Link>
          <Link
            href="https://agungrosyandi.github.io/mystory/html/uxdesign.html"
            target="_blank"
          >
            <p className="font-bold border-b text-zinc-700 border-gray-600">
              Take a look at the design process
            </p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-1">
        <div className="flex-1 border border-stone-700 p-3 col-span-2 laptopMinWidth:hidden">
          <Image
            src={mockup1}
            alt="mockup1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
          />
        </div>
        <div className="flex-1 border border-stone-700 p-3 col-span-2 tabletMinWidth:col-span-2 laptopMinWidth:col-span-1">
          <Image
            src={mockup3}
            alt="mockup3"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
          />
        </div>
        <div className="flex-1 border border-stone-700 p-3 col-span-2 tabletMinWidth:col-span-2 laptopMinWidth:col-span-1">
          <Image
            src={mockup4}
            alt="mockup4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}
