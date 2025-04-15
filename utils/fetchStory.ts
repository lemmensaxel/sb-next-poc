import { ISbStoryData } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export const fetchStory = async (
  version: "draft" | "published",
  slug?: string[]
) => {
  getStoryblokApi();
  console.log(slug, "slug");
  const correctSlug = `/${slug && slug.length ? slug.join("/") : "home"}`;

  try {
    console.log("Fetching story with slug: " + correctSlug);
    const response = await getStoryblokApi().getStory(
      correctSlug,
      {
        version: version,
      },
      {
        cache: version === "published" ? "default" : "no-store",
      }
    );
    return response?.data as { story: ISbStoryData };
  } catch (e: unknown) {
    console.log(e);
    return { story: undefined };
  }
};
