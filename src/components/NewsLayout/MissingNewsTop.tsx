import { BASE_API } from "@/constants/common";
import { formatImageUrl } from "@/utills/common";
import getEnglishDateInBangla from "@/utills/getEnglishDateInBangla";
import Image from "next/image";
import Link from "next/link";

export default async function MissingNewsTop({
  news_id,
  position,
}: {
  news_id: string;
  position: string;
}) {
  const newsResponse = await fetch(
    `${BASE_API}/missing_news?filter[id][_eq]=${news_id}&fields=name,age,skin_color,image,missing_time,missing_time_cloths,contact_number,created_at&limit=1&sort[created_at]=desc`
  );
  const { data } = await newsResponse.json();
  const news = data[0];
  return (
    <div className="">
      {position === "top" && (
        <div>
          <h2 className="text-lg font-bold text-center md:text-left">
            নিখোঁজ বার্তা
          </h2>
          <p className="pr-2 my-1 md:w-2/4 mb-4 md:mb-1 text-center md:text-left">
            নিখোঁজ সংবাদ প্রচারের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>
      )}
      <Link href={`/missing_news/${news_id}`}>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="relative h-[205px] overflow-hidden">
              <Image
                src={`${formatImageUrl(news.image)}`}
                className="rounded-md h-full w-full object-cover"
                width={500}
                height={300}
                alt="image"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between text-sm md:text-base">
            <div className="flex flex-col gap-y-1 md:gap-y-0">
              <p>
                <span className="font-bold">নাম: </span>
                {news.name}
              </p>
              <p>
                <span className="font-bold">বয়স: </span>
                {news.age} বছর
              </p>
              <p>
                <span className="font-bold">গায়ের রং: </span>
                {news.skin_color}
              </p>
              <p>
                <span className="font-bold">পরনে ছিল: </span>
                {news.missing_time_cloths}
              </p>
              <p>
                <span className="font-bold">নিখোঁজ হওয়ার সময়: </span>
                {getEnglishDateInBangla(new Date(news.missing_time))}
              </p>
              <p>
                <span className="font-bold">যোগাযোগের নম্বর: </span>
                {news.contact_number}
              </p>
            </div>
            <h5 className="md:block hidden text-defaultTextColor font-medium">
              দ্রষ্টব্য: কেউ এই শিশুটির সন্ধান পেলে উপরের নম্বরে যোগাযোগ করুন
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
