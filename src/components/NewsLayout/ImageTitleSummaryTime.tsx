import { formatImageUrl } from "@/utills/common";
import getTimeDifference from "@/utills/getTimeDifference";
import Image from "next/image";
import Link from "next/link";

export default function ImageTitleSummaryTime({
  title,
  summary,
  slug,
  created_at,
  image,
  className,
  image_height,
}: {
  title: string;
  summary: string;
  slug: string;
  created_at: string;
  image: string;
  image_height?: number;
  className?: string;
}) {
  return (
    <Link href={`/news/${slug}`} className="flex flex-col gap-y-2">
      <div className={`${className} flex flex-col gap-y-2`}>
        <div
          className={`relative h-[${
            image_height ? image_height : "250"
          }px] overflow-hidden`}
        >
          <Image
            src={formatImageUrl(image)}
            className="rounded-lg h-full w-full object-cover"
            // fill
            priority
            alt="image"
            height={250}
            width={500}
          />
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-justify">{summary}</p>
        <p className="text-sm">
          {" "}
          {getTimeDifference(created_at, "bangla")} আগে
        </p>
      </div>
    </Link>
  );
}
