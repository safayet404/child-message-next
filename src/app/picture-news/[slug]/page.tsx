import CategoryTitle from "@/components/common/CategoryTitle";
import PictureSlider from "@/components/misc/PictureSlider";
import { BASE_API } from "@/constants/common";
import { formatImageUrl } from "@/utills/common";
import Image from "next/image";

export const runtime = "edge";

export default async function SinglePictureNewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const pictureNewsResponse = await fetch(
    `${BASE_API}/picture_news?filter[slug][_eq]=${slug}`
  );
  const { data: pictureNews } = await pictureNewsResponse.json();

  const newsResponse = await fetch(
    `${BASE_API}/picture_news_files?filter[picture_news_id][_eq]=${pictureNews[0].id}`
  );
  const { data: images } = await newsResponse.json();
  return (
    <div>
      <CategoryTitle
        title={pictureNews[0].title}
        slug={pictureNews[0].slug}
        link={false}
        className="mb-10"
      />
      <PictureSlider
        images={images.map(
          (image: { picture_news_id: string; directus_files_id: string }) =>
            image.directus_files_id
        )}
      />
      <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map(
          (image: { picture_news_id: string; directus_files_id: string }) => (
            <div
              key={image.directus_files_id}
              className="h-[200px] w-full rounded-md"
            >
              <Image
                src={`${formatImageUrl(image.directus_files_id)}`}
                alt="image"
                className="w-full h-full object-cover rounded-md"
                width={500}
                height={500}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
