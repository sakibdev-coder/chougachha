import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'chougachha.jessore.gov.bd' },
      { protocol: 'https', hostname: 'objectstorage.ap-dcc-gazipur-1.oraclecloud15.com' },
    ],
  },
};

export default nextConfig;
