import { BASE_API } from "@/constants/common";
import { formatImageUrl } from "@/utills/common";
import Image from "next/image";
import Link from "next/link";

export default async function PictureCategorySection() {
  const newsResponse = await fetch(
    `${BASE_API}/picture_news?fields=title,main_image,slug&limit=3&sort[created_at]=desc`
  );
  const { data: news } = await newsResponse.json();
  return (
    <div className="mt-8 md:mt-16">
      <h2 className="text-2xl md:text-4xl inter-font font-bold text-center mb-4">
        ছবি বার্তা
      </h2>
      <p className="text-center md:w-2/4 text-sm md:text-base mx-auto mb-4">
        ছবি বার্তা বিভাগে সংবাদের প্রতিটি মুহূর্ত ধরা হয় ছবির মাধ্যমে। এখানে
        আপনি পাবেন ঘটনাবহুল চিত্র যা গল্প বলার সঙ্গে সঙ্গে আপনাকে ঘটনাস্থলে নিয়ে
        যাবে। প্রতিটি ছবিই একেকটি গল্পের প্রতিচ্ছবি।
      </p>
      {news?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
          {news.map(
            (item: { title: string; main_image: string; slug: string }) => (
              <Link href={`/picture-news/${item.slug}`} key={item.slug}>
                <div className="flex flex-col items-center relative">
                  <div className="w-full h-[245px] overflow-hidden">
                    <Image
                      src={`${formatImageUrl(item.main_image)}`}
                      alt={item.title}
                      width={500}
                      height={245}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h3
                      className="w-fit px-4 py-2 text-center text-lg font-semibold text-black"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
