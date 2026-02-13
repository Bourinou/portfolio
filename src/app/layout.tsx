import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageLoadEffects from "@/components/PageLoadEffects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: 'PAPE Dimitri - %s',
    default: 'PAPE Dimitri - Portfolio',
  },
  description: "Portfolio de PAPE Dimitri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <PageLoadEffects />
        <main> {children} </main>
        <Footer />
      </body>
    </html>

  );
}
