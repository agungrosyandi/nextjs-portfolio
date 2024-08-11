import { poppinsFontRegular400, roboto } from "@/app/lib/font";
import Image from "next/image";
import Link from "next/link";

import mockup1 from "../../../public/img/narasihistorian.jpg";

// main components

export default function NarasiHistorian() {
  return (
    <section className="relative gap-5 flex flex-col justify-center items-center desktopMinWidth:gap-2">
      <div className="flex-1 border border-stone-700 p-3 w-[100%]">
        <Image
          src={mockup1}
          alt="mockup1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </div>

      <div className="flex-1 gap-5 flex flex-col pb-5 border-b border-gray-600 desktopMinWidth:border-none desktopMinWidth:gap-2 desktopMinWidth:pb-0">
        <h1
          className={`${poppinsFontRegular400.className} font-bold text-2xl tabletMinWidth:text-3xl desktopMinWidth:text-sm`}
        >
          Blog App ( Beta )
        </h1>
        <p
          className={`${roboto.className} text-xs tabletMinWidth:text-base desktopMinWidth:hidden`}
        >
          Narasihistorian is history content blog with interactive aproach,
          visual pleasing, and smooth and simple responsive layout in the
          desktop, tab or mobile with high quallity content through article.
        </p>
        <div
          className={`${roboto.className} text-xs tabletMinWidth:text-sm desktopMinWidth:text-xs`}
        >
          <Link href="https://narasihistorian.netlify.app/" target="_blank">
            <p className="font-bold text-zinc-700">Visit source</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
