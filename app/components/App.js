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
      <section id="home" className="section-style-home">
        <div className="relative text-[#464646]">
          <div className="grid grid-cols-2 grid-flow-dense gap-5 py-5 laptopMinWidth:grid-cols-4 laptopMinWidth:grid-rows-1">
            <div className="bg-[#FFFAE6] border border-stone-700 rounded-[50px] shadow-xl flex-1 col-span-2 tabletMinWidth:col-span-2 tabletMinWidth:row-span-2 tabletMinWidth:col-start-1 tabletMinWidth:col-end-5 desktopMinWidth:px-0 desktopMinWidth:border-none desktopMinWidth:shadow-none">
              <HomeSections />
            </div>
            <div className="bg-[#FFFAE6] border border-stone-700 rounded-[50px] shadow-xl px-5 py-10 col-span-2 tabletMinWidth:col-start-1 tabletMinWidth:col-end-5 desktopMinWidth:border-none desktopMinWidth:shadow-none">
              <AboutSections />
            </div>
            <div className="bg-[#FFFAE6] border border-stone-700 rounded-[50px] shadow-xl col-span-2 tabletMinWidth:col-span-1 tabletMinWidth:col-start-1 tabletMinWidth:col-end-5">
              <SkillsSections />
            </div>
            <div className="bg-[#FFFAE6] border border-stone-700 rounded-[50px] shadow-xl col-span-2 tabletMinWidth:col-span-1 tabletMinWidth:col-start-1 tabletMinWidth:col-end-5">
              <Skills2Sections />
            </div>
            <div className="bg-[#FFFAE6] border border-stone-700 rounded-[50px] shadow-xl p-4 col-span-2 tabletMinWidth:col-span-1 tabletMinWidth:row-span-1 tabletMinWidth:col-start-1 tabletMinWidth:col-end-5 desktopMinWidth:border-none desktopMinWidth:shadow-none">
              <ClosingSections />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
