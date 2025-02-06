import { formatImageUrl } from "@/utills/common";
import Image from "next/image";
import getTimeDifference from "@/utills/getTimeDifference";
import Link from "next/link";

export default function TopSectionFirstNewsLayout({
  news,
}: {
  news: {
    title: string;
    slug: string;
    summary_description: string;
    summary_image: string;
    created_at: string;
  };
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <Link href={`/news/${news.slug}`}>
        <h2 className="text-primary text-xl md:text-2xl font-bold overflow-hidden text-ellipsis md:whitespace-nowrap md:max-h-[1.2em] md:line-clamp-1 text-justify">
          {news.title}
        </h2>
      </Link>
      <p className="text-defaultTextColor text-sm font-light">
        {getTimeDifference(news.created_at, "bangla")} আগে
      </p>
      <p className="text-defaultTextColor text-sm md:text-base text-justify leading-relaxed">
        {news.summary_description}
        <Link
          href={`/news/${news.slug}`}
          className="ml-1 text-primary px-3 py-2 rounded"
        >
          আরও পড়ুন
        </Link>
      </p>
      <div className="relative h-[300px] md:h-[350px] overflow-hidden">
        <Image
          src={`${formatImageUrl(news.summary_image)}`}
          className="rounded-md h-full w-full"
          alt="image"
          // fill
          priority
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
