import { poppinsFontRegular400 } from "../lib/font";
import NavbarDesktop from "./card/NavbarDesktop";

// main component --------------------------------------------------

const Navbar = () => {
  return (
    <nav className={`${poppinsFontRegular400.className} relative z-10 py-2`}>
      <div className="w-full flex items-center justify-end desktopMinWidth:justify-end">
        <NavbarDesktop />
      </div>
    </nav>
  );
};

export default Navbar;
