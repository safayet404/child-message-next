import Image from "next/image";
export default function VerticalAddLayout({side_ad} :{side_ad : string} ) {
  return (
    <div className="h-[400px]">
      <Image
        src={side_ad || "path/image.jpg"}
        className="h-full w-full"
        width={300}
        height={500}
        alt="verticalAd"
      />
    </div>
  );
}
