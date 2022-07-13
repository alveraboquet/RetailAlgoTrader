/* eslint-disable quotes */
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

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

/**
 * False if Node env is not production. True if Node env is production
 */
const isProd = process.env.NODE_ENV === 'production';

/**
 * Custom content security policy to be used with content security policy header
 * defualt-src and script-src must allow "unsafe-eval" and "unsafe-inline" to properly work in development environment with oAuth providers
 * form-action includes auth0, facebook, and google access to support oAuth logins
 */
const contentSecurityPolicy = `
 default-src 'self' ${isProd ? '' : "* data: 'unsafe-eval' 'unsafe-inline'"};
 base-uri 'self';
 block-all-mixed-content;
 font-src 'self' https: data:;
 form-action 
   self 
   https://dev-bcrf42vl.us.auth0.com 
   http://localhost:3000/api/auth/signin/auth0 
   http://localhost:3000/api/auth/signin/facebook 
   www.facebook.com 
   http://localhost:3000/api/auth/signin/google
   *.google.com; 
 frame-ancestors 'self';
 img-src 'self' data:;
 object-src 'none';
 script-src 'self' ${isProd ? '' : "* data: 'unsafe-eval' 'unsafe-inline'"};;
 script-src-attr 'none';
 style-src 'self' https: 'unsafe-inline';
 upgrade-insecure-requests
`;

/**
 * Security headers to be used with all API routes in application
 */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'X-Download-Options',
    value: 'noopen',
  },
  {
    key: 'Origin-Agent-Cluster',
    value: '?1',
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },
];

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
