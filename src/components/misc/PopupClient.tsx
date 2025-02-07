"use client";

import { formatImageUrl } from "@/utills/common";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";

export default function PopupClient({
  image,
  link,
}: {
  image: string;
  link: string;
}) {
  const [isOpen, setIsOpen] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsOpen(false);
  //   }, 5000); // Set isOpen to false after 5 seconds

  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <div
            onClick={handleClose}
            className="flex justify-end text-red-500 cursor-pointer"
          >
            <ImCross />
          </div>
          <Link href={link} target="_blank">
            <div className="relative h-[300px] md:h-[500px] overflow-hidden">
              <Image
                src={formatImageUrl(image)}
                className="w-full h-full"
                width={500}
                height={300}
                alt="popup"
              />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
