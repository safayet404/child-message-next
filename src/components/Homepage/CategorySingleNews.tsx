import { BASE_API } from "@/constants/common";
import CategoryTitle from "../common/CategoryTitle";
import Image from "next/image";
import { formatImageUrl } from "@/utills/common";
import Link from "next/link";
import getEnglishDateInBangla from "@/utills/getEnglishDateInBangla";

export default async function CategorySingleNews({
  category: { title, slug, id },
}: {
  category: { title: string; slug: string; id: string };
}) {
  const newsResponse = await fetch(
    `${BASE_API}/news?filter[category_id][_eq]=${id}&fields=title,created_at,category_id,summary_image,summary_description,slug,created_at&limit=1&sort[created_at]=desc`
  );
  const { data: news } = await newsResponse.json();
  return (
    <div>
      <CategoryTitle title={title} slug={slug} className="mb-4 md:mb-10" />
      {news?.length > 0 && (
        <Link href={`/news/${news[0].slug}`} className="flex flex-col gap-y-2">
          <div>
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={formatImageUrl(news[0].summary_image)}
                className="rounded-md h-full w-full object-cover"
                width={500}
                height={300}
                alt="image"
              />
            </div>
            <h3 className="text-defaultTextColor font-medium md:font-semibold mt-2">
              {title}
            </h3>
            <h4 className="text-lgmd:text-xl font-semibold my-2">
              {news[0].title}
            </h4>
            <p className="text-sm">
              {getEnglishDateInBangla(new Date(news[0].created_at))}
            </p>
            <p className="text-defaultTextColor my-2 text-justify">
              {news[0].summary_description}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
