import { BASE_API } from "@/constants/common";
import TitleTime from "../NewsLayout/TitleTime";
import CategoryTitle from "../common/CategoryTitle";

export default async function CategoryTitleTime({
  category: { title, slug, id },
}: {
  category: { title: string; slug: string; id: string };
}) {
  const newsResponse = await fetch(
    `${BASE_API}/news?filter[category_id][_eq]=${id}&fields=title,created_at,slug&limit=3&sort[created_at]=desc`
  );
  const { data: news } = await newsResponse.json();
  return (
    <div>
      <CategoryTitle title={title} slug={slug} className="mb-4 md:mb-10" />
      <div className="flex flex-col gap-y-4">
        {news?.map(
          (news: { title: string; slug: string; created_at: string }) => (
            <TitleTime
              key={news?.slug}
              title={news?.title}
              slug={news?.slug}
              created_at={news?.created_at}
            />
          )
        )}
      </div>
    </div>
  );
}
