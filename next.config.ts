import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.terabyteshop.com.br",
      },
      {
        protocol: "https",
        hostname: "*.kabum.com.br",
      },
      {
        protocol: "https",
        hostname: "*.pichau.com.br",
      },
    ],
  },
};

export default nextConfig;
