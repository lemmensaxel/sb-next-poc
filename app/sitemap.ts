import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // If you have dynamic routes, you can generate them here
  // Should be localised if the website supports multiple languages!
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL || "",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
