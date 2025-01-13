import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/utils/fetchStory";
import { Metadata } from "next";
import { fetchLinks } from "@/utils/fetchLinks";
// import { Metadata, ResolvingMetadata } from "next";

type Params = Promise<{ slug?: string[] }>;

type Props = {
  params: Params;
};

// Generate metadata for the page (SEO)
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

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true;

// Let Next.js know which pages to statically generate
export async function generateStaticParams() {
  const { links } = await fetchLinks("published");
  const paths: { slug: string[] }[] = [];

  Object.keys(links).forEach((linkKey) => {
    const link = links[linkKey];

    // Skip if the link is a folder or if the slug is 'home'
    if (link.is_folder || link.slug === "home") {
      return;
    }

    const slug = link.slug;
    const splitSlug = slug.split("/");
    paths.push({ slug: splitSlug });
  });

  return paths;
}

export default async function Home({ params }: { params: Params }) {
  const slug = (await params).slug;
  const { story } = await fetchStory("published", slug);

  if (!story) {
    return <div>Page not found</div>;
  }

  return <StoryblokStory story={story} />;
}
