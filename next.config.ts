import { ISbStoryData } from "@storyblok/react";

async function getRedirects() {
  const redirects = (await fetch(
    `https://api.storyblok.com/v2/cdn/stories?starts_with=redirects/&version=published&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}`,
    {
      next: { tags: ["cms"] },
      cache: "no-store",
    }
  ).then((res) => res.json())) as { stories: ISbStoryData[] };

  return redirects.stories.map((story) => ({
    source: story.content.path,
    destination: "/" + story.content.to.cached_url,
    permanent: true, // Set to true if you want a 301 redirect
  }));
}

module.exports = async () => {
  const redirects = await getRedirects();
  return {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    async redirects() {
      return redirects;
    },
  };
};
