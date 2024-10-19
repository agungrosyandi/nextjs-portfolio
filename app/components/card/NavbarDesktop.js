import Link from "next/link";
import { routes } from "@/app/lib/routesNavbar";

export default function NavbarDesktop() {
  return (
    <>
      <ul className="relative text-[#464646] flex flex-row text-xs items-center justify-center py-2">
        {routes.map((route) => (
          <li key={route.path}>
            <div className="flex flex-row font-bold bg-[#ffffff] drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] items-center rounded-xl shadow-sm py-2 px-2 text-xs desktopMinWidth:px-5 desktopMinWidth:text-xs fullHdMinWidth:text-sm">
              {route.icon}
              <Link href={route.path} target={route.target}>
                {route.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
