import { roboto } from "@/app/lib/font";

export default function Description({ children }) {
  return (
    <p className={`${roboto.className} text-xs tabletMinWidth:text-sm`}>
      {children}
    </p>
  );
}
