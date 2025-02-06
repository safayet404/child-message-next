import { BASE_API } from "@/constants/common";
import CategoryTitle from "../common/CategoryTitle";
import CategoryTitleTime from "./CategoryTitleTime";
import MissingNewsTop from "../NewsLayout/MissingNewsTop";
import MissingNewsMinimal from "../NewsLayout/MissingNewsMinimal";
import Image from "next/image";


interface CategoryMissingAndLastProps {
  categories: { title: string; slug: string; id: string }[];
  home_ad5: string;
}

export default async function CategoryMissingAndLast({categories,home_ad5} : CategoryMissingAndLastProps) {
  const category = categories[0];

  const missingNewsResponse = await fetch(
    `${BASE_API}/missing_news?fields=name,image,age,missing_time,missing_time_cloths,contact_number,id,created_at&limit=3&sort[created_at]=desc`
  );
  const { data: missingNews } = await missingNewsResponse.json();
  return (
    <div className="grid grid-cols-12 gap-x-4 my-8 md:my-16">
      <div className="col-span-12 md:col-span-7">
        <CategoryTitle title="নিখোঁজ বার্তা" slug="নিখোঁজ-বার্তা" />
        <div className="mt-4 md:mt-6">
          {missingNews && missingNews.length > 0 && (
            <MissingNewsTop news_id={missingNews[0].id} position="category" />
          )}
        </div>
        <div className="grid grid-cols-2 gap-x-6 mt-6">
          {missingNews &&
            missingNews.length > 1 &&
            missingNews
              .slice(1)
              .map(
                (news: {
                  name: string;
                  age: string;
                  image: string;
                  id: string;
                }) => (
                  <MissingNewsMinimal
                    key={news.id}
                    image={news.image}
                    name={news.name}
                    age={news.age}
                    news_id={news.id}
                  />
                )
              )}
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 mt-8 md:mt-16">
        <CategoryTitleTime category={category} />
        <div className="h-[200px] w-full mt-6 md:mt-2">
          <Image
            src={home_ad5 || "path/shoes.jpg"}
            height={400}
            width={400}
            className="w-full h-full"
            alt="Nike Shoe"
          />
        </div>
      </div>
    </div>
  );
}
