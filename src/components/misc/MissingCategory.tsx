import { BASE_API } from "@/constants/common";
import CategoryTitle from "../common/CategoryTitle";
import MissingNewsTop from "../NewsLayout/MissingNewsTop";

export default async function MissingCategory({ slug }: { slug: string }) {
  const missingNewsResponse = await fetch(
    `${BASE_API}/missing_news?filter[status][_eq]=published&fields=name,image,age,id,created_at&limit=16&sort[created_at]=desc`
  );
  const { data: missingNews } = await missingNewsResponse.json();
  return (
    <div className="">
      <CategoryTitle title="নিখোঁজ বার্তা" className="mb-10" slug={slug} />
      <div className=" grid grid-cols-2 gap-x-6 gap-y-8">
        {missingNews &&
          missingNews.length > 0 &&
          // @ts-expect-error no need type checking
          missingNews.map((news) => (
            <MissingNewsTop
              key={news.id}
              news_id={news.id}
              position="category"
            />
          ))}
      </div>
    </div>
  );
}
