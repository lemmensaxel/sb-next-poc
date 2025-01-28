import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/utils/fetchStory";

type Params = Promise<{ slug?: string[] }>;

export default async function Home({ params }: { params: Params }) {
  const { slug } = await params;
  // const pageData = await fetchStory("draft", slug);
  const pageData = await fetchStory(`/${slug ? slug.join("/") : "home"}`);

  return <StoryblokStory story={pageData.story} />;
}
