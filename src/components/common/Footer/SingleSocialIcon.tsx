import Link from "next/link";

export default function SingleSocialIcon({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <p className="h-8 w-8 flex items-center justify-center rounded-full bg-white text-[#1E1E1E]">
      <Link href={link} target="_blank">
        {icon}
      </Link>
    </p>
  );
}
