import { ISbStoryData } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export const fetchStory = async (
  version: "draft" | "published",
  slug?: string[]
) => {
  getStoryblokApi();
  const correctSlug = `/${slug ? slug.join("/") : "home"}`;

  const response = await getStoryblokApi().getStory(
    correctSlug,
    {
      version: version,
    },
    {
      cache: version === "published" ? "default" : "no-store",
    }
  );

  console.log(
    "Storyblok GET story response",
    response?.data?.story?.content?.body
  );

  return response?.data as { story: ISbStoryData };

  //   return fetch(
  //     `
  //     https://api.storyblok.com/v2/cdn/stories${correctSlug}?version=${version}&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}
  // `,
  //     {
  //       next: { tags: ["cms"] },
  //       cache: version === "published" ? "default" : "no-store",
  //     }
  //   ).then((res) => res.json()) as Promise<{ story: ISbStoryData }>;
};
