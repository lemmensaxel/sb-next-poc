import Card from "@/components/nestable/card";
import CardGrid from "@/components/nestable/card-grid";
import CodeBlock from "@/components/nestable/code-block";
import Hero from "@/components/nestable/hero";
import Page from "@/components/content-type/page";
import RichTextBlok from "@/components/nestable/rich-text-blok";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import BlogPostGrid from "@/components/nestable/blog-post-grid";
import BlogPost from "@/components/content-type/blog-post";
import FallbackComponent from "@/components/fallback";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    cache: { type: "memory", clear: "manual" },
  },
  components: {
    page: Page,
    card: Card,
    hero: Hero,
    "card grid": CardGrid,
    blogpost: BlogPost,
    "blogpost-grid": BlogPostGrid,
    codeblock: CodeBlock,
    "rich-text-blok": RichTextBlok,
  },
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
});
