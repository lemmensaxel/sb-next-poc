import {
  ISbRichtext,
  renderRichText,
  SbBlokData,
  storyblokEditable,
} from "@storyblok/react/rsc";
import React from "react";
import Hero from "./hero";

interface SbPageData extends SbBlokData {
  titel: string;
  subtitel?: string;
  image?: {
    filename?: string;
    alt?: string;
  };
  inhoud: ISbRichtext;
}

interface PageProps {
  blok: SbPageData;
}

const BlogPost: React.FunctionComponent<PageProps> = ({ blok }) => {
  if (!blok.titel || !blok.inhoud) {
    return (
      <main className="flex items-center justify-center h-full w-full">
        <p className="text-center">
          Vul minstens de titel en inhoud van de blogpost in om deze weer te
          geven.
        </p>
      </main>
    );
  }

  return (
    <main {...storyblokEditable(blok)} className="w-full">
      <Hero
        blok={{
          title: blok.titel,
          subtitle: blok.subtitel,
          image: blok.image,
        }}
      />
      <div className="w-full flex justify-center items-center">
        <div
          className="w-full prose md:prose-lg mt-16 px-10"
          dangerouslySetInnerHTML={{
            __html: renderRichText(blok.inhoud) as string,
          }}
        ></div>
      </div>
    </main>
  );
};

export default BlogPost;
