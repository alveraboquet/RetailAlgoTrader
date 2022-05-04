/* eslint-disable quotes */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const prod = process.env.NODE_ENV === 'production';

const ContentSecurityPolicy = `
  default-src 'self' ${prod ? '' : "* data: 'unsafe-eval' 'unsafe-inline'"};
  base-uri 'self';
  block-all-mixed-content;
  font-src 'self' https: data:;
  form-action self https://dev-bcrf42vl.us.auth0.com http://localhost:3000/api/auth/signin/auth0;
  frame-ancestors 'self';
  img-src 'self' data:;
  object-src 'none';
  script-src 'self' ${prod ? '' : "* data: 'unsafe-eval' 'unsafe-inline'"};;
  script-src-attr 'none';
  style-src 'self' https: 'unsafe-inline';
  upgrade-insecure-requests
`;

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
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
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

module.exports = {
  nextConfig,
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
