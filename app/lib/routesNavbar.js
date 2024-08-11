import { TbWorldWww } from "react-icons/tb";
import { IoBookSharp } from "react-icons/io5";
import { SiAffinitydesigner } from "react-icons/si";
import { MdHomeMax } from "react-icons/md";

export const routes = [
  {
    icon: <MdHomeMax />,
    name: "Main Home",
    path: "/",
  },
  {
    icon: <TbWorldWww />,
    name: "Web Dev",
    path: "/webshowcase",
  },
  {
    icon: <SiAffinitydesigner />,
    name: "Graphic Design",
    path: "/showchase",
  },
  {
    icon: <IoBookSharp />,
    name: "Resume",
    path: "https://drive.google.com/uc?export=download&id=1WxdDJZkxp1xxealLDvVM6VeASpha6C-x",
  },
];
