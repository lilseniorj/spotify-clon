/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "www.lahiguera.net"],
  },
};

module.exports = nextConfig;
