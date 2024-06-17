import { roboto } from "../lib/font";

import {
  VideoCamping1,
  VideoCamping2,
  VideoMusicanTrumpet,
  VideoAquarium1,
  VideoAquarium2,
  VideoScooter1,
  VideoDeepsea,
} from "./showchase-components/VideoAssets";

// main components

export default function page() {
  return (
    <section id="relative w-full flex flex-col justify-center items-center">
      <div className="flex-1">
        <h1
          className={`font-DrukMediumTrial text-3xl py-3 tabletMinWidth:text-5xl laptopMinWidth:text-5xl fullHdMinWidth:text-6xl`}
        >
          Graphic & Motion Design
        </h1>
        <p
          className={`${roboto.className} text-xs laptopMinWidth:text-sm fullHdMinWidth:text-lg`}
        >
          Using Adobe Illustrator as an primary tools, basically illustrator is
          tools for the create 2D assets. So with Illustrator, i can create 2D
          object from scratch. Then with the assets which i create from the
          illustrator, i can used them for social media content, motion graphic
          content, or for web material if necessary, depend on situation.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-flow-row-dense gap-2 py-5 laptopMinWidth:gap-3 laptopMinWidth:grid-cols-4 desktopMinWidth:grid-cols-6">
        <div className="flex-1 border border-stone-700 p-3 col-span-2 laptopMinWidth:col-span-3 desktopMinWidth:col-span-4">
          <VideoScooter1 />
        </div>
        <div className="hidden flex-1 border border-stone-700 p-3 col-span-2 laptopMinWidth:block laptopMinWidth:col-span-1 desktopMinWidth:col-span-2">
          <VideoMusicanTrumpet />
        </div>
        <div className=" flex-1 border border-stone-700 p-3 col-span-2 laptopMinWidth:col-span-2 desktopMinWidth:col-span-3">
          <VideoCamping2 />
        </div>
        <div className=" flex-1 border border-stone-700 p-3 col-span-2 laptopMinWidth:col-span-2 desktopMinWidth:col-span-3">
          <VideoCamping1 />
        </div>
        <div className=" flex-1 border border-stone-700 p-3 col-span-2 laptopMinWidth:hidden">
          <VideoAquarium2 />
        </div>
        <div className=" flex-1 border border-stone-700 p-3 col-span-1 laptopMinWidth:col-span-1 desktopMinWidth:col-span-2">
          <VideoAquarium1 />
        </div>
        <div className=" flex-1 border border-stone-700 p-3 col-span-1 laptopMinWidth:col-span-3 desktopMinWidth:col-span-4">
          <VideoDeepsea />
        </div>
      </div>
    </section>
  );
}
