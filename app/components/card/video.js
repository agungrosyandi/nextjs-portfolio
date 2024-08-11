"use client";

// home video sections ---------------------------------------------------

const VideoHomeBackground = () => {
  return (
    <>
      <video
        className="relative rounded-[50px] w-full h-full object-cover left-0 right-0 top-0 bottom-0 z-[2]"
        width={1000}
        height={1000}
        src={require("../../../public/video/main-home 1000px.mp4")}
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
        className="relative rounded-[50px] w-full h-full object-cover left-0 right-0 top-0 bottom-0 z-[2]"
        width={1000}
        height={1000}
        src={require("../../../public/video/graphic design 1000px.mp4")}
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
        className="relative rounded-[50px] w-full h-full object-cover left-0 right-0 top-0 bottom-0 z-[2]"
        width={1000}
        height={1000}
        src={require("../../../public/video/web development 1000px.mp4")}
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
