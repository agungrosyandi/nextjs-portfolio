import Description from "../font-description-component/description";
import HomeMenu from "./home-menu";
import TitleHomeMenu from "./title-home-menu";
import HomeImage from "./home-image";
import { VideoHomeBackground } from "./video";

export default function HomeSections() {
  return (
    <div className="relative flex flex-col gap-10 desktopMinWidth:flex-row desktopMinWidth:items-center">
      <div className="relative flex-1 gap-5 flex flex-col justify-start items-start text-start desktopMinWidth:pr-[5rem]">
        <TitleHomeMenu />
        <Description>
          Web designer and Front End Web Developer based in Bandung West Java
          Indonesia. I build digital design, interactive landing page.
          Accessible, inclusive products for multimedia and the web
        </Description>
        <HomeMenu />
      </div>

      <VideoHomeBackground />

      {/* <HomeImage /> */}
    </div>
  );
}
