/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    
    // Set the basePath and assetPrefix for GitHub Pages (or similar platforms)
    basePath: isProd ? '/blue-echo-gym-website' : '',
    assetPrefix: isProd ? '/blue-echo-gym-website/' : '',

    images: {
        unoptimized: true, // Disable image optimization for static export
    },
};

export default nextConfig;
