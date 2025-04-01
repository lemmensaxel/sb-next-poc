import { ISbStoryData } from "@storyblok/react/rsc";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  // https://github.com/vercel/next.js/issues/48169#issuecomment-2297007678
  // PROBLEM: no data cache in middleware...
  const redirects = (await fetch(
    `https://api.storyblok.com/v2/cdn/stories?starts_with=redirects/&version=published&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}`
  ).then((res) => res.json())) as { stories: ISbStoryData[] };

  console.log(redirects);

  // TODO: expiry
  const hit = redirects.stories.find(
    (redirect) => redirect.content.path === currentPath
  );

  if (hit) {
    return NextResponse.redirect(
      new URL(request.nextUrl.origin + "/" + hit.content.to.cached_url),
      {
        status: 308,
      }
    );
  }
}

// See "Matching Paths" below to learn more

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
