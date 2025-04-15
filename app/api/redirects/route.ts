import { NextResponse } from "next/server";

export async function GET() {
  const fetchResp = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?starts_with=redirects/&version=published&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}`,
    { next: { revalidate: 3600 } } // Or any other cache rule you want
  );
  // Minimal example but you can forward also headers and response status and other things as you need them
  return NextResponse.json(await fetchResp.json());
}
