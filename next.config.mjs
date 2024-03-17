/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
