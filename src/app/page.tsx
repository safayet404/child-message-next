import TopSection from "@/components/Homepage/TopSection";
import ChildJournalist from "@/components/Homepage/ChildJournalist";
import { BASE_API, BASE_API_ASSET } from "@/constants/common";
import CategoryPicTextSection from "@/components/Homepage/CategoryPicTextSection";
import PictureCategorySection from "@/components/Homepage/PictureCategorySection";
import CategoryThreeFour from "@/components/Homepage/CategoryThreeFour";
import VideoCategorySection from "@/components/Homepage/VideoCategorySection";
import CategoryFiveSix from "@/components/Homepage/CategoryFiveSix";
import CategoryMissingAndLast from "@/components/Homepage/CategoryMissingAndLast";
import Popup from "@/components/misc/Popup";
import FullWidthServer from "@/components/Homepage/FullWidthServer";

export const runtime = "edge";

export default async function Home() {
  // fetch data for homepage top section
  const categoriesResponse = await fetch(
    `${BASE_API}/news_categories?filter[status][_eq]=published&filter[homepage_serial][_gte]=1&fields=id,title,slug&sort=homepage_serial`
  );
  const { data: categories } = await categoriesResponse.json();


  const addResponse = await fetch(`${BASE_API}/ads`, { cache: "no-cache" })
  const addData = await addResponse.json()

  const adImage1 = addData?.data?.home_ad1
    ? `${BASE_API_ASSET}/${addData?.data?.home_ad1}`
    : "";
  const adImage2 = addData?.data?.home_ad2
    ? `${BASE_API_ASSET}/${addData?.data?.home_ad2}`
    : "";
  const adImage3 = addData?.data?.home_ad3
    ? `${BASE_API_ASSET}/${addData?.data?.home_ad3}`
    : "";
  const adImage4 = addData?.data?.home_ad4
    ? `${BASE_API_ASSET}/${addData?.data?.home_ad4}`
    : "";
  const adImage5 = addData?.data?.home_ad5
    ? `${BASE_API_ASSET}/${addData?.data?.home_ad5}`
    : "";


  return (
    <div>
      {/* popup add */}
      <Popup />

      {/* Top news section */}
      <TopSection />

      {/* <FullWidthAd /> */}
      <FullWidthServer />

      {/* Top news bottom section */}
      <ChildJournalist home_ad1={adImage1} />

      {/* Category One and Category Two Section */}
      {categories.length > 1 && (
        <CategoryPicTextSection home_ad2={adImage2} categories={categories.slice(0, 2)} />
      )}

      <FullWidthServer />

      <PictureCategorySection />

      <FullWidthServer />

      {/* Category Three and Category Four Section */}
      {categories.length > 3 && (
        <CategoryThreeFour home_ad3={adImage3} categories={categories.slice(2, 4)} />
      )}

      <FullWidthServer />

      <VideoCategorySection />

      {categories.length > 5 && (
        <CategoryFiveSix home_ad4={adImage4} categories={categories.slice(4, 6)} />
      )}

      <FullWidthServer />

      {categories.length > 6 && (
        <CategoryMissingAndLast home_ad5={adImage5} categories={categories.slice(6, 8)} />
      )}
    </div>
  );
}
