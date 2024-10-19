"use client";

import Image from "next/image";
import gambar1 from "../../public/img/5.jpg";
import gambar2 from "../../public/img/6.jpg";
import gambar3 from "../../public/img/7.jpg";

const VideoCamping1 = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../public/video/camping web legacy.mp4")}
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
        src={require("../../public/video/camping 2 web legacy.mp4")}
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
        src={require("../../public/video/musician trumpet_1.mp4")}
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
        src={require("../../public/video/aquarium 2.mp4")}
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
        src={require("../../public/video/scooter delivery-_1.mp4")}
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
        src={require("../../public/video/deepsea paralalex loop.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const Fish11000px = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl  object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../public/video/Fish 1 1000px.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const Fish21000px = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl  object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../public/video/fish 2 all  1000px.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const Scooter21000px = () => {
  return (
    <>
      <video
        className="relative w-full h-full shadow-xl  object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={require("../../public/video/scooter 1000px.mp4")}
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
    </>
  );
};

const Pic1 = () => {
  return (
    <>
      <Image
        className="relative w-full h-full shadow-xl  object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={gambar1}
        loading="lazy"
        alt="pic 1 gambar"
      />
    </>
  );
};

const Pic2 = () => {
  return (
    <>
      <Image
        className="relative w-full h-full shadow-xl  object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={gambar2}
        loading="lazy"
        alt="pic 1 gambar"
      />
    </>
  );
};

const Pic3 = () => {
  return (
    <>
      <Image
        className="relative w-full h-full shadow-xl  object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src={gambar3}
        loading="lazy"
        alt="pic 1 gambar"
      />
    </>
  );
};

export {
  VideoCamping1,
  VideoCamping2,
  VideoMusicanTrumpet,
  VideoAquarium1,
  VideoScooter1,
  VideoDeepsea,
  Fish11000px,
  Fish21000px,
  Scooter21000px,
  Pic1,
  Pic2,
  Pic3,
};
