import { poppinsFontRegular400 } from "@/app/lib/font";

export default function TitleDescription({ children }) {
  return (
    <h1
      className={`${poppinsFontRegular400.className} font-bold text-2xl text-[#000000] tabletMinWidth:text-3x`}
    >
      {children}
    </h1>
  );
}
