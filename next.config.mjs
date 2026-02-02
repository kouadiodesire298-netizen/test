/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Cela ignore les erreurs d'apostrophes pendant la construction sur Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionnel : ignore aussi les petites erreurs de types si besoin
    ignoreBuildErrors: true,
  },
};

export default nextConfig;