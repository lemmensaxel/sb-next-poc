import { ISbStoryData } from "@storyblok/react/rsc";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  // https://github.com/vercel/next.js/issues/48169#issuecomment-2297007678
  // PROBLEM: no data cache in middleware...
  const redirects = (await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/redirects`
  ).then((res) => res.json())) as { stories: ISbStoryData[] };

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
