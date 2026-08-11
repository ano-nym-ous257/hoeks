import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.gamefreakdev.xyz/sitemap.xml",
    host: "https://www.gamefreakdev.xyz",
  };
}
