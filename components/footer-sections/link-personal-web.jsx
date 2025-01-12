import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { User } from "lucide-react";
import Link from "next/link";

export default function LinkPersonalWeb() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Personal Page</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link
              href={"https://agungrosyandi.github.io/mystory/"}
              target="_blank"
            >
              Agung V1
            </Link>
            <MenubarShortcut>
              <User size={15} />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Link href={"/"}>
              Agung V2
            </Link>
            <MenubarShortcut>
              <User size={15} />
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
