"use client";

// home video sections ---------------------------------------------------

const VideoHomeBackground = () => {
  return (
    <>
      <video
        className="relative rounded-[50px] w-full h-full object-cover left-0 right-0 top-0 bottom-0 z-[2]"
        width={1000}
        height={1000}
        src={require("../../../public/video/13.mp4")}
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
        src={require("../../../public/video/14.mp4")}
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
        src={require("../../../public/video/15.mp4")}
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
