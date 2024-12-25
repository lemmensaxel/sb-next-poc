import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
