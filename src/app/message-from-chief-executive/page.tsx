import CategoryTitle from "@/components/common/CategoryTitle";
import { BASE_API } from "@/constants/common";
import { formatImageUrl } from "@/utills/common";
import Image from "next/image";

export const runtime = "edge";

export default async function MessageFromChiefExecutive() {
  const response = await fetch(`${BASE_API}/chief_executive_message`);
  const { data } = await response.json();

  return (
    <div className="grid grid-cols-12">
      <CategoryTitle
        title="প্রধান নির্বাহীর বার্তা"
        className="col-span-12 w-full md:hidden mb-4"
        slug="#"
        link={false}
      />
      <div className="col-span-12 md:col-span-9 order-2 md:order-1">
        <CategoryTitle
          title="প্রধান নির্বাহীর বার্তা"
          className="hidden md:flex"
          slug=""
          link={false}
        />
        <div>
          <div
            className="rich-text-content text-justify mt-8"
            dangerouslySetInnerHTML={{ __html: data.message }}
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-3 flex flex-col order-1 md:order-2 mx-auto">
        <div className="h-[250px] md:h-[300px] w-[300px] md:w-full md:pl-6 md:pr-4 mt-3">
          <Image
            src={formatImageUrl(data.image)}
            className="w-full h-full"
            height={300}
            width={200}
            alt="Arif Rahaman"
          />
        </div>
        <h3 className="mt-4 text-center text-3xl text-gray-600 font-bold">
          {data.name}
        </h3>
        <h3 className="text-center text-lg font-medium text-defaultTextColor">
          প্রধান নির্বাহী, চাইল্ড মেসেজ
        </h3>
      </div>
    </div>
  );
}
