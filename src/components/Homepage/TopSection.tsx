import { BASE_API } from "@/constants/common";
import TopSectionFirstNewsLayout from "./TopSectionFirstNewsLayout";
import TitleTimeImageY from "../NewsLayout/TitleTimeImageY";
import ImageDetailsX from "../NewsLayout/ImageDetailsX";
import MissingNewsTop from "../NewsLayout/MissingNewsTop";

export default async function TopSection() {
  // fetch data for homepage top section
  const topSectionNewsResponse = await fetch(
    `${BASE_API}/homepage_top_section_news?filter[status][_eq]=published&fields=news_one,news_three,news_one.slug,news_three.slug,news_one.title,news_two.id,news_three.title,news_one.summary_description,news_one.summary_image,news_three.summary_image,news_one.created_at,news_three.created_at,news_one.slug,news_three.slug,news_two`
  );
  const { data: news } = await topSectionNewsResponse.json();
  return (
    <div className="md:flex md:justify-between md:gap-x-6 mb-8">
      <div className="flex-1 h-full">
        <TopSectionFirstNewsLayout news={news.news_one} />
        <div className="flex gap-x-4 mt-4">
          <p className="text-[#E7252D]">শিশু হেল্প লাইন নাম্বার : ১০৯৮</p>
          <p className="text-primary">হেল্প লাইন নাম্বার : ৯৯৯</p>
        </div>
      </div>
      <div className="md:flex-1 mt-10 md:mt-0 flex flex-col gap-y-6 justify-between">
        <div className="flex-1">
          {!news.news_two?.title ? (
            <MissingNewsTop news_id={news.news_two.id} position="top" />
          ) : (
            <ImageDetailsX
              title={news.news_two.title}
              slug={news.news_two.slug}
              created_at={news.news_two.created_at}
              category_title={news.news_two.category_id.title}
              category_slug={news.news_two.category_id.slug}
              image={news.news_two.summary_image}
              summary_description={news.news_two.summary_description}
              section="top"
            />
          )}
        </div>
        <div className="md:flex-1 md:mt-0 mt-4">
          <TitleTimeImageY
            title={news.news_three.title}
            slug={news.news_three.slug}
            created_at={news.news_three.created_at}
            image={news.news_three.summary_image}
          />
        </div>
      </div>
    </div>
  );
}
