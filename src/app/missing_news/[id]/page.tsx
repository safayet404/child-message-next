import CategoryTitle from "@/components/common/CategoryTitle";
import { BASE_API } from "@/constants/common";
import { formatImageUrl } from "@/utills/common";
import Image from "next/image";

export const runtime = "edge";

export default async function MissingNewsDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const newsResponse = await fetch(
    `${BASE_API}/missing_news?filter[id][_eq]=${id}&fields=description`
  );
  const { data } = await newsResponse.json();
  const news = data[0];

  const moreMissingNewsResponse = await fetch(
    `${BASE_API}/missing_news?fields=name,image,age,id,created_at&limit=4&sort[created_at]=desc`
  );
  const { data: moreMissingNews } = await moreMissingNewsResponse.json();

  return (
    <div>
      <CategoryTitle title="নিখোঁজ বার্তা" slug="নিখোঁজ-বার্তা" />
      <div
        className="rich-text-content text-justify mt-8"
        dangerouslySetInnerHTML={{ __html: news.description }}
      />
      {moreMissingNews && moreMissingNews.length > 0 && (
        <div className="mt-8">
          <CategoryTitle
            title="অন্যান্য নিখোঁজ বার্তা"
            slug="নিখোঁজ-বার্তা"
            link={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {moreMissingNews?.map((news: { image: string; id: string }) => (
              <div key={news.id} className="h-[200px] w-full overflow-hidden">
                <Image
                  src={`${formatImageUrl(news.image)}`}
                  className="rounded-md h-full w-full object-cover"
                  width={500}
                  height={300}
                  alt="image"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
