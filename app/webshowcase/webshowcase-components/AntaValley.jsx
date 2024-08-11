import { poppinsFontRegular400, roboto } from "@/app/lib/font";
import Link from "next/link";
import Image from "next/image";

import mockup5 from "../../../public/img/antavalley.jpg";

export default function AntaValley() {
  return (
    <section className="relative gap-5 flex flex-col justify-center items-center desktopMinWidth:gap-2">
      <div className="flex-1 border border-stone-700 p-3">
        <Image
          src={mockup5}
          alt="mockup1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </div>

      <div className="relative gap-5 flex-1 flex flex-col pb-5 border-b border-gray-600 desktopMinWidth:border-none desktopMinWidth:gap-2 desktopMinWidth:pb-0">
        <h1
          className={`${poppinsFontRegular400.className} font-bold text-2xl tabletMinWidth:text-3xl desktopMinWidth:text-sm`}
        >
          Landing Page ( Beta )
        </h1>
        <p
          className={`${roboto.className} text-xs tabletMinWidth:text-base desktopMinWidth:hidden`}
        >
          AntaValley is Resort Holding Landing Page create by motion design with
          2D style. Its combine unique, interactive with visual pleasing
          website, so it can make good assessment for the user when they want to
          find information about resort on the internet.
        </p>
        <div
          className={`${roboto.className} text-xs tabletMinWidth:text-sm desktopMinWidth:text-xs`}
        >
          <Link
            href="https://narasihistorian.github.io/prototype-landingpage//"
            target="_blank"
          >
            <p className="font-bold border-gray-600">Visit source</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
