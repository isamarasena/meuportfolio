import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/meuportfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
