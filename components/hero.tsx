"use client";

interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero(props: HeroProps) {
  return (
    <section className="flex flex-col justify-center items-center py-16 min-h-96 bg-gray-200">
      <h1 className="text-5xl font-bold leading-relaxed">{props.title}</h1>
      <h2 className="text-xl mt-1">{props.subtitle}</h2>
    </section>
  );
}
