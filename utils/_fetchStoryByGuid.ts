import { ISbStoryData } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export const fetchStoryByGuid = async (
  version: "draft" | "published",
  guid: string
) => {
  getStoryblokApi();
  return fetch(
    `
    https://api.storyblok.com/v2/cdn/stories/${guid}?find_by=uuid&version=${version}&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}
`,
    {
      next: { tags: ["cms"] },
      cache: version === "published" ? "default" : "no-store",
    }
  ).then((res) => res.json()) as Promise<{ story: ISbStoryData }>;
};
