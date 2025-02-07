import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import VerticalAddLayout from "@/components/common/VerticalAddLayout";
import ScrollingText from "@/components/Homepage/ScrollingText";
import FullWidthServer from "@/components/Homepage/FullWidthServer";
import { BASE_API, BASE_API_ASSET } from "@/constants/common";

export const metadata: Metadata = {
  title: "Child Message",
  description: "Your daily news platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const addResponse = await fetch(`${BASE_API}/ads`, { cache: "no-cache" })
    const addData = await addResponse.json()

    const side_image1 = addData?.data?.side_ad1
        ? `${BASE_API_ASSET}/${addData?.data?.side_ad1}`
        : "";
    const side_image2 = addData?.data?.side_ad2
        ? `${BASE_API_ASSET}/${addData?.data?.side_ad2}`
        : "";

  
        
  return (
    <html lang="en">
      <body className={`antialiased max-w-[1500px] mx-auto`}>
        <FullWidthServer className="mb-2" />
        <Header />
        <ScrollingText />
        <main className="grid grid-cols-12 gap-x-4 mt-10 mx-4 md:mx-0">
          <div className="md:block hidden col-span-1">
            <VerticalAddLayout side_ad={side_image1} />
          </div>
          <div className="col-span-12 md:col-span-10">{children}</div>
          <div className="md:block hidden col-span-1">
            <VerticalAddLayout  side_ad={side_image2} />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
