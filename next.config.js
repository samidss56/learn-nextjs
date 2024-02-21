/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adidas.co.id",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
