import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type FooterLink = {
  id: number;
  link_text: string;
  link_text_english: string;
  link: string;
};

export default function SingleLink({ linkInfo }: { linkInfo: FooterLink }) {
  return (
    <p className="text-white flex gap-x-2 text-center md:text-left items-center ml-[-7px]">
      <MdOutlineKeyboardArrowRight className="text-3xl" />
      <Link href={linkInfo.link} target="_blank">
        {linkInfo.link_text}
      </Link>
    </p>
  );
}
