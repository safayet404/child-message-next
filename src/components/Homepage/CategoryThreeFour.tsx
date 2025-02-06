import { BASE_API } from "@/constants/common";
import CategorySingleNews from "./CategorySingleNews";
import ImageTitleDate from "../NewsLayout/ImageTitleDate";
import CategoryTitle from "../common/CategoryTitle";
import Image from "next/image";


interface CategoryThreeFourProps {
  categories: { title: string; slug: string; id: string }[];
  home_ad3: string;
}

export default async function CategoryThreeFour({categories,home_ad3} : CategoryThreeFourProps ) {
  const newsResponse = await fetch(
    `${BASE_API}/news?filter[category_id][_eq]=${categories[1].id}&fields=title,created_at,category_id,summary_image,slug,created_at&limit=2&sort[created_at]=desc`
  );
  const { data: news } = await newsResponse.json();
  return (
    <div className="grid md:grid-cols-2 gap-x-10 my-8 md:my-16">
      <CategorySingleNews category={categories[0]} />
      <div className="">
        <CategoryTitle
          className="mb-4 md:mb-10 mt-8 md:mt-0"
          title={categories[1].title}
          slug={categories[1].slug}
        />
        <div className="grid grid-cols-2 gap-x-4 mt-6 md:mt-10">
          {news?.length > 0 &&
            news?.map(
              (news: {
                title: string;
                slug: string;
                created_at: string;
                summary_image: string;
              }) => (
                <ImageTitleDate
                  key={news.slug}
                  title={news.title}
                  slug={news.slug}
                  created_at={news.created_at}
                  image={news.summary_image}
                />
              )
            )}
        </div>
        <div className="h-[200px] mt-4">
          <Image
            src={home_ad3 || "path/image.jpg"}
            className="w-full h-full"
            height={400}
            width={400}
            alt="Nike Shoe"
          />
        </div>
      </div>
    </div>
  );
}
