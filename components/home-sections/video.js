"use client";

// home video sections ---------------------------------------------------

export const VideoHomeBackground = () => {
  return (
    <div className="flex-1">
      <video
        className="relative rounded-[50px] w-full h-full object-cover left-0 right-0 top-0 bottom-0 z-[2]"
        width={1000}
        height={1000}
        src={require("../../public/video/web development 1000px_1.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </div>
  );
};
