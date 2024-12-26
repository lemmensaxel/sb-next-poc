import { Card as PrimeCard } from "primereact/card";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  id: string;
  title: string;
  subTitle?: string;
  image: {
    src: string;
    alt: string;
  };
  body: string;
  url?: string;
}

export default async function Card(props: CardProps) {
  const header = (
    <div className="h-48 relative">
      <Image
        alt={props.image.alt}
        src={props.image.src}
        className="rounded-t object-cover"
        sizes="384x192"
        fill
        quality={100}
        priority // Load image immediately because it is most likely to be above the fold
      />
    </div>
  );

  if (!props.url) {
    return (
      <div className="card flex justify-content-center animate-fade">
        <PrimeCard
          title={props.title}
          subTitle={props.subTitle}
          header={header}
          className="max-w-sm overflow-hidden"
        >
          <p className="m-0">{props.body}</p>
        </PrimeCard>
      </div>
    );
  }

  return (
    <Link href={props.url} passHref>
      <div className="card flex justify-content-center animate-fade">
        <PrimeCard
          title={props.title}
          subTitle={props.subTitle}
          header={header}
          className="max-w-sm overflow-hidden"
        >
          <p className="m-0">{props.body}</p>
        </PrimeCard>
      </div>
    </Link>
  );
}
