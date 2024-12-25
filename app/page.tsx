import Hero from "@/components/hero";
import CardGrid from "@/components/card-grid";

const projects = [
  {
    id: "1",
    title: "Mijn Magazines",
    subTitle: "Roularta Media Group",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec nunc aliquam ultricies. Nullam vel turpis nec nunc",
    image: {
      alt: "Roularta MijnMagazines app icon",
      src: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f3/77/6a/f3776ae0-ee00-387a-c718-a5859a990c99/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png",
    },
  },
  {
    id: "2",
    title: "Q8 App",
    subTitle: "Kuweit Petroleum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec nunc aliquam ultricies. Nullam vel turpis nec nunc",
    image: {
      alt: "Q8 app icon",
      src: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/63/6b/ee/636beec5-d7d5-39a2-29ae-50f0a85741e2/Q8PRD_AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png",
    },
  },
  {
    id: "3",
    title: "i-Learn",
    subTitle: "imec",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec nunc aliquam ultricies. Nullam vel turpis nec nunc",
    image: {
      alt: "i-Learn logo",
      src: "https://i.vimeocdn.com/video/1538957386-2d937eb13ef602a84d48c69a72bcc3d4b421894d6eef482e87f8b251cfbb21b7-d?f=webp",
    },
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Nextjs + Storyblok POC"
        subtitle="A boilerplate for AE Studio projects"
      />
      <CardGrid
        title="Our projects"
        subtitle="A collection of the projects we did for our clients"
        cards={projects}
      />
    </>
  );
}
