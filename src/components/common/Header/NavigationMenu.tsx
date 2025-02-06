import Link from "next/link";

export default async function NavigationMenu({
  categories,
}: {
  categories: { id: number; title: string; slug: string }[];
}) {
  return (
    <ul className="hidden md:flex items-center">
      {categories.map(
        (category: { id: number; title: string; slug: string }) => {
          return (
            <li key={category.id} className="flex">
              <Link
                href={`/category/${category.slug}`}
                className="px-6 py-2 hover:bg-white"
              >
                {category.title}
              </Link>
              <div className="w-[1px] bg-black"></div>
            </li>
          );
        }
      )}
      <li>
        <Link
          href="/category/নিখোঁজ-বার্তা"
          className="px-6 py-3 hover:bg-white"
        >
          নিখোঁজ বার্তা
        </Link>
      </li>
    </ul>
  );
}
