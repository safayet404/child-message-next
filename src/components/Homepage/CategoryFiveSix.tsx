import verticalAd from "@/assets/vertical add banner.png";
import Image from "next/image";
import CategorySingleNews from "./CategorySingleNews";
import CategoryTitleTime from "./CategoryTitleTime";
import nikeAd from "@/assets/add nike shoe.png";

export default async function CategoryFiveSix({
  categories,
}: {
  categories: { title: string; slug: string; id: string }[];
}) {
  return (
    <div className="grid grid-cols-12 gap-x-6 mb-8 md:mb-16">
      <div className="col-span-12 md:col-span-3 h-[400px] md:h-[540px] w-full">
        <Image
          src={verticalAd}
          className="h-full w-full"
          alt="verticalAd"
          width={300}
          height={600}
        />
      </div>
      <div className="mt-8 md:mt-0 col-span-12 md:col-span-5">
        <CategorySingleNews category={categories[0]} />
      </div>
      <div className="col-span-12 md:col-span-4 mt-8 md:mt-16">
        <CategoryTitleTime category={categories[1]} />
        <div className="h-[170px] w-full mt-6">
          <Image
            src={nikeAd}
            width={400}
            height={400}
            className="w-full h-full"
            alt="nikeAd"
          />
        </div>
      </div>
    </div>
  );
}
