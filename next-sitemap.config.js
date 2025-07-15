/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://andersonjuhasc.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/404"],
  alternateRefs: [
    {
      href: "https://andersonjuhasc.com/pt/index.html",
      hreflang: "pt",
    },
    {
      href: "https://andersonjuhasc.com/index.html",
      hreflang: "en",
    },
  ],
};
