import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

type Props = SbBlokData;

const FallbackComponent = (blok: Props) => {
  return (
    <h2 {...storyblokEditable(blok)}>
      This component does not exists: {blok.component}
    </h2>
  );
};

export default FallbackComponent;
