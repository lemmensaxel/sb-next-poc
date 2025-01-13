import {
  ISbRichtext,
  renderRichText,
  SbBlokData,
  storyblokEditable,
} from "@storyblok/react/rsc";

interface CardProps {
  blok: SbCardPageData;
}

export interface SbCardPageData extends SbBlokData {
  title: string;
  body: ISbRichtext;
}

export default async function RichTextBlok(props: CardProps) {
  // If required properties are missing, render a dummy card
  if (!props.blok.title || !props.blok.body) {
    return (
      <div
        {...storyblokEditable(props.blok)}
        key={props.blok._uid}
        className="flex justify-content-center"
      >
        <div className="w-full bg-gray-100 flex justify-center items-center text-center italic py-16">
          Vul alle verplichte velden van de Rich Text component in!
        </div>
      </div>
    );
  }

  return (
    <section
      {...storyblokEditable(props.blok)}
      key={props.blok._uid}
      className="flex flex-col justify-center items-center py-16"
    >
      <h1 className="text-4xl font-bold leading-relaxed">{props.blok.title}</h1>
      <div className="w-full flex justify-center items-center">
        <div
          className="w-full prose md:prose-lg mt-16 px-10"
          dangerouslySetInnerHTML={{
            __html: renderRichText(props.blok.body) as string,
          }}
        ></div>
      </div>
    </section>
  );
}
