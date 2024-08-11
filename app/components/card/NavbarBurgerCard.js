import Link from "next/link";

import { TbWorldWww } from "react-icons/tb";
import { SiAffinitydesigner } from "react-icons/si";
import { IoBookSharp } from "react-icons/io5";
import NavbarMenuCard from "./NavbarMenuCard";

export default function NavbarBurgerCard() {
  return (
    <>
      <ul className=" text-[#464646] text-xs py-2 gap-3 flex desktopMinWidth:hidden">
        <NavbarMenuCard>
          <Link rel="preload" href="/webshowcase">
            <TbWorldWww size={20} />
          </Link>
        </NavbarMenuCard>

        <NavbarMenuCard>
          <Link rel="preload" href="/showchase">
            <SiAffinitydesigner size={20} />
          </Link>
        </NavbarMenuCard>

        <NavbarMenuCard>
          <Link
            rel="preload"
            href="https://drive.google.com/uc?export=download&id=1WxdDJZkxp1xxealLDvVM6VeASpha6C-x"
          >
            <IoBookSharp size={20} />
          </Link>
        </NavbarMenuCard>
      </ul>
    </>
  );
}
