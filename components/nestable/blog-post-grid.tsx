// import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
// import Card from "./card";
// import { fetchStoryByGuid } from "@/utils/fetchStoryByGuid";

// interface CardGridProps {
//   blok: SbPageData;
// }

// interface SbPageData extends SbBlokData {
//   title: string;
//   subtitle?: string;
//   posts: string[];
// }

// export default async function BlogPostGrid(props: CardGridProps) {
//   if (!props.blok.posts.length || !props.blok.title) {
//     return (
//       <main className="flex items-center justify-center h-full w-full">
//         <p className="text-center">
//           Vul minstens de titel en inhoud van de blogpost in om deze weer te
//           geven.
//         </p>
//       </main>
//     );
//   }

//   const posts = [];
//   for (let i = 0; i < props.blok.posts.length; i++) {
//     posts.push(
//       (await fetchStoryByGuid("published", props.blok.posts[i])).story
//     );
//   }
//   return (
//     <section
//       {...storyblokEditable(props.blok)}
//       key={props.blok._uid}
//       className="flex flex-col justify-center items-center py-16 min-h-96"
//     >
//       <h1 className="text-4xl font-bold leading-relaxed">{props.blok.title}</h1>
//       <h2 className="text-lg mt-1">{props.blok.subtitle}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 m-6">
//         {posts.map((post) => (
//           <Card
//             key={post.uuid}
//             blok={{
//               title: post.content.titel,
//               subTitle: post.content.subtitel,
//               image: {
//                 filename: post.content.image.filename,
//                 alt: post.content.image.alt,
//               },
//               body: post.content.beschrijving,
//               url: {
//                 url: post.full_slug,
//               },
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
