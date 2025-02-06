import { BASE_API } from "@/constants/common";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import SingleLink from "./SingleLink";
import SingleSocialIcon from "./SingleSocialIcon";

// type for footer links
type FooterLink = {
  id: number;
  link_text: string;
  link_text_english: string;
  link: string;
};

export default async function Footer() {
  // get this year
  const date = new Date();
  const thisYear = date.getFullYear();

  // fetch data of footer middle links
  const linkMiddleResponse = await fetch(
    `${BASE_API}/footer_links?fields=id,link_text,link`
  );
  const { data: footerMiddleLinks } = await linkMiddleResponse.json();

  // fetch data of footer right links
  const linkRightResponse = await fetch(
    `${BASE_API}/footer_links_right?fields=id,link_text,link`
  );
  const { data: footerRightLinks } = await linkRightResponse.json();

  // fetch data of social links
  const socialLinkResponse = await fetch(
    `${BASE_API}/social_links?fields=facebook,youtube,instagram,twitter`
  );
  const { data: socialLinks } = await socialLinkResponse.json();

  return (
    <footer className="bg-[#E5841C] md:mt-16 pt-8 md:pt-16 mt-12 text-white">
      {/* footer left section */}
      <div className="grid grid-cols-12 justify-between px-4 md:px-16 md:pb-12">
        <div className="col-span-12 md:col-span-4 md:pr-16">
          <h2 className="text-3xl md:text-[32px] font-bold mb-4 text-center md:text-left">
            চাইল্ড মেসেজ
          </h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base text-white text-center md:text-left">
            আপত্তিকর স্বত্ত্বাধীন পদোন্নতি বিধান এবং ওহ এটা নিজেদের সাথে পরামর্শ
            করা. আশীর্বাদ স্বাগত ভদ্রমহিলা সে দেখা হাস্যরস স্যার তার প্রজনন.
          </p>
          {/* social icon links section */}
          <div className="flex gap-4 justify-center md:justify-start mb-12 md:mb-0">
            <SingleSocialIcon
              icon={<FaFacebookF />}
              link={socialLinks.facebook}
            />
            <SingleSocialIcon icon={<FaTwitter />} link={socialLinks.twitter} />
            <SingleSocialIcon
              icon={<FaInstagram />}
              link={socialLinks.instagram}
            />
            <SingleSocialIcon icon={<FaYoutube />} link={socialLinks.youtube} />
          </div>
        </div>
        {/* footer middle section */}
        <div className="col-span-12 md:col-span-4 md:justify-self-center">
          <p className="font-semibold text-white text-center md:text-left text-xl md:text-2xl mb-4">
            দ্রুত লিঙ্ক
          </p>
          {footerMiddleLinks.map((link: FooterLink) => (
            <SingleLink key={link.id} linkInfo={link} />
          ))}
        </div>
        {/* footer right section */}
        <div className="col-span-12 md:col-span-4 md:justify-self-end text-center md:text-right">
          {footerRightLinks.map((link: FooterLink) => (
            <SingleLink key={link.id} linkInfo={link} />
          ))}
        </div>
      </div>
      {/* footer bottom section */}
      <p className="text-white mt-4 border-t border-white py-2 text-center">
        &copy; {thisYear} All rights reserved.
      </p>
    </footer>
  );
}
