/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
        unoptimized: true, // If using images, especially with static exports
      },
};

export default nextConfig;
