// video assets import ----------------------------------------------------

const VideoCamping1 = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/camping web legacy.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoCamping2 = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/camping 2 web legacy.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoMusicanTrumpet = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/musician trumpet_1.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoAquarium1 = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/aquarium 2.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoAquarium2 = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/aquarium-.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoScooter1 = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/scooter delivery-_1.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const VideoDeepsea = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl  object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../../public/video/deepsea paralalex loop.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

export {
  VideoCamping1,
  VideoCamping2,
  VideoMusicanTrumpet,
  VideoAquarium1,
  VideoAquarium2,
  VideoScooter1,
  VideoDeepsea,
};
