import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["googleapis"],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;