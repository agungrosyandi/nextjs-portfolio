import Link from "next/link";
import { poppinsFontRegular400 } from "../lib/font";

// icons import ----------------------------------------------------

import NavbarMainHome from "./card/NavbarMainHome";
import NavbarBurgerCard from "./card/NavbarBurgerCard";
import NavbarDesktop from "./card/NavbarDesktop";

// main component --------------------------------------------------

const Navbar = () => {
  return (
    <>
      <nav className={`${poppinsFontRegular400.className} relative z-10 py-5`}>
        <div className="w-full flex items-center justify-between">
          <NavbarMainHome>
            <Link href="/">AG</Link>
          </NavbarMainHome>
          <NavbarDesktop />
          <NavbarBurgerCard />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
