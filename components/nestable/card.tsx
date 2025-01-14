import { Card as PrimeCard } from "primereact/card";
import Image from "next/image";
import Link from "next/link";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface CardProps {
  blok: SbCardPageData;
}

export interface SbCardPageData extends SbBlokData {
  title: string;
  subTitle?: string;
  image: {
    filename: string;
    alt: string;
  };
  body: string;
  url?: {
    url: string;
  };
}

export default async function Card(props: CardProps) {
  const header = (
    <div className="h-48 relative">
      <Image
        alt={props.blok.image.alt}
        src={props.blok.image.filename}
        className="rounded-t object-cover"
        sizes="384x192"
        fill
        quality={100}
        priority // Load image immediately because it is most likely to be above the fold
      />
    </div>
  );

  // If required properties are missing, render a dummy card
  if (
    !props.blok.image.filename ||
    !props.blok.image.alt ||
    !props.blok.title ||
    !props.blok.body
  ) {
    return (
      <div
        {...storyblokEditable(props.blok)}
        key={props.blok._uid}
        className="card flex justify-content-center animate-fade"
      >
        <div className="w-96 h-96 bg-gray-100 flex justify-center items-center text-center italic">
          Vul alle verplichte velden van de Card component in!
        </div>
      </div>
    );
  }

  if (!props.blok.url?.url) {
    return (
      <div
        {...storyblokEditable(props.blok)}
        key={props.blok._uid}
        className="card flex justify-content-center animate-fade"
      >
        <PrimeCard
          title={props.blok.title}
          subTitle={props.blok.subTitle}
          header={header}
          className="overflow-hidden w-96 h-96"
        >
          <p className="m-0 line-clamp-3">{props.blok.body}</p>
        </PrimeCard>
      </div>
    );
  }

  return (
    <Link href={props.blok.url.url} passHref>
      <div
        {...storyblokEditable(props.blok)}
        key={props.blok._uid}
        className="card flex justify-content-center animate-fade"
      >
        <PrimeCard
          title={props.blok.title}
          subTitle={props.blok.subTitle}
          header={header}
          className="max-w-sm overflow-hidden"
        >
          <p className="m-0">{props.blok.body}</p>
        </PrimeCard>
      </div>
    </Link>
  );
}
