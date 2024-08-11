import { roboto } from "@/app/lib/font";

export default function SkillsContainerTitle({ title, tools, paragraph }) {
  return (
    <div className="flex shadow-xl flex-col gap-3 pb-10 justify-center items-center desktopMinWidth:items-start desktopMinWidth:shadow-none desktopMinWidth:pb-0">
      <h1
        className={`font-DrukMediumTrial text-[#FFFAE6] drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] text-4xl tabletMinWidth:text-7xl desktopMinWidth:text-7xl`}
      >
        {title}
      </h1>
      <p className="drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] text-xs tabletMinWidth:text-sm desktopMinWidth:py-2 desktopMinWidth:px-5 desktopMinWidth:bg-[#FFFAE6] desktopMinWidth:border desktopMinWidth:border-stone-700 desktopMinWidth:shadow-xl">
        {tools}
      </p>
      <p
        className={`${roboto.className} drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] text-xs px-5 text-center tabletMinWidth:text-base desktopMinWidth:text-start desktopMinWidth:p-5 desktopMinWidth:bg-[#FFFAE6] desktopMinWidth:border desktopMinWidth:border-stone-700 desktopMinWidth:shadow-xl desktopMinWidth:text-sm fullHdMinWidth:text-base`}
      >
        {paragraph}
      </p>
    </div>
  );
}
