import logoImg from "@/assets/logo.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaVideo,
} from "react-icons/fa";
import getEnglishDateInBangla from "@/utills/getEnglishDateInBangla";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";
import Search from "./Search";
import MobileNav from "./MobileNav";
import { BASE_API } from "@/constants/common";
import { getDate } from "bangla-calendar";

export default async function Header() {
  
  const todayEngDateInBangla = getEnglishDateInBangla(new Date());

  const dateWithDay = getDate(new Date())

  console.log("checcck",dateWithDay);
  


  const response = await fetch(
    `${BASE_API}/news_categories?fields=id,title,slug&filter[menu_serial][_gte]=1&filter[status][_eq]=published&sort=menu_serial`
  );
  const { data: categories } = await response.json();

  return (
    <header className="sticky top-0 px-4 md:px-16 py-6 grid grid-cols-3 md:flex items-center justify-between gap-x-4 bg-gradient-to-b from-primary to-white z-30">
      <div className="flex items-center">
        <MobileNav categories={categories} />
        <Search className="block md:hidden" />
      </div>

      {/* logo */}
      <Link href="/" className="justify-self-center">
        <div className="w-[80px] md:w-[180px]">
          <Image
            src={logoImg}
            alt="Child Message"
            width={177}
            height={138}
            className=""
          />
        </div>
      </Link>
      <div className="md:w-full mt-1 flex md:justify-between justify-self-end md:block">

        
        {/* menu top section */}
        <div className="flex justify-between items-center">
          <div className="hidden md:flex gap-4 items-center">
            <FaFacebookF /> |
            <FaTwitter /> |
            <FaInstagram /> |
            <FaYoutube />
          </div>
          <div className="hidden md:block">
            <p className="text-black">
              {dateWithDay} | {todayEngDateInBangla}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden md:block">
              <p className="text-black inter-font flex items-center md:font-medium">
                <span className="w-2.5 h-2.5 block bg-black rounded-full mr-1.5">
                  {" "}
                </span>
                LIVE
              </p>
            </div>
            <FaVideo className="hidden md:block" />
            <div className="flex justify-center items-center px-2 py-1.5 rounded text-black bg-[#FBDEC1]">
              <p className="text-sm inter-font font-medium md:font-bold text-black leading-none">
                ENGLISH
              </p>
            </div>
          </div>
        </div>
        {/* menu bottom section */}
        <div className="flex justify-between mt-8">
          <NavigationMenu categories={categories} />
          <Search className="md:block hidden" />
        </div>
      </div>
    </header>
  );
}
