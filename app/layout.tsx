import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import Header from "@/components/nestable/header";
import Footer from "@/components/nestable/footer";
import StoryblokProvider from "@/components/storyblok-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <PrimeReactProvider>
        <html lang="en">
          <body>
            <div className="h-screen py-16">
              <Header />
              {children}
              <Footer />
            </div>
          </body>
        </html>
      </PrimeReactProvider>
    </StoryblokProvider>
  );
}
