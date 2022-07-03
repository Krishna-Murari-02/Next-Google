/** @type {import('next').NextConfig} */
const nextConfig = {
  presets: ["next/babel"],
  reactStrictMode: true,
  images: {
    domains: [
      "www.clipartmax.com",
      "assets.stickpng.com",
      "www.encrypted-tbn0.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
