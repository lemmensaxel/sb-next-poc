import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/utils/fetchStory";
import { Metadata } from "next";
// import { Metadata, ResolvingMetadata } from "next";

type Params = Promise<{ slug?: string[] }>;

type Props = {
  params: Params;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const { story } = await fetchStory("published", slug);

  return {
    title: story.content.seo.title,
    description: story.content.seo.description,
    openGraph: {
      title: story.content.seo.title,
      description: story.content.seo.description,
    },
  };
}

export default async function Home({ params }: { params: Params }) {
  const slug = (await params).slug;
  const { story } = await fetchStory("published", slug);

  if (!story) {
    return <div>Page not found</div>;
  }

  return <StoryblokStory story={story} />;
}
