import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MenuNavbar() {
  return (
    <Select>
      <SelectTrigger className="w-[115px]">
        <SelectValue placeholder="Personal Page" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem>Agung V1</SelectItem>
          <SelectItem>Agung V2</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
