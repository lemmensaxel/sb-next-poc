import Hero from "@/components/hero";
import CardGrid from "@/components/card-grid";

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
      <Hero title="Blogs" subtitle="Een overzicht van al onze blogposts" />
      <CardGrid cards={blogs} />
    </>
  );
}
