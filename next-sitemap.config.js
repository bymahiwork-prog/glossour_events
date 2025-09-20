/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.effortlessevents.in/',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 5000,       // Split if too many URLs
};