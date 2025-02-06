import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import VerticalAddLayout from "@/components/common/VerticalAddLayout";
import ScrollingText from "@/components/Homepage/ScrollingText";
import FullWidthServer from "@/components/Homepage/FullWidthServer";

export const metadata: Metadata = {
  title: "Child Message",
  description: "Your daily news platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased max-w-[1500px] mx-auto`}>
        <FullWidthServer className="mb-2" />
        <Header />
        <ScrollingText />
        <main className="grid grid-cols-12 gap-x-4 mt-10 mx-4 md:mx-0">
          <div className="md:block hidden col-span-1">
            <VerticalAddLayout />
          </div>
          <div className="col-span-12 md:col-span-10">{children}</div>
          <div className="md:block hidden col-span-1">
            <VerticalAddLayout />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
