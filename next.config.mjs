/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    dynamicIO: true,
    authInterrupts: true
  }
};

export default nextConfig;
