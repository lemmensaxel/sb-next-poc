import {
  SbBlokData,
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import { SbCardPageData } from "./card";

interface CardGridProps {
  blok: SbPageData;
}

interface SbPageData extends SbBlokData {
  title?: string;
  subtitle?: string;
  cards: SbCardPageData[];
}

export default function CardGrid(props: CardGridProps) {
  return (
    <section
      {...storyblokEditable(props.blok)}
      key={props.blok._uid}
      className="flex flex-col justify-center items-center py-16 min-h-96"
    >
      <h1 className="text-4xl font-bold leading-relaxed">{props.blok.title}</h1>
      <h2 className="text-lg mt-1">{props.blok.subtitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 m-6">
        {props.blok.cards.map((card) => (
          <StoryblokServerComponent blok={card} key={card._uid} />
        ))}
      </div>
    </section>
  );
}
