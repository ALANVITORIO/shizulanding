/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./public/**/*'],
    },
  },
  images: {
    domains: ['picsum.photos'],
  },
  // Disable file tracing for development to avoid permission issues
  ...(process.env.NODE_ENV === 'development' && {
    experimental: {
      outputFileTracing: false,
    },
  }),
};

export default nextConfig;
