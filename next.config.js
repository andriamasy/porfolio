/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuration optimisée pour Vercel
  // output: 'export' est retiré pour bénéficier des optimisations Vercel
  images: {
    // Vercel optimise automatiquement les images
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig

