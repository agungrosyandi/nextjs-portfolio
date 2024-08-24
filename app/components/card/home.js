import { poppinsFontRegular400, roboto } from "@/app/lib/font";
import { VideoHomeBackground } from "./video";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const HomeSections = () => {
  return (
    <section className="relative text-[#430000] py-5 w-full h-full flex flex-col justify-center items-center desktopMinWidth:flex-row desktopMinWidth:py-5 ">
      <div className="flex-1 gap-4 flex flex-col justify-center items-center text-center desktopMinWidth:text-start desktopMinWidth:items-start desktopMinWidth:gap-5 ">
        <p
          className={`${poppinsFontRegular400.className} text-xs text-[#FFFAE6] drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] tabletMinWidth:text-base`}
        >
          Hi, My Name is
        </p>

        <h1
          className={`font-DrukMediumTrial text-[#FFFAE6] drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] text-5xl tabletMinWidth:text-7xl fullHdMinWidth:text-8xl`}
        >
          Agung Rosyandi
        </h1>

        <p
          className={`${roboto.className} bg-[#FFFAE6] border border-stone-700 shadow-xl rounded-2xl p-5 drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] text-xs tabletMinWidth:text-base desktopMinWidth:text-sm fullHdMinWidth:text-base`}
        >
          Graphic and Web designer based in Bandung West Java Indonesia.
          Currently my strong focus on Web development especialy Front-end with
          combine my skills in Adobe Creative Suits to enhance my workflow.
        </p>
        <div className="flex gap-3 px-5 py-2 bg-[#FFFAE6] border border-stone-700 shadow-xl rounded-2xl drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] items-center text-xs tabletMinWidth:text-base desktopMinWidth:py-2  desktopMinWidth:text-sm fullHdMinWidth:text-base">
          <MdEmail size={20} />

          <Link rel="preload" href="mailto:agungrosyandi@gmail.com">
            Send me Email
          </Link>
        </div>
      </div>
      <div className="relative flex-1 w-[100%] shadow-xl desktopMinWidth:shadow-none">
        <VideoHomeBackground />
      </div>
    </section>
  );
};

export default HomeSections;
