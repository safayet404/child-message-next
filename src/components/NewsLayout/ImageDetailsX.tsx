import { formatImageUrl } from "@/utills/common";
import getEnglishDateInBangla from "@/utills/getEnglishDateInBangla";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function ImageDetailsX({
  title,
  slug,
  created_at,
  category_title,
  category_slug,
  image,
  summary_description,
  section,
}: {
  title: string;
  slug: string;
  created_at: string;
  category_title: string;
  category_slug: string;
  image: string;
  summary_description: string;
  section: string;
}) {
  const formattedTime = getEnglishDateInBangla(new Date(created_at));
  return (
    <div className="grid grid-cols-12 justify-center">
      <div
        className={`h-[248px] mr-4 ${
          section === "top" ? "col-span-7 w-[300px]" : "col-span-6 w-[350px]"
        }`}
      >
        <Image
          src={`${formatImageUrl(image)}`}
          className="rounded-md h-full w-full object-cover"
          alt="image"
          priority
          width={300}
          height={248}
        />
      </div>
      <div
        className={`${
          section === "top"
            ? "col-span-12 md:col-span-5"
            : "col-span-12 md:col-span-6 pl-2"
        } flex flex-col justify-between`}
      >
        <Link
          href={`/category/${category_slug}`}
          className="font-semibold text-justify inline-block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {category_title}
        </Link>
        <p className="mb-2 mt-2 md:mt-0">{formattedTime}</p>
        <Link href={`/news/${slug}`} className="font-bold inline-block">
          {title}
        </Link>
        <p className="text-justify mt-2">{summary_description}</p>
        <div className="w-fit">
          <Link
            href={`/news/${slug}`}
            className="px-3 py-2 text-base flex justify-between items-centerfont-semibold border rounded hover:text-primary"
          >
            আরও পড়ুন <MdOutlineArrowOutward className="ml-2 text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
