import Card from "@/components/card";
import CardGrid from "@/components/card-grid";
import Hero from "@/components/hero";
import Page from "@/components/page";
import { storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  components: {
    page: Page,
    card: Card,
    hero: Hero,
    "card grid": CardGrid,
  },
});
