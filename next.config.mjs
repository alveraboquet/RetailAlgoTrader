import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import securityHeaders from './security/securityHeaders';

// Set up MDX file support
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkGfm adds support for markdown tables
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // removes x-powered-by header to restrict sensitive info from attackers
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default withMDX(nextConfig);
