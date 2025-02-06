import CategoryTitle from "@/components/common/CategoryTitle";
import ImageTitleDateSummary from "@/components/NewsLayout/ImageTitleDateSummary";
import ImageTitleSummaryTime from "@/components/NewsLayout/ImageTitleSummaryTime";
import { BASE_API } from "@/constants/common";
import { formatImageUrl } from "@/utills/common";
import getTimeDifference from "@/utills/getTimeDifference";
import Image from "next/image";
import fastWashAd from "@/assets/fast wash ad.png";
import TitleSummaryImageX from "@/components/NewsLayout/TitleSummaryImageX";
import Link from "next/link";
import MissingCategory from "@/components/misc/MissingCategory";

export const runtime = "edge";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // if slug is "নিখোঁজ-বার্তা"
  if (
    ["নিখোঁজ-বার্তা", "নিখোঁজ বার্তা", "নিখোজ বার্তা", "নিখোজ-বার্তা"].includes(
      decodeURIComponent(slug)
    )
  ) {
    return <MissingCategory slug={slug} />;
  }

  // fetch this category data
  const categoryResponse = await fetch(
    `${BASE_API}/news_categories?filter[slug][_eq]=${slug}&fields=title,id`
  );
  const { data: data1 } = await categoryResponse.json();
  const category = data1 && data1.length ? data1[0] : null;

  // fetch news of this category
  const newsResponse = await fetch(
    `${BASE_API}/news?filter[category_id][_eq]=${category.id}&fields=title,slug,summary_description,summary_image,created_at&sort[created_at]=desc&limit=10`
  );
  const { data: data2 } = await newsResponse.json();
  const news = data2 && data2.length ? data2 : null;

  if (!category) {
    return (
      <div className="flex justify-center items-center py-32">
        Category Not Found
      </div>
    );
  }

  if (!news) {
    return (
      <div className="flex justify-center items-center py-32">
        No news found for this category
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-x-6">
        {/* top left section */}
        <div className="col-span-12 md:col-span-7">
          <CategoryTitle title={category.title} slug={slug} />
          {/* main hightlighted image */}
          {news && news.length > 0 && (
            <Link href={`/news/${news[0].slug}`}>
              <div className="mt-6 relative">
                <div className="h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg">
                  <Image
                    src={formatImageUrl(news[0].summary_image)}
                    height={400}
                    width={500}
                    className="w-full h-full object-cover"
                    alt={news[0].title}
                  />
                </div>
                <div className="absolute bottom-2 left-2 p-4">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {news[0].title}
                  </h2>
                  <p className="text-white text-sm font-light">
                    {getTimeDifference(news[0].created_at, "bangla")} আগে
                  </p>
                </div>
              </div>
            </Link>
          )}
          <div className="grid grid-cols-2 gap-6 pt-6">
            {news && news.length > 2 && (
              <div>
                <ImageTitleSummaryTime
                  title={news[2].title}
                  summary={news[2].summary_description}
                  slug={news[2].slug}
                  created_at={news[2].created_at}
                  image={news[2].summary_image}
                  image_height={150}
                />
              </div>
            )}
            {news && news.length > 3 && (
              <div>
                <ImageTitleSummaryTime
                  title={news[3].title}
                  summary={news[3].summary_description}
                  slug={news[3].slug}
                  created_at={news[3].created_at}
                  image={news[3].summary_image}
                  image_height={150}
                />
              </div>
            )}
          </div>
        </div>
        {/* top right section */}
        <div className="col-span-12 md:col-span-5 pt-[52px]">
          {news && news.length > 1 && (
            <div>
              <ImageTitleDateSummary
                title={news[1].title}
                summary={news[1].summary_description}
                slug={news[1].slug}
                created_at={news[1].created_at}
                image={news[1].summary_image}
              />
            </div>
          )}
          <div className="relative w-full mt-4 h-[200px]">
            <Image
              src={fastWashAd}
              alt="fast-wash-ad"
              className="rounded-md h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className={`flex items-center mt-16 mb-8`}>
        <h2 className="text-xl mr-6 font-bold text-black">আরও - </h2>{" "}
        {/* Trapezium */}
        <div className="w-10 h-1.5 mr-1 bg-orange-500 trapezium-shape"></div>
        {/* horizontal lines */}
        <div className="flex-grow h-1.5 flex flex-col justify-between">
          <div className="ml-1 h-px bg-gray-300"></div>
          <div className="h-px bg-gray-300"></div>
        </div>
      </div>
      <div className="md:w-[700px] mx-auto">
        {news &&
          news.length > 4 &&
          news
            .slice(4)
            .map(
              (news: {
                title: string;
                summary_description: string;
                slug: string;
                created_at: string;
                summary_image: string;
              }) => (
                <div key={news.slug}>
                  <TitleSummaryImageX
                    title={news.title}
                    summary={news.summary_description}
                    slug={news.slug}
                    created_at={news.created_at}
                    image={news.summary_image}
                  />
                </div>
              )
            )}
      </div>
    </div>
  );
}
