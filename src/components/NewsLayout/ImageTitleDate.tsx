import { formatImageUrl } from "@/utills/common";
import getEnglishDateInBangla from "@/utills/getEnglishDateInBangla";
import Image from "next/image";
import Link from "next/link";

export default function ImageTitleDate({
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
    <Link href={`/news/${slug}`} className="flex flex-col gap-y-2">
      <div className={`${className} flex flex-col gap-y-2`}>
        <div className="relative h-[187px] overflow-hidden">
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
        <h3 className="font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h3>
        <p className="text-sm">{formattedTime}</p>
      </div>
    </Link>
  );
}
