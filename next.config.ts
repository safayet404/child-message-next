import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cmapi.barrzen.com",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
