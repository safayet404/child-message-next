import { formatImageUrl } from "@/utills/common";
import getEnglishDateInBangla from "@/utills/getEnglishDateInBangla";
import Image from "next/image";
import Link from "next/link";

export default function TitleTimeImageY({
  title,
  slug,
  created_at,
  image,
  className,
}: {
  title: string;
  slug: string;
  created_at: string;
  image: string;
  className?: string;
}) {
  const formattedTime = getEnglishDateInBangla(new Date(created_at));
  return (
    <div className={`${className} flex flex-col gap-y-1.5`}>
      <Link href={`/news/${slug}`} className="font-bold">
        {title}
      </Link>
      <p>{formattedTime}</p>
      <div className="relative h-[160px] overflow-hidden">
        <Image
          src={formatImageUrl(image)}
          className="rounded-md h-full w-full object-cover"
          // fill
          priority
          alt="image"
          width={500}
          height={245}
        />
      </div>
    </div>
  );
}
