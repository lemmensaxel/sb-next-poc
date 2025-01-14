import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
interface HeroProps {
  blok: SbPageData;
}

interface SbPageData extends SbBlokData {
  title: string;
  subtitle?: string;
  image?: {
    filename?: string;
    alt?: string;
  };
}

export default function Hero(props: HeroProps) {
  return (
    <section
      {...storyblokEditable(props.blok)}
      key={props.blok._uid}
      className="flex flex-col justify-center items-center py-16 min-h-96 bg-gray-200 relative"
    >
      {props.blok.image?.filename && (
        <Image
          alt={props.blok.image.alt || ""}
          src={props.blok.image.filename}
          className="object-cover"
          sizes="100vw"
          fill
          quality={100}
          priority // Load image immediately because it is most likely to be above the fold
        />
      )}
      <div
        className={`text-center z-0 p-4 mx-6 ${
          !!props.blok.image && "bg-white bg-opacity-40 rounded-lg"
        }`}
      >
        <h1 className="text-5xl font-bold leading-relaxed z-10">
          {props.blok.title}
        </h1>
        <h2 className="text-xl mt-1 z-10">{props.blok.subtitle}</h2>
      </div>
    </section>
  );
}
