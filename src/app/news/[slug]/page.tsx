import CategoryTitle from "@/components/common/CategoryTitle";
import ImageTitleDateSummary from "@/components/NewsLayout/ImageTitleDateSummary";
import { BASE_API } from "@/constants/common";
import { formatImageUrl } from "@/utills/common";
import { getFormattedDateTime } from "@/utills/getFormattedDateTime";
import Image from "next/image";
import fastWashAd from "@/assets/fast wash ad.png";

export const runtime = "edge";

export default async function NewsDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // Fetch data for the news details
  const newsResponse = await fetch(
    `${BASE_API}/news?filter[slug][_eq]=${slug}&fields=title,summary_description,main_image,description,created_at,updated_at,category_id,category_id.title,category_id.id,category_id.slug,news_details_ad`
  );
  const { data } = await newsResponse.json();
  const newsJson = data && data.length ? data[0] : null
  const adImage = newsJson?.news_details_ad ? formatImageUrl(newsJson.news_details_ad) : fastWashAd

  console.log("image check",adImage);
  

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center py-32">Not Found</div>
    );
  }

  const news = data[0];

  // Fetch data for the news details
  const relatedNewsResponse = await fetch(
    `${BASE_API}/news?filter[slug][_neq]=${slug}&filter[category_id][_eq]=${news.category_id.id}&fields=title,slug,summary_description,summary_image,created_at,category_id&sort[created_at]=desc&limit=1`
  );
  const { data: data2 } = await relatedNewsResponse.json();
  const relatedNews = data2 ? data2[0] : null;

  return (
    <div className="mb-12">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="md:col-span-7 col-span-12">
          {/* Category Title */}
          <CategoryTitle
            title={news.category_id.title}
            slug={news.category_id.slug}
            className="mb-10"
          />

          {/* News Title and Summary */}
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-justify md:text-left">
            {news.title}
          </h2>
          <p className="mb-4 text-sm md:text-md text-justify md:text-left">
            {news.summary_description}
          </p>

          {/* Main Image */}
          <div className="relative w-full h-[300px] md:h-[400px] mb-6">
            <Image
              src={`${formatImageUrl(news.main_image)}`}
              className="rounded-md object-cover"
              alt={news.title}
              priority
              fill
            />
          </div>
          <div className="flex items-center gap-x-4 border-t border-gray-300 py-4">
            <p className="text-sm inter-font">
              Published: {getFormattedDateTime(news.created_at)}
            </p>
            <p className="text-sm inter-font">
              Updated: {getFormattedDateTime(news.updated_at)}
            </p>
          </div>
        </div>
        <div className="col-span-5 mt-2.5 hidden md:block">
          {relatedNews && (
            <ImageTitleDateSummary
              title={relatedNews.title}
              summary={relatedNews.summary_description}
              slug={relatedNews.slug}
              created_at={relatedNews.created_at}
              image={relatedNews.summary_image}
            />
          )}
          <div className="relative w-full mt-4 h-[200px]">
            <Image
              src={adImage}
              alt="fast-wash-ad"
              width={500}
              height={200}
              className="rounded-md h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* News Description */}
      <div className="flex flex-col gap-y-6 mt-4">
        <div
          className="rich-text-content text-justify"
          dangerouslySetInnerHTML={{ __html: news.description }}
        />
      </div>
    </div>
  );
}
