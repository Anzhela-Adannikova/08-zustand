import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      },
    ],
  },
};

export default nextConfig;
