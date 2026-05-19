import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/transfer-vision",
  images: { unoptimized: true },
};

export default nextConfig;
