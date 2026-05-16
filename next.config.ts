import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats first, fall back to WebP, then origin
    formats: ["image/avif", "image/webp"],
    // Cache optimized images longer to amortize the optimization cost
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "**.vercel-storage.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "hatscripts.github.io" },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default config;
