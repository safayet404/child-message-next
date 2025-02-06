import { formatImageUrl } from "@/utills/common";
import Image from "next/image";
import Link from "next/link";

export default function MissingNewsMinimal({
  image,
  name,
  age,
  news_id,
}: {
  image: string;
  name: string;
  age: string;
  news_id: string;
}) {
  return (
    <Link href={`/missing_news/${news_id}`}>
      <div className="flex flex-col items-center justify-between">
        <div className="relative h-[250px] w-full overflow-hidden">
          <Image
            src={`${formatImageUrl(image)}`}
            className="rounded-md h-full w-full object-cover"
            width={300}
            height={250}
            alt="image"
          />
        </div>
        <h5 className="text-base mt-2 text-defaultTextColor font-semibold">
          {name} - {age} বছর
        </h5>
      </div>
    </Link>
  );
}
