import { roboto } from "@/app/lib/font";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import image from "@/public/img/mu-showcase-background.jpg";
import TitleDescription from "../font-description-component/title-description";
import Description from "../font-description-component/description";

export default function Contact() {
  return (
    <div className="relative gap-5 flex flex-col desktopMinWidth:flex-row">
      <Image
        className="rounded-2xl w-full h-[full] tabletMinWidth:h-[full] desktopMinWidth:h-[20rem] fullHdMinWidth:h-[30rem]"
        src={image}
        alt=""
        style={{ objectFit: "cover" }}
      />

      <div className="w-full flex flex-col justify-center items-center ">
        <TitleDescription>Lets Working Together !</TitleDescription>
        <Description>
          Interesting isnt ? how about working together ? :)
        </Description>
        <Button className="mt-3" variant={"white"}>
          get in touch with me
        </Button>
      </div>
    </div>
  );
}
