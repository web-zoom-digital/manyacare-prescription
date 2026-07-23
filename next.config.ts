import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
