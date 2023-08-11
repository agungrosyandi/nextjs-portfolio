import React from "react";
import Link from "next/link";

// main component ----------------------------------------------------

const Closing = () => {
  return (
    <section id="vector" className="section-without-minheight">
      <div className="relative text-center flex flex-col justify-center items-center w-full h-full px-5 pt-5 pb-20 tabletMinWidth:px-10 tabletMinWidth:pt-10 laptopMinWidth:px-20">
        <div className="relative flex-1">
          <h1
            className={`font-MonaSansUltraLighNarrow text-5xl pt-4 tabletMinWidth:text-7xl laptopMinWidth:text-8xl fullHdMinWidth:text-9xl`}
          >
            Thank's for your time
          </h1>
          <div className="relative py-5">
            <Link href="/">
              <button className="text-xs border-2 border-gray-500 py-2 px-7 rounded-full tabletMinWidth:text-base ">
                Back to Main Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
