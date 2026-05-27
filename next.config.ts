import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:8080", "127.0.0.1:8080"],
    },
  },
  assetPrefix: "/docs",
  output: "standalone",
  reactCompiler: true,
};

export default nextConfig;
