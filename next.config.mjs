/* eslint-disable quotes */
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import remarkToc from 'remark-toc';

// Set up MDX file support
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkGfm adds support for markdown tables
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [
      rehypeSlug, // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
      rehypeHighlight, // add synax highlighting for code blocks
    ],
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
let contentSecurityPolicy;
if (isProd) {
  contentSecurityPolicy = `
    default-src 'self';
    base-uri 'self';
    child-src 'self';
    connect-src 'self' https://checkout.stripe.com https://api.stripe.com;
    font-src 'self' https: data:;
    form-action 
      'self' 
      https://dev-bcrf42vl.us.auth0.com 
      http://localhost:3000/api/auth/signin/auth0 
      http://localhost:3000/api/auth/signin/facebook 
      www.facebook.com 
      http://localhost:3000/api/auth/signin/google
      *.google.com
      https://billing.stripe.com;
    frame-ancestors 'none';
    frame-src 'self' https://checkout.stripe.com https://js.stripe.com https://hooks.stripe.com https://hooks.stripe.com;
    img-src 'self' https://*.stripe.com data:;
    object-src 'none';
    script-src 
      'self'
      https://checkout.stripe.com  
      https://js.stripe.com ;
    script-src-attr 'none';
    style-src 'self' https: 'unsafe-inline';
    upgrade-insecure-requests
  `;
} else {
  contentSecurityPolicy = `
    default-src 'self' 'unsafe-eval' 'unsafe-inline';
    base-uri 'self';
    child-src 'self';
    connect-src 'self' https://checkout.stripe.com https://api.stripe.com ws://localhost:3000/;
    font-src 'self' https: data:;
    form-action 
      'self' 
      https://dev-bcrf42vl.us.auth0.com 
      http://localhost:3000/api/auth/signin/auth0 
      http://localhost:3000/api/auth/signin/facebook 
      www.facebook.com 
      http://localhost:3000/api/auth/signin/google
      *.google.com
      https://billing.stripe.com;
    frame-ancestors 'none';
    frame-src 'self' https://checkout.stripe.com https://js.stripe.com https://hooks.stripe.com https://hooks.stripe.com;
    img-src 'self' https://*.stripe.com data:;
    object-src 'none';
    script-src 
      'self' 
      'unsafe-eval' 'unsafe-inline'
      https://checkout.stripe.com  
      https://js.stripe.com
      https://khan.github.io/tota11y/dist/tota11y.min.js;
    script-src-attr 'none';
    style-src 'self' https: 'unsafe-inline';
  `;
}

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
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'deny',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer',
  },
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(), // Removes whitespace
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
  {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'require-corp',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
  {
    key: 'Permissions-Policy',
    value:
      'accelerometer=(),autoplay=(),camera=(),display-capture=(),document-domain=(),encrypted-media=(),fullscreen=(),geolocation=(),gyroscope=(),magnetometer=(),microphone=(),midi=(),payment=(),picture-in-picture=(),publickey-credentials-get=(),screen-wake-lock=(),sync-xhr=(self),usb=(),web-share=(),xr-spatial-tracking=()',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Append the default value with md extensions
  poweredByHeader: false, // removes x-powered-by header to restrict sensitive info from attackers
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // Only applies Clear-Site-Data header to deleteCustomer path
        // Above headers still apply
        source: '/api/stripe/customer/deleteCustomer',
        headers: [
          {
            key: 'Clear-Site-Data',
            value: '"cache", "cookies", "storage"',
          },
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);
