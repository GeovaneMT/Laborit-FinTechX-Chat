import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set true when all layouts/pages comply with Cache Components + Suspense (see README).
  cacheComponents: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Dev: uncomment to analyze bundles — `pnpm add -D @next/bundle-analyzer` then wrap config
  // import bundleAnalyzer from '@next/bundle-analyzer'
  // const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })
};

export default nextConfig;
