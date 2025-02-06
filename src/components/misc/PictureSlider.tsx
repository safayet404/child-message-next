"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { formatImageUrl } from "@/utills/common";

export default function PictureSlider({ images }: { images: string[] }) {
  const settings = {
    // customPaging: function (i) {
    //   return (
    //     <a>
    //       <Image
    //         src={`${formatImageUrl(images[i])} `}
    //         width={800}
    //         height={500}
    //         alt="image"
    //       />
    //     </a>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={`md:h-[500px] selector`}>
            <Image
              src={formatImageUrl(image)}
              alt={`Image ${index + 1}`}
              className="h-full w-full rounded"
              width={800}
              height={400}
              objectFit="cover"
              layout="responsive"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
