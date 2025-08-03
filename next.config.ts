import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    /**
     * Enabling this because website is a static website and images used across the website would be manually optimized via https://squoosh.app/editor
     */
    unoptimized: true,
  },
};

export default nextConfig;
