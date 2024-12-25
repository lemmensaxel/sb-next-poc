import Hero from "@/components/hero";
import CardGrid from "@/components/card-grid";
import Head from "next/head";

const blogs = [
  {
    id: "1",
    title: "Blog 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec nunc aliquam ultricies. Nullam vel turpis nec nunc",
    image: {
      alt: "Cover image of blog 1",
      src: "https://picsum.photos/seed/1735119794794/300/300",
    },
  },
  {
    id: "2",
    title: "Blog 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec nunc aliquam ultricies. Nullam vel turpis nec nunc",
    image: {
      alt: "Cover image of blog 2",
      src: "https://picsum.photos/seed/1735119801365/300/300",
    },
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Nextjs + Storyblok POC | Blog</title>
        <meta name="robots" content="all" key="robots" />
        <meta
          name="description"
          content="This is the blog overview page of a boilerplate for AE Studio projects using Next.js and Storyblok"
          key="desc"
        />
        <meta
          property="og:title"
          content="Nextjs + Storyblok POC | Blog"
          key="og:title"
        />
        <meta
          property="og:description"
          content="This is the blog overview page of a boilerplate for AE Studio projects using Next.js and Storyblok"
          key="og:description"
        />
      </Head>
      <Hero title="Blogs" subtitle="Een overzicht van al onze blogposts" />
      <CardGrid cards={blogs} />
    </>
  );
}
