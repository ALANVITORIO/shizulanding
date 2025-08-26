/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  // Mover para a chave de topo conforme aviso de depreciação
  outputFileTracingIncludes: {
    '/': ['./public/**/*'],
  },
  images: {
    domains: ['picsum.photos'],
  },
};

export default nextConfig;
