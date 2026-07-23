import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fix turbopack workspace root detection
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Redirect root to prescription page
  async redirects() {
    return [
      {
        source: "/",
        destination: "/prescription",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
