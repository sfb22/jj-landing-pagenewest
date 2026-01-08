/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "journey-jotter-media-222083021686.s3.eu-west-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // This will disable image optimization globally
  },
};

module.exports = nextConfig;
