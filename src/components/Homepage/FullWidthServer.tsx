import { BASE_API, BASE_API_ASSET } from "@/constants/common";
import FullWidthAddClient from "./FullWidthAddClient";

// FullWidthServer.tsx
export const runtime = "edge";

export default async function FullWidthServer({
  marginTop,
  className,
}: {
  marginTop?: boolean;
  className?: string;
}) {
  try {
    const res = await fetch(`${BASE_API}/global_header_add?ts=${new Date().getTime()}`);
    const data = await res.json();
    if (data?.data?.header_image) {
      const imageUrl = `${BASE_API_ASSET}/${data?.data?.header_image}`;
      return <FullWidthAddClient imageUrl={imageUrl} marginTop={marginTop} className={className} />;
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }

  return (
    <div className={className}>
      <p>Unable to fetch the ad image</p>
    </div>
  );
}
