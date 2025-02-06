"use client"; // Ensure it's a Client Component

import Image from "next/image";

export default function FullWidthAddClient({
  imageUrl,
  marginTop,
  className,
}: {
  imageUrl: string;
  marginTop?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[80px] md:h-[150px] ${
        marginTop ? "mt-6" : ""
      } overflow-hidden ${className}`}
    >
      <Image
        src={imageUrl || "/path/to/default-image.jpg"}
        className="w-full h-full"
        alt="Header Ad"
        width={500}
        height={150}
      />
    </div>
  );
}
