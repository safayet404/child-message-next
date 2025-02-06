import Image from "next/image";
import verticalAd from "@/assets/vertical add details page.png";

export default function VerticalAddLayout() {
  return (
    <div className="h-[400px]">
      <Image
        src={verticalAd}
        className="h-full w-full"
        width={300}
        height={500}
        alt="verticalAd"
      />
    </div>
  );
}
