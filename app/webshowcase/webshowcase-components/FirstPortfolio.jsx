import Image from "next/image";
import { poppinsFontRegular400, roboto } from "@/app/lib/font";
import Link from "next/link";

import mockup7 from "../../../public/uxdesign assets/first-portpolio-agung.jpg";

export default function FirstPortfolio() {
  return (
    <>
      <div className="relative flex-1 mt-10 pt-10 pb-5 border-t border-gray-600">
        <h1
          className={`font-DrukMediumTrial text-3xl tabletMinWidth:text-5xl laptopMinWidth:text-5xl fullHdMinWidth:text-6xl`}
        >
          Web portfolio V1
        </h1>
        <p
          className={`${poppinsFontRegular400.className} text-xs py-3 font-bold `}
        >
          Tools : HTML, CSS, javascript, and GSAP ScrollSmoother
        </p>
        <p
          className={`${roboto.className} text-xs laptopMinWidth:text-sm fullHdMinWidth:text-lg`}
        >
          This is my first website. As a graphic design, i want to expand and
          improve my soft-skills. Because my basics on the design software and
          i'm also like computer system, I thought why don't I learn how to make
          a system and combine with my knowledge about design. So based on this
          motivation, make me plunge into the world of programming.
        </p>
        <div className={`flex ${roboto.className} pt-3 text-xs`}>
          <Link href="https://agungrosyandi.github.io/mystory/" target="_blank">
            <p className="font-bold border-b text-zinc-700 border-gray-600">
              Visit source
            </p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-1 pb-10">
        <div className="flex-1 border border-stone-700 p-3 col-span-2 ">
          <Image
            src={mockup7}
            alt="mockup1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}
