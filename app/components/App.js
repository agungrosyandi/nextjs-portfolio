import React from "react";
import HomeSections from "./card/home";
import AboutSections from "./card/about";
import SkillsSections from "./card/skills";
import Skills2Sections from "./card/skills2";
import ClosingSections from "./card/closing";

// main component --------------------------------------------------

const Home = () => {
  return (
    <>
      <section id="home" className="section-style-home p-5">
        <div className="relative text-stone-800 mt-5 rounded-[20px] tabletMinWidth:mt-10 fullHdMinWidth:px-28">
          <div className="grid grid-cols-2 grid-flow-dense gap-1 py-5 desktopMinWidth:grid-cols-4 desktopMinWidth:grid-rows-1 desktopMinWidth:gap-2">
            <div className="bg-stone-200 shadow-xl p-4 my-5 rounded-xl flex-1 col-span-2 desktopMinWidth:px-0 desktopMinWidth:col-span-1 desktopMinWidth:row-span-3">
              <HomeSections />
            </div>
            <div className="bg-stone-200 shadow-xl px-5 py-10 my-5 rounded-xl col-span-2 desktopMinWidth:mb-0 desktopMinWidth:col-start-2 desktopMinWidth:col-end-4 fullHdMinWidth:col-end-5">
              <AboutSections />
            </div>
            <div className="bg-stone-200 shadow-xl p-4 my-5 rounded-xl col-span-2 laptopMinWidth:col-span-1 desktopMinWidth:col-span-1 desktopMinWidth:col-start-2 desktopMinWidth:col-end-2 desktopMinWidth:mt-0 desktopMinWidth:mb-3">
              <SkillsSections />
            </div>
            <div className="bg-stone-200 shadow-xl p-4 my-5 rounded-xl col-span-2 laptopMinWidth:col-span-1 desktopMinWidth:col-span-1 desktopMinWidth:col-start-3 desktopMinWidth:col-end-3 desktopMinWidth:mt-0 desktopMinWidth:mb-3">
              <Skills2Sections />
            </div>
            <div className="bg-stone-200 shadow-xl p-4 my-5 rounded-xl col-span-2 desktopMinWidth:col-span-1 desktopMinWidth:row-span-2 desktopMinWidth:col-start-4 desktopMinWidth:col-end-4 desktopMinWidth:mb-4 fullHdMinWidth:mb-5 fullHdMinWidth:mt-0">
              <ClosingSections />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
