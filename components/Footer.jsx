import { Copyright } from "lucide-react";
import Description from "./font-description-component/description";
import LinkPersonalWeb from "./footer-sections/link-personal-web";

export default function Footer() {
  return (
    <div className="relative w-full h-[10vh] flex items-center justify-between">
      <div className="flex flex-row gap-2 items-center">
        <Copyright size={20} />
        <Description>2024 Agung Rosyandi</Description>
      </div>

      <LinkPersonalWeb />
    </div>
  );
}
