import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["*"],
      disallow: ["/api/", "/private/"],
    },
    sitemap: "https://www.randzy.com/sitemap.xml",
  };
}
