import { BASE_API } from "@/constants/common";
import VideoNews from "../NewsLayout/VideoNews";

export default async function VideoCategorySection() {
  const newsResponse = await fetch(
    `${BASE_API}/video_news?fields=title,video_link,slug,created_at&limit=4&sort[created_at]=desc`
  );
  const { data: news } = await newsResponse.json();
  return (
    <div className="my-8 md:my-16">
      <h2 className="text-2xl md:text-4xl text-center md:text-left inter-font font-bold mb-4">
        ভিডিও
      </h2>
      <div className="grid md:grid-cols-4 gap-4">
        {news.map(
          (news: { title: string; video_link: string; slug: string }) => (
            <VideoNews key={news.slug} video_link={news.video_link} />
          )
        )}
      </div>
    </div>
  );
}
