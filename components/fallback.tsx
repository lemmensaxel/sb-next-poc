import { SbBlokData } from "@storyblok/react/rsc";
import React from "react";

interface SbPageData extends SbBlokData {
  body: SbBlokData[];
}

interface PageProps {
  blok: SbPageData;
}

const Page: React.FunctionComponent<PageProps> = ({ blok }) => {
  console.log(blok, "blok");
  return <p>Component not implemented</p>;
};

export default Page;
