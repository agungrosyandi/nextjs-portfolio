"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import showhcase1 from "@/public/img/narasihistorian bg new.jpg";
import showhcase2 from "@/public/img/khaira-skincare-bg-layout-new.jpg";
import showhcase3 from "@/public/img/wonderful-indonesia-new-bg.jpg";
import showhcase4 from "@/public/img/antavalley-bg.jpg";
import showhcase5 from "@/public/img/one-piece-new-bg.jpg";
import showhcase6 from "@/public/img/mu-showcase-background.jpg";

import Link from "next/link";
import { Button } from "../ui/button";
import { roboto } from "@/app/lib/font";

export default function ShowchaseCarouseiComponent() {
  const showchaseCarousei = [
    {
      id: 1,
      image: showhcase1,
      title: "History Blog Web Beta App",
      description: "Tool: NextJS, Javascript, MonggoDB, Prisma ORM",
      button: "visit page",
      link: "https://narasihistorian.netlify.app/",
    },
    {
      id: 2,
      image: showhcase2,
      title: "Skincare Product Landing Page",
      description: "Tool: ReactJS, Javascript, TailwindCSS, netlify",
      button: "visit page",
      link: "https://khairaskincare.netlify.app/",
    },
    {
      id: 3,
      image: showhcase3,
      title: "Wonderful Indonesia Redesign Beta Apps",
      description: "Tool: NextJS, Typescript, Postgresql, Prisma ORM",
      button: "visit page",
      link: "https://wonderfull-indonesia-redesign-web.vercel.app/",
    },
    {
      id: 4,
      image: showhcase4,
      title: "Motion Style Landing Page",
      description: "Tool: HTML, CSS, Javascript, GSAP",
      button: "visit page",
      link: "https://narasihistorian.github.io/prototype-landingpage//",
    },
    {
      id: 5,
      image: showhcase5,
      title: "Anime Theme Landing Page",
      description: "Tool: HTML, CSS, Javascript, GSAP, BarbaJS",
      button: "visit page",
      link: "https://narasihistorian.github.io/one-piece-landing-page/",
    },

    {
      id: 6,
      image: showhcase6,
      title: "Let's Working Together",
      description: "interesting isnt ? get in touch with me",
      button: "Send me email",
      link: "mailto:agungrosyandi@gmail.com",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        speed={1500}
        className="w-full"
      >
        {showchaseCarousei.map((showcase) => (
          <SwiperSlide key={showcase.id}>
            <div className="relative">
              <div className="flex flex-1 flex-col desktopMinWidth:flex-row">
                <div className="relative flex-1 w-full">
                  <Image
                    src={showcase.image}
                    alt={`Slide ${showcase.id}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center items-center text-center gap-5 p-10">
                  <h1 className="text-sm font-bold tabletMinWidth:text-xl">
                    {showcase.title}
                  </h1>
                  <p
                    className={`${roboto.className} text-xs text-black/50 text-center tabletMinWidth:text-sm`}
                  >
                    {showcase.description}
                  </p>
                  <Link href={showcase.link} target="_blank">
                    <Button variant={"white"}>{showcase.button}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
