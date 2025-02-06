import Image from "next/image";
import CategoryPicText from "./CategoryPicText";
import CategoryTitleTime from "./CategoryTitleTime";



interface CategoryPicTextSectionProps {
  categories: { title: string; slug: string; id: string }[];
  home_ad2: string;
}

export default function CategoryPicTextSection({
  categories,
  home_ad2,
}: CategoryPicTextSectionProps) {
  return (
    <div className="grid grid-cols-12 my-8 md:my-16">
      <div className="col-span-12 md:col-span-8 md:pr-6">
        <CategoryPicText category={categories[0]} />
      </div>
      <div className="col-span-12 mt-10 md:mt-0 md:col-span-4 md:pl-6">
        <CategoryTitleTime category={categories[1]} />
        <div className="h-[200px] w-full mt-6 md:mt-10">
          <Image
            src={home_ad2 || "/path/to/default-image.jpg"}
            className="h-full w-full"
            height={400}
            width={400}
            alt="Advertisement"
          />
        </div>
      </div>
    </div>
  );
}
