"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { routes } from "@/app/lib/routesNavbar";

export default function NavbarDesktop() {
  const activePathname = usePathname();

  return (
    <>
      <ul className="relative text-[#464646] text-xs items-center px-5 py-2 hidden gap-3 desktopMinWidth:flex ">
        {routes.map((route) => (
          <li
            className={clsx(
              "relative z-20 hover:text-[#6d5656] transition pb-3",
              {
                "text-[#392c2ce0]": activePathname === route.path,
                "text-[#464646]": activePathname !== route.path,
              }
            )}
            key={route.path}
          >
            <div className="flex gap-3 bg-[#FFFAE6] drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] items-center rounded-xl shadow-xl py-2 px-2 desktopMinWidth:px-5">
              {route.icon}
              <Link href={route.path} target={route.target}>
                {route.name}
              </Link>
            </div>

            {activePathname === route.path && (
              <motion.div
                layoutId="header-active-link"
                className="bg-[#D0D28F] h-1 w-full absolute bottom-0"
              ></motion.div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
