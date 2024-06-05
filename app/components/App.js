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
      <section
        id="home"
        className="section-style-home px-5 pb-5 desktopMinWidth:px-14 fullHdMinWidth:px-32"
      >
        <div className="relative text-[#31363F]">
          <div className="grid grid-cols-2 grid-flow-dense gap-5 py-5 laptopMinWidth:grid-cols-4 laptopMinWidth:grid-rows-1">
            <div className="bg-stone-100 shadow-xl flex-1 col-span-2 laptopMinWidth:col-span-2 laptopMinWidth:row-span-2 laptopMinWidth:col-start-1 laptopMinWidth:col-end-5 desktopMinWidth:shadow-none desktopMinWidth:pb-10 desktopMinWidth:px-0">
              <HomeSections />
            </div>
            <div className="bg-stone-100 shadow-xl px-5 py-10 col-span-2 laptopMinWidth:col-start-1 laptopMinWidth:col-end-5 desktopMinWidth:shadow-none ">
              <AboutSections />
            </div>
            <div className="bg-stone-100 shadow-xl col-span-2 laptopMinWidth:col-span-1 laptopMinWidth:col-start-1 laptopMinWidth:col-end-5 desktopMinWidth:shadow-none">
              <SkillsSections />
            </div>
            <div className="bg-stone-100 shadow-xl col-span-2 laptopMinWidth:col-span-1 laptopMinWidth:col-start-1 laptopMinWidth:col-end-5 desktopMinWidth:shadow-none">
              <Skills2Sections />
            </div>
            <div className="bg-stone-100 shadow-xl p-4 col-span-2 laptopMinWidth:col-span-1 laptopMinWidth:row-span-1 laptopMinWidth:col-start-1 laptopMinWidth:col-end-5 desktopMinWidth:shadow-none">
              <ClosingSections />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
