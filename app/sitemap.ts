import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const priorities: Record<string, number> = {
  "": 1,
  "/pricing": 0.9,
  "/book-demo": 0.8,
  "/about": 0.6,
  "/training": 0.6,
  "/policies": 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.keys(priorities);

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: priorities[route],
  }));
}
