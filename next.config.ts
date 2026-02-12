import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Static HTML export
  images: { unoptimized: true },  // Tailwind + static required
  trailingSlash: true,  // /page → /page/
};

export default nextConfig;
