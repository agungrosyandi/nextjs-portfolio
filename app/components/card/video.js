import React from "react";

// home video sections ---------------------------------------------------

const VideoHomeBackground = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/8.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const GraphicDesignVideo = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/5.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const WebDevelopmentVideo = () => {
  return (
    <>
      <video
        className="relative w-full h-full rounded-[20px] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/6.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

export { GraphicDesignVideo, VideoHomeBackground, WebDevelopmentVideo };
