import Image from "next/image";
import imageHome from "@/public/img/agung-bg-v2-new.jpg";

export default function HomeImage() {
  return (
    <div className="flex-1">
      <Image
        src={imageHome}
        alt=""
        style={{ objectFit: "cover" }}
        width={1000}
        height={1000}
      />
    </div>
  );
}
