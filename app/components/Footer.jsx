import Link from "next/link";
import { FaCopyright } from "react-icons/fa6";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative mb-10 ">
      <small className="gap-4 w-full flex flex-col justify-between items-center desktopMinWidth:flex-row">
        <div className="flex items-center gap-2">
          <FaCopyright size={20} />
          <p className="text-xs font-bold">2024 Agung Rosyandi</p>
        </div>

        <div>
          <ul className="flex items-center gap-3">
            <li className="">
              <div className="flex items-center">
                <Link
                  rel="preload"
                  target="_blank"
                  href="https://www.linkedin.com/in/agung-rosyandi-3215841a2/"
                >
                  <IoLogoLinkedin size={20} />
                </Link>
              </div>
            </li>
            <li className="">
              <div className="flex items-center">
                <Link
                  rel="preload"
                  target="_blank"
                  href="https://github.com/agungrosyandi"
                >
                  <IoLogoGithub size={20} />
                </Link>
              </div>
            </li>
            <li className="">
              <div className="flex items-center">
                <Link rel="preload" href="mailto:agungrosyandi@gmail.com">
                  <MdEmail size={20} />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </small>
    </footer>
  );
}
