import Card, { CardProps } from "./card";

interface CardGridProps {
  title?: string;
  subtitle?: string;
  cards: CardProps[];
}

export default function CardGrid(props: CardGridProps) {
  return (
    <section className="flex flex-col justify-center items-center py-16 min-h-96">
      <h1 className="text-4xl font-bold leading-relaxed">{props.title}</h1>
      <h2 className="text-lg mt-1">{props.subtitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 m-6">
        {props.cards.map((card) => (
          <Card
            id={card.id}
            key={"card-" + card.id}
            title={card.title}
            image={card.image}
            body={card.body}
            subTitle={card.subTitle}
            url={card.url}
          />
        ))}
      </div>
    </section>
  );
}
