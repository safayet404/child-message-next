import { BASE_API } from "@/constants/common";

export default async function ScrollingText() {
  const response = await fetch(
    `${BASE_API}/recent_top_scrolling_news?filter[status][_eq]=published&fields=news_id, news_id.title, news_id.id&sort=serial&limit=5`
  );
  const { data } = await response.json();

  return (
    <div className="flex items-center md:mx-16 py-2 bg-primary">
      <p className="text-white px-4 font-bold text-lg whitespace-nowrap">
        সদ্য বার্তা
      </p>
      <div className="overflow-hidden">
        <div className="flex items-center gap-x-4 animate-marquee">
          {data.map((text: { news_id: { title: string } }, index: number) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              <p className="text-md font-medium text-white whitespace-nowrap ">
                {text.news_id.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
