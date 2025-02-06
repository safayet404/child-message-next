import Link from "next/link";

export default function CategoryTitle({
  title,
  slug,
  className,
  link = true,
}: {
  title: string;
  slug: string;
  className?: string;
  link?: boolean;
}) {
  const categoryLink = link ? "/category/" + slug : "#";
  return (
    <div
      className={`${className} flex w-3/5 mx-auto md:w-full md:justify-center items-center`}
    >
      {/* Title */}
      <Link href={categoryLink}>
        <h2 className="text-xl mr-6 font-bold text-black">{title}</h2>{" "}
      </Link>

      {/* Trapezium */}
      <div className="w-10 h-1.5 mr-1 bg-orange-500 trapezium-shape"></div>

      {/* horizontal lines */}
      <div className="flex-grow h-1.5 flex flex-col justify-between">
        <div className="ml-1 h-px bg-gray-300"></div>
        <div className="h-px bg-gray-300"></div>
      </div>
    </div>
  );
}
