/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    
    // Set the basePath and assetPrefix for GitHub Pages (or similar platforms)
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',

    images: {
        unoptimized: true, // Disable image optimization for static export
    },
};

export default nextConfig;
