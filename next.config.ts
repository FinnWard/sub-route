import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/docs",
  output: "standalone",
  reactCompiler: true,
};

export default nextConfig;
