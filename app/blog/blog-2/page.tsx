import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs + Storyblok POC | Blogpost 2",
  robots: "all",
  description:
    "This is a random description of a blogpost for the boilerplate for AE Studio projects using Next.js and Storyblok",

  openGraph: {
    title: "Nextjs + Storyblok POC | Blogpost 2",
    description:
      "This is a random description of a blogpost for the boilerplate for AE Studio projects using Next.js and Storyblok",
  },
};

export default function Blog() {
  return (
    <>
      <Hero
        title="Blogpost 2"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec nunc aliquam ultricies. Nullam vel turpis nec nunc"
        image={{
          alt: "Cover image of blog 1",
          src: "https://picsum.photos/seed/1735119801365/1200/500",
        }}
      />
    </>
  );
}
