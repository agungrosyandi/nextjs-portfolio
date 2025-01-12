import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function HomeMenu() {
  return (
    <div className="flex flex-row gap-1 mt-5">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Get in Touch with me</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href={"mailto:agungrosyandi@gmail.com"}>Send me Email</Link>
              <MenubarShortcut>
                <Mail size={15} />
              </MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Find me on Social Media</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link
                href={"https://www.linkedin.com/in/agung-rosyandi-3215841a2/"}
                target="_blank"
              >
                Linkeind
              </Link>
              <MenubarShortcut>
                <Linkedin size={15} />
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Link href={"https://github.com/agungrosyandi"} target="_blank">
                Github
              </Link>
              <MenubarShortcut>
                <Github size={15} />
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Link
                href={
                  "https://drive.google.com/uc?export=download&id=1CIrk60njSE6n_0FJT69SBONGBwul1u7d"
                }
              >
                My Resume
              </Link>
              <MenubarShortcut>
                <FileText size={15} />
              </MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
