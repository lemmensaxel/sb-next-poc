import Image from "next/image";
interface HeroProps {
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export default function Hero(props: HeroProps) {
  return (
    <section className="flex flex-col justify-center items-center py-16 min-h-96 bg-gray-200 relative">
      {props.image && (
        <Image
          alt={props.image.alt}
          src={props.image.src}
          className="object-cover"
          sizes="100vw"
          fill
          quality={100}
          priority // Load image immediately because it is most likely to be above the fold
        />
      )}
      <div
        className={`text-center z-0 p-4 mx-6 ${
          !!props.image && "bg-white bg-opacity-40 rounded-lg"
        }`}
      >
        <h1 className="text-5xl font-bold leading-relaxed z-10">
          {props.title}
        </h1>
        <h2 className="text-xl mt-1 z-10">{props.subtitle}</h2>
      </div>
    </section>
  );
}
