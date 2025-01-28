import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { getStoryblokApi } from "@/lib/storyblok";

/*
 * This request can be used to enable Next.js' draft mode.
 * See https://nextjs.org/docs/app/building-your-application/configuring/draft-mode
 *
 * It is used in the Storyblok's Visual Editor to preview draft content.
 * When draft mode is enabled, we fetch the draft content from Storyblok. Otherwise, we fetch the published content.
 *
 * In order to enable draft mode, a request is sent to this /api/draft route with a query parameter containing the Storyblok `slug`.
 * e.g. /api/draft?slug=home
 *
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get("slug") || "";

  // Check if the provided slug exists. If the slug doesn't exist, prevent draft mode from being enabled.
  const story = await getStoryblokApi()?.getStory(slug, {
    version: "draft",
  });

  if (!story?.data?.story?.full_slug) {
    return new Response("Invalid slug", { status: 404 });
  }

  const draft = await draftMode();
  draft.enable();

  // The draft cookie set by Next.js has sameSite: 'Lax' which prevents it from being used from within the Storyblok Visual Editor.
  // We need to update the cookie with sameSite: 'None' to allow it to be used from within Storyblok.
  // TODO this is a temporary fix until https://github.com/vercel/next.js/issues/49927 is resolved.
  const cookieStore = await cookies();
  const draftCookieName = "__prerender_bypass";
  const draftCookie = cookieStore.get(draftCookieName);
  const draftValue = draftCookie?.value;
  if (draftValue) {
    cookieStore.set({
      name: draftCookieName,
      value: draftValue,
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "none", // this is the fix
    });
  }

  searchParams.delete("slug");
  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities.
  // Add the query parameters to the redirect URL, because the Storyblok Visual Editor uses these query parameters
  redirect(`/${slug}?${searchParams.toString()}`);
}
