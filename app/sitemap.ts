import { fetchLinks } from "@/utils/fetchLinks";
import type { MetadataRoute } from "next";

//TODO: What happens when ISR? How can we regenerate the sitemap?
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // If you have dynamic routes, you can generate them here
  // Should be localised if the website supports multiple languages!
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
  const { links } = await fetchLinks("published");
  const paths: {
    url: string;
    lastModified: Date;
    changeFrequency:
      | "monthly"
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "yearly"
      | "never"
      | undefined;
    priority: number;
  }[] = [];

  Object.keys(links).forEach((linkKey) => {
    const link = links[linkKey];

    // Skip if the link is a folder or if the slug is 'home'
    if (link.is_folder || link.slug === "home") {
      return;
    }

    paths.push({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${link.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
  });

  return paths;
}
