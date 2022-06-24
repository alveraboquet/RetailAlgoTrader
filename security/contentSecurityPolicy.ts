import isProd from './isProduction';

/**
 * Custom content security policy to be used with content security policy header
 * defualt-src and script-src must allow "unsafe-eval" and "unsafe-inline" to properly work in development environment with oAuth providers
 * form-action includes auth0, facebook, and google access to support oAuth logins
 */
const contentSecurityPolicy = `
  default-src 'self' ${isProd ? '' : '* data: "unsafe-eval" "unsafe-inline"'};
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
  script-src 'self' ${isProd ? '' : '* data: "unsafe-eval" "unsafe-inline"'};;
  script-src-attr 'none';
  style-src 'self' https: 'unsafe-inline';
  upgrade-insecure-requests
`;

export default contentSecurityPolicy;
