import { formatImageUrl } from "@/utills/common";
import getTimeDifference from "@/utills/getTimeDifference";
import Image from "next/image";
import Link from "next/link";

export default function TitleSummaryImageX({
  title,
  summary,
  slug,
  created_at,
  image,
  className,
}: {
  title: string;
  summary: string;
  slug: string;
  created_at: string;
  image: string;
  className?: string;
}) {
  return (
    <Link href={`/news/${slug}`} className="flex flex-col gap-y-2">
      <div className={`${className} grid grid-cols-12 gap-x-6`}>
        <div className="flex flex-col gap-y-1 md:gap-y-3 col-span-7 order-2 md:order-1">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-justify">{summary}</p>
          <p className="text-sm">
            {getTimeDifference(created_at, "bangla")} আগে
          </p>
        </div>
        <div className="relative h-[200px] col-span-5 overflow-hidden order-1 md:order-2">
          <Image
            src={formatImageUrl(image)}
            className="rounded-lg h-full w-full object-cover"
            // fill
            priority
            alt="image"
            width={500}
            height={200}
          />
        </div>
      </div>
    </Link>
  );
}
