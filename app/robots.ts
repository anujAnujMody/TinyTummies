import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"],
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/get-started"],
      },
    ],
    sitemap: "https://tinytummies.com/sitemap.xml",
  };
}