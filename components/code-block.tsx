import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
interface HeroProps {
  blok: SbPageData;
}

interface SbPageData extends SbBlokData {
  code: string;
}

export default function CodeBlock(props: HeroProps) {
  if (!props.blok.code) {
    return (
      <section>
        <p>Geen code gevonden</p>
      </section>
    );
  }
  return (
    <section
      {...storyblokEditable(props.blok)}
      key={props.blok._uid}
      dangerouslySetInnerHTML={{
        __html: props.blok.code,
      }}
    ></section>
  );
}
