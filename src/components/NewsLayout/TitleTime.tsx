import getEnglishDateInBangla from "@/utills/getEnglishDateInBangla";
import Link from "next/link";

export default function TitleTime({
  title,
  slug,
  created_at,
}: {
  title: string;
  slug: string;
  created_at: string;
}) {
  const formattedTime = getEnglishDateInBangla(new Date(created_at));
  return (
    <Link href={`/news/${slug}`}>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <span className="text-sm">{formattedTime}</span>
      </div>
    </Link>
  );
}
