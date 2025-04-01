import { SbBlokData } from "@storyblok/react/rsc";
import { permanentRedirect } from "next/navigation";
import React from "react";

interface SbPageData extends SbBlokData {
  body: SbBlokData[];
}

interface PageProps {
  blok: SbPageData;
}

const Redirect: React.FunctionComponent<PageProps> = ({ blok }) => {
  console.log(blok);
  return <p>{JSON.stringify(blok)}</p>;
  // permanentRedirect(path);
};

export default Redirect;
