"use client";

export default function Footer() {
  return (
    <footer className=" bg-gray-100 flex justify-center items-center h-16 fixed bottom-0 left-0 right-0">
      &copy; {new Date().getFullYear()} Nextjs + Storyblok POC
    </footer>
  );
}
