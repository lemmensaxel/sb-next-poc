import { getStoryblokApi } from "@/lib/storyblok";

export const fetchLinks = async (version: "draft" | "published") => {
  getStoryblokApi();

  return fetch(
    `
    https://api.storyblok.com/v2/cdn/links?version=${version}&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}`,
    {
      next: { tags: ["cms"] },
      cache: version === "published" ? "default" : "no-store",
    }
  ).then((res) => res.json()) as Promise<{
    links: Record<
      string,
      {
        is_folder: boolean;
        slug: string;
      }
    >;
  }>;
};
