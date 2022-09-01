/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  generateRobotsTxt: false,
  exclude: ['/app/*'],
};

export default sitemapConfig;
