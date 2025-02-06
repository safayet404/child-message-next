import { BASE_API } from "@/constants/common";
import CategoryTitle from "../common/CategoryTitle";
import ImageDetailsX from "../NewsLayout/ImageDetailsX";
import TitleTimeImageY from "../NewsLayout/TitleTimeImageY";

export default async function CategoryPicText({
  category: { title, slug, id },
}: {
  category: { title: string; slug: string; id: string };
}) {
  const newsResponse = await fetch(
    `${BASE_API}/news?filter[category_id][_eq]=${id}&fields=title,slug,created_at,category_id,summary_image,summary_description&limit=3&sort[created_at]=desc`
  );
  const { data: news } = await newsResponse.json();
  return (
    <div>
      <CategoryTitle title={title} slug={slug} className="mb-4 md:mb-10" />
      <div>
        {news?.length > 0 && (
          <div className="pb-4 border-b">
            <ImageDetailsX
              title={news[0].title}
              slug={news[0].slug}
              created_at={news[0].created_at}
              category_title={news[0].category_id.title}
              category_slug={news[0].category_id.slug}
              image={news[0].summary_image}
              summary_description={news[0].summary_description}
              section="category"
            />
          </div>
        )}
        {news?.length > 2 && (
          <div className="grid grid-cols-2 justify-between mt-4">
            <div className="border-r pr-4">
              <TitleTimeImageY
                title={news[1].title}
                slug={news[1].slug}
                created_at={news[1].created_at}
                image={news[1].summary_image}
              />
            </div>
            <div className="pl-4">
              <TitleTimeImageY
                title={news[2].title}
                slug={news[2].slug}
                created_at={news[2].created_at}
                image={news[2].summary_image}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
