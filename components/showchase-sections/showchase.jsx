import ShowchaseCarouseiComponent from "./showchase-carousei-component";
import TitleDescription from "../font-description-component/title-description";
import Description from "../font-description-component/description";

export default function Showchase() {
  return (
    <div className="relative gap-5 flex flex-col ">
      <div className="w-full gap-2 flex flex-col justify-center items-center text-center desktopMinWidth:px-[5rem] fullHdMinWidth:px-[10rem]">
        <TitleDescription>
          <span className="text-base tabletMinWidth:text-xl">
            Take a look my showchase
          </span>
        </TitleDescription>
        <Description>
          <span className="text-black/50">
            Nowadays my main focus is Front-End Development with support by my
            basic in graphic design and combine them to enhance my workflow.
            Feel free take a look some my own project which I've finished
            recently below.
          </span>
        </Description>
      </div>
      <ShowchaseCarouseiComponent />
    </div>
  );
}
