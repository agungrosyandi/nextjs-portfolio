import Link from "next/link";
import { FaCopyright } from "react-icons/fa6";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative mt-auto h-[3vh] mb-5 gap-2 flex flex-row justify-between items-center">
      <div className="flex items-center gap-2">
        <FaCopyright size={20} />
        <small className="text-xs font-bold">2024 Agung Rosyandi</small>
      </div>

      <div className="flex items-center gap-3">
        <Link
          rel="preload"
          target="_blank"
          href="https://www.linkedin.com/in/agung-rosyandi-3215841a2/"
        >
          <IoLogoLinkedin size={20} />
        </Link>
        <Link
          rel="preload"
          target="_blank"
          href="https://github.com/agungrosyandi"
        >
          <IoLogoGithub size={20} />
        </Link>
        <Link rel="preload" href="mailto:agungrosyandi@gmail.com">
          <MdEmail size={20} />
        </Link>
      </div>
    </footer>
  );
}
