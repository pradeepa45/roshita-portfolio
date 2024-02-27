/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "r-prf.s3.ap-southeast-2.amazonaws.com",
        port: "",
      }
    ],
  },
};

export default nextConfig;
