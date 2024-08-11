import Image from "next/image";
import { poppinsFontRegular400, roboto } from "@/app/lib/font";
import Link from "next/link";

import mockup7 from "../../../public/img/20.jpg";

export default function FirstPortfolio() {
  return (
    <section className="relative gap-5 flex flex-col justify-center items-center desktopMinWidth:gap-2">
      <div className="flex-1 border border-stone-700 p-3 ">
        <Image
          src={mockup7}
          alt="mockup1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </div>

      <div className="relative flex-1 gap-4 flex flex-col pb-5 border-b border-gray-600 desktopMinWidth:border-none desktopMinWidth:gap-2 desktopMinWidth:pb-0">
        <h1
          className={`${poppinsFontRegular400.className} font-bold text-2xl tabletMinWidth:text-3xl desktopMinWidth:text-sm`}
        >
          Portfolio V1
        </h1>
        <p
          className={`${roboto.className} text-xs tabletMinWidth:text-base desktopMinWidth:hidden`}
        >
          This is my first website. As an graphic designer, I want to expand and
          improve my soft-skills. Based on my basics in the design software and
          computer system, I try combine both of them. The result is make me
          plunge into Web Development especially front-end.
        </p>
        <div
          className={` ${roboto.className} text-xs tabletMinWidth:text-sm desktopMinWidth:text-xs`}
        >
          <Link href="https://agungrosyandi.github.io/mystory/" target="_blank">
            <p className="font-bold text-zinc-700">Visit source</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
