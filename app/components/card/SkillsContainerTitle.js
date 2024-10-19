import { roboto } from "@/app/lib/font";

export default function SkillsContainerTitle({ title, tools, paragraph }) {
  return (
    <div className="flex w-full p-10 bg-[#ffffff] border border-stone-700 shadow-sm rounded-2xl drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] flex-col gap-5 justify-center items-center text-center">
      <h1
        className={`font-DrukMediumTrial text-5xl tabletMinWidth:text-7xl desktopMinWidth:text-7xl`}
      >
        {title}
      </h1>
      <p className="text-xs tabletMinWidth:text-sm desktopMinWidth:bg-[#FFFAE6]">
        {tools}
      </p>
      <p
        className={`${roboto.className} text-xs text-center tabletMinWidth:text-base desktopMinWidth:border-stone-700 desktopMinWidth:text-sm fullHdMinWidth:text-base`}
      >
        {paragraph}
      </p>
    </div>
  );
}
