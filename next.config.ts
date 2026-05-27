import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/docs",
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:8080", "127.0.0.1:8080"],
    },
  },
  output: "standalone",
  reactCompiler: true,
};

export default nextConfig;
